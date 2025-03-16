// DOM Elements
const sections = {
    home: {
        about: document.getElementById('about'),
        skills: document.getElementById('skills'),
        services: document.getElementById('services')
    },
    certifications: document.getElementById('certifications'),
    experience: document.getElementById('experience'),
    contact: document.getElementById('contact')
};

const menuItems = {
    home: document.getElementById("home-button"),
    experience: document.getElementById('experience-button'),
    certifications: document.getElementById('certifications-button'),
    contact: document.getElementById('contact-button')
};

// Initialize sections visibility
Object.values(sections).forEach(section => {
    if (typeof section === 'object') {
        Object.values(section).forEach(subSection => {
            subSection.style.display = 'block';
        });
    } else {
        section.style.display = 'none';
    }
});

// Toggle menu functionality
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Generic function to show/hide sections
function showSection(targetSection) {
    // Hide all sections
    Object.values(sections).forEach(section => {
        if (typeof section === 'object') {
            Object.values(section).forEach(subSection => {
                subSection.style.display = 'none';
            });
        } else {
            section.style.display = 'none';
        }
    });

    // Show target section
    if (typeof targetSection === 'object') {
        Object.values(targetSection).forEach(section => {
            section.style.display = 'block';
        });
    } else {
        targetSection.style.display = 'block';
    }
}

// Section display functions
function showHome() {
    showSection(sections.home);
}

function showCertifications() {
    showSection(sections.certifications);
}

function showExperience() {
    showSection(sections.experience);
}

function showContact() {
    showSection(sections.contact);
}

// Event Listeners
Object.values(menuItems).forEach(item => {
    item.addEventListener('click', (e) => {
        // Remove active class from all menu items
        Object.values(menuItems).forEach(menuItem => {
            menuItem.classList.remove('active');
        });
        // Add active class to clicked menu item
        e.target.classList.add('active');
    });
});