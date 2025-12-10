// Typewriter Effect
const typewriterText = "Cindy Tran";
const typewriterElement = document.getElementById("typewriter-text");
let charIndex = 0;

function typeWriter() {
    if (charIndex < typewriterText.length) {
        typewriterElement.textContent += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 200);
    } else {
        // Stop blinking cursor after typing is complete
        setTimeout(() => {
            typewriterElement.style.borderRight = "none";
            // Transition to secondary landing page
            setTimeout(() => {
                document.getElementById("landing-page").classList.remove("active");
                document.getElementById("secondary-landing").classList.add("active");
            }, 1000);
        }, 500);
    }
}

// Start typewriter effect when page loads
window.addEventListener("load", () => {
    setTimeout(typeWriter, 500);
});

// Draggable Boxes
const draggableBoxes = document.querySelectorAll(".draggable-box");
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

draggableBoxes.forEach(box => {
    // Mouse events
    box.addEventListener("mousedown", startDrag);
    box.addEventListener("click", handleBoxClick);
    
    // Touch events for mobile
    box.addEventListener("touchstart", startDragTouch);
});

function startDrag(e) {
    if (e.target.closest('.draggable-box')) {
        draggedElement = e.target.closest('.draggable-box');
        const rect = draggedElement.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        draggedElement.style.zIndex = 1000;
        
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);
        
        e.preventDefault();
    }
}

function drag(e) {
    if (draggedElement) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        
        draggedElement.style.left = newX + "px";
        draggedElement.style.top = newY + "px";
    }
}

function stopDrag() {
    if (draggedElement) {
        draggedElement = null;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }
}

function startDragTouch(e) {
    if (e.target.closest('.draggable-box')) {
        draggedElement = e.target.closest('.draggable-box');
        const touch = e.touches[0];
        const rect = draggedElement.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
        
        draggedElement.style.zIndex = 1000;
        
        document.addEventListener("touchmove", dragTouch);
        document.addEventListener("touchend", stopDragTouch);
        
        e.preventDefault();
    }
}

function dragTouch(e) {
    if (draggedElement) {
        const touch = e.touches[0];
        const newX = touch.clientX - offsetX;
        const newY = touch.clientY - offsetY;
        
        draggedElement.style.left = newX + "px";
        draggedElement.style.top = newY + "px";
    }
}

function stopDragTouch() {
    if (draggedElement) {
        draggedElement = null;
        document.removeEventListener("touchmove", dragTouch);
        document.removeEventListener("touchend", stopDragTouch);
    }
}

// Handle box clicks to navigate to pages
let clickStartPos = { x: 0, y: 0 };

draggableBoxes.forEach(box => {
    box.addEventListener("mousedown", (e) => {
        clickStartPos = { x: e.clientX, y: e.clientY };
    });
    
    box.addEventListener("touchstart", (e) => {
        const touch = e.touches[0];
        clickStartPos = { x: touch.clientX, y: touch.clientY };
    });
});

function handleBoxClick(e) {
    const clickEndPos = { x: e.clientX, y: e.clientY };
    const distance = Math.sqrt(
        Math.pow(clickEndPos.x - clickStartPos.x, 2) + 
        Math.pow(clickEndPos.y - clickStartPos.y, 2)
    );
    
    // Only navigate if the box wasn't dragged (distance < 10 pixels)
    if (distance < 10) {
        const pageName = e.currentTarget.dataset.page;
        navigateToPage(pageName);
    }
}

// Navigation
function navigateToPage(pageName) {
    // Hide secondary landing
    document.getElementById("secondary-landing").classList.remove("active");
    
    // Hide all content pages
    document.querySelectorAll(".content-page").forEach(page => {
        page.classList.remove("active");
    });
    
    // Show selected page
    if (pageName === "secondary") {
        document.getElementById("secondary-landing").classList.add("active");
    } else {
        const targetPage = document.getElementById(pageName + "-page");
        if (targetPage) {
            targetPage.classList.add("active");
        }
    }
}

// Navigation buttons
document.querySelectorAll(".nav-btn, .nav-logo").forEach(btn => {
    btn.addEventListener("click", () => {
        const pageName = btn.dataset.page;
        navigateToPage(pageName);
    });
});

// Portfolio Items - Charts and Designs
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach(item => {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.textContent = item.dataset.name;
    overlay.style.backgroundColor = item.dataset.color;
    overlay.style.opacity = "0";
    item.appendChild(overlay);
    
    item.addEventListener("mouseenter", () => {
        overlay.style.opacity = "0.8";
    });
    
    item.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0";
    });
});

// Chart Items - Show popup with details
const chartItems = document.querySelectorAll(".chart-item");
const chartPopup = document.getElementById("chart-popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");

const chartDescriptions = {
    "Growth and Pay by Education Level": "A scatter plot analyzing the relationship between median annual wages and employment growth across different occupations (2024-2034). Each dot represents an occupation colored by typical entry-level education requirements",
    "Climate Change Visualization": "An interactive data visualization exploring global temperature anomalies over the past century. Includes animated time series, geographic heat maps, and predictive modeling of future climate scenarios based on current trends.",
    "Population Growth Trends": "Demographic analysis visualizing population growth patterns across continents from 1950-2023. Features pyramid charts, growth rate comparisons, and projections through 2050 based on UN data.",
    "Energy Consumption Data": "Comparative analysis of energy consumption patterns across different sectors and countries. Includes breakdowns by renewable vs. non-renewable sources, efficiency metrics, and historical trend analysis.",
    "Economic Indicators": "Multi-metric economic dashboard tracking GDP growth, unemployment rates, inflation, and trade balances. Features correlation analysis and economic cycle identification using advanced time series analysis.",
    "Social Media Analytics": "Deep dive into social media engagement metrics including reach, impressions, sentiment analysis, and audience demographics. Built with Python and includes predictive engagement modeling.",
    "Transportation Patterns": "Analysis of urban transportation usage patterns including peak hours, route optimization, and mode preferences. Features network graphs and flow visualization using real city data.",
    "Healthcare Metrics": "Healthcare system performance metrics including patient outcomes, wait times, resource utilization, and cost analysis. Visualizes trends across multiple facilities and demographic groups.",
    "Education Statistics": "Comprehensive analysis of educational attainment, enrollment rates, and performance metrics across different regions. Includes socioeconomic correlation analysis and equity assessments."
};

chartItems.forEach(item => {
    item.addEventListener("click", () => {
        const chartName = item.dataset.name;
        popupTitle.textContent = chartName;
        popupDescription.textContent = chartDescriptions[chartName] || "Detailed analysis and visualization of data trends.";
        chartPopup.classList.add("active");
    });
});

// Design Items - Show gallery
const designItems = document.querySelectorAll(".design-item");
const designPopup = document.getElementById("design-popup");
const galleryImage = document.querySelector(".gallery-image");
const galleryCounter = document.querySelector(".gallery-counter");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentGalleryIndex = 0;
let currentProjectImages = [];

const projectGalleries = {
    "brand": ["Brand Logo", "Brand Guidelines", "Business Cards", "Letterhead"],
    "event": ["Main Event Poster", "Social Media Version", "Print Flyer", "Banner Design"],
    "social": ["Campaign Hero", "Instagram Posts", "Story Templates", "Facebook Cover"],
    "magazine": ["Cover Design", "Feature Spread", "Contents Page", "Back Cover"],
    "typo": ["Font Exploration 1", "Font Exploration 2", "Typographic Poster", "Letter Forms"]
};

designItems.forEach(item => {
    item.addEventListener("click", () => {
        const projectName = item.dataset.project;
        currentProjectImages = projectGalleries[projectName] || ["Design 1", "Design 2", "Design 3"];
        currentGalleryIndex = 0;
        updateGallery();
        designPopup.classList.add("active");
    });
});

function updateGallery() {
    const imageName = currentProjectImages[currentGalleryIndex];
    galleryImage.style.backgroundColor = getRandomColor();
    galleryImage.textContent = "";
    galleryCounter.textContent = `${currentGalleryIndex + 1} / ${currentProjectImages.length}`;
}

function getRandomColor() {
    const colors = ["#74342b", "#8fa5d1", "#3a1312"];
    return colors[Math.floor(Math.random() * colors.length)];
}

prevBtn.addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    updateGallery();
});

nextBtn.addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % currentProjectImages.length;
    updateGallery();
});

// Close popups
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        chartPopup.classList.remove("active");
        designPopup.classList.remove("active");
    });
});

// Close popup when clicking outside
chartPopup.addEventListener("click", (e) => {
    if (e.target === chartPopup) {
        chartPopup.classList.remove("active");
    }
});

designPopup.addEventListener("click", (e) => {
    if (e.target === designPopup) {
        designPopup.classList.remove("active");
    }
});

// Keyboard navigation for gallery
document.addEventListener("keydown", (e) => {
    if (designPopup.classList.contains("active")) {
        if (e.key === "ArrowLeft") {
            prevBtn.click();
        } else if (e.key === "ArrowRight") {
            nextBtn.click();
        } else if (e.key === "Escape") {
            designPopup.classList.remove("active");
        }
    }
    
    if (chartPopup.classList.contains("active") && e.key === "Escape") {
        chartPopup.classList.remove("active");
    }
});
