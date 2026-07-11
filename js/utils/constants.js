// Constants
const CONSTANTS = {
    // Selectors
    SELECTORS: {
        navbar: '#navbar',
        navMenu: '#navMenu',
        navLinks: '.nav-link',
        hamburger: '#hamburger',
        themeToggle: '#themeToggle',
        contactForm: '#contactForm',
        sections: ['home', 'about', 'skills', 'experience', 'projects', 'contact']
    },
    
    // Classes
    CLASSES: {
        active: 'active',
        scrolled: 'scrolled',
        darkMode: 'dark-mode',
        show: 'show'
    },
    
    // Storage Keys
    STORAGE: {
        theme: 'portfolio-theme'
    },
    
    // Animation Settings
    ANIMATION: {
        duration: 300,
        delay: 100
    },
    
    // Scroll Settings
    SCROLL: {
        threshold: 50
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONSTANTS;
}
