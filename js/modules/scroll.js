// Scroll Handler
const ScrollObserver = {
    init() {
        this.observer = new IntersectionObserver(
            (entries) => this.observerCallback(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        this.observeElements();
    },
    
    observeElements() {
        // Observe all animated elements
        const selectors = [
            '.skill-category',
            '.project-card',
            '.timeline-item',
            '.about-highlights',
            '.contact-item'
        ];
        
        selectors.forEach(selector => {
            Helpers.getElements(selector).forEach(element => {
                this.observer.observe(element);
            });
        });
    },
    
    observerCallback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Helpers.addClass(entry.target, 'fade-in-up');
                this.observer.unobserve(entry.target);
            }
        });
    },
    
    handleScroll() {
        // Update active navigation link
        NavigationManager.updateActiveLink();
        
        // Handle navbar scroll effect
        NavigationManager.handleScroll();
    }
};
