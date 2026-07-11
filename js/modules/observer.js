// Intersection Observer Setup (if needed separately)
const ObserverSetup = {
    createObserver(callback, options = {}) {
        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        };
        
        return new IntersectionObserver(callback, defaultOptions);
    },
    
    observeElements(selector, callback) {
        const observer = this.createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry);
                }
            });
        });
        
        Helpers.getElements(selector).forEach(element => {
            observer.observe(element);
        });
    }
};
