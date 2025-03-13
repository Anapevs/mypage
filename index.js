const homeButton = document.getElementById("home-button")
const experienceButton = document.getElementById('experience-button')
const certificationsButton = document.getElementById('certifications-button')
const contactButton = document.getElementById('contact-button')

const servicesSection = document.getElementById('services')
const sectionAbout = document.getElementById('about')
const sectionCertifications = document.getElementById('certifications')
const sectionSkills = document.getElementById('skills')
const sectionExperience = document.getElementById('experience')
const sectionContact = document.getElementById('contact')

sectionCertifications.style.display = 'none'
sectionExperience.style.display = 'none'
sectionContact.style.display = 'none'

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function showCertifications () { 
    sectionCertifications.style.display = 'block'

    sectionAbout.style.display = 'none'
    sectionSkills.style.display = 'none'
    servicesSection.style.display = 'none'
    
    sectionExperience.style.display = 'none'
    sectionContact.style.display = 'none'
}

function showExperience () {
    sectionExperience.style.display = 'block'

    sectionAbout.style.display = 'none'
    sectionSkills.style.display = 'none'
    servicesSection.style.display = 'none'
    
    sectionCertifications.style.display = 'none'
    sectionContact.style.display = 'none'
}

function showContact () {
    sectionContact.style.display = 'block'

    sectionAbout.style.display = 'none'
    sectionSkills.style.display = 'none'
    servicesSection.style.display = 'none'
    
    sectionCertifications.style.display = 'none'
    sectionExperience.style.display = 'none'
}

function showHome () {
    sectionAbout.style.display = 'block'
    sectionSkills.style.display = 'block'
    servicesSection.style.display = 'block'

    sectionCertifications.style.display = 'none'
    sectionExperience.style.display = 'none'
    sectionContact.style.display = 'none'
}