// Helper Functions
const Helpers = {
    /**
     * Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    /**
     * Throttle function
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    /**
     * Validate email
     */
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    /**
     * Get element
     */
    getElement(selector) {
        return document.querySelector(selector);
    },
    
    /**
     * Get all elements
     */
    getElements(selector) {
        return document.querySelectorAll(selector);
    },
    
    /**
     * Add class
     */
    addClass(element, className) {
        element && element.classList.add(className);
    },
    
    /**
     * Remove class
     */
    removeClass(element, className) {
        element && element.classList.remove(className);
    },
    
    /**
     * Toggle class
     */
    toggleClass(element, className) {
        element && element.classList.toggle(className);
    },
    
    /**
     * Has class
     */
    hasClass(element, className) {
        return element && element.classList.contains(className);
    },
    
    /**
     * Smooth scroll to element
     */
    scrollToElement(element, offset = 80) {
        if (!element) return;
        const topOffset = element.offsetTop - offset;
        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        });
    },
    
    /**
     * Get scroll position
     */
    getScrollPosition() {
        return window.scrollY || document.documentElement.scrollTop;
    },
    
    /**
     * Check if element is in viewport
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
};
