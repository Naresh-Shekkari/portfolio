// Navigation Manager
const NavigationManager = {
    init() {
        this.attachListeners();
        this.handleScroll();
    },
    
    attachListeners() {
        // Hamburger menu
        const hamburger = Helpers.getElement(CONSTANTS.SELECTORS.hamburger);
        const navMenu = Helpers.getElement(CONSTANTS.SELECTORS.navMenu);
        
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                Helpers.toggleClass(hamburger, CONSTANTS.CLASSES.active);
                Helpers.toggleClass(navMenu, CONSTANTS.CLASSES.active);
            });
        }
        
        // Nav links
        Helpers.getElements(CONSTANTS.SELECTORS.navLinks).forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = Helpers.getElement(`#${targetId}`);
                
                if (targetElement) {
                    // Close mobile menu
                    if (hamburger) {
                        Helpers.removeClass(hamburger, CONSTANTS.CLASSES.active);
                        Helpers.removeClass(navMenu, CONSTANTS.CLASSES.active);
                    }
                    
                    // Scroll to target
                    Helpers.scrollToElement(targetElement);
                }
            });
        });
    },
    
    handleScroll() {
        const navbar = Helpers.getElement(CONSTANTS.SELECTORS.navbar);
        if (navbar) {
            if (Helpers.getScrollPosition() > CONSTANTS.SCROLL.threshold) {
                Helpers.addClass(navbar, CONSTANTS.CLASSES.scrolled);
            } else {
                Helpers.removeClass(navbar, CONSTANTS.CLASSES.scrolled);
            }
        }
    },
    
    updateActiveLink() {
        const navLinks = Helpers.getElements(CONSTANTS.SELECTORS.navLinks);
        const sections = CONSTANTS.SELECTORS.sections;
        
        let currentSection = '';
        
        sections.forEach(sectionId => {
            const section = Helpers.getElement(`#${sectionId}`);
            if (section) {
                const top = section.offsetTop - 100;
                const height = section.offsetHeight;
                
                if (Helpers.getScrollPosition() >= top && 
                    Helpers.getScrollPosition() < top + height) {
                    currentSection = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            const linkTarget = link.getAttribute('href').substring(1);
            if (linkTarget === currentSection) {
                Helpers.addClass(link, CONSTANTS.CLASSES.active);
            } else {
                Helpers.removeClass(link, CONSTANTS.CLASSES.active);
            }
        });
    }
};
