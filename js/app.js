// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    NavigationManager.init();
    ScrollObserver.init();
    FormManager.init();
    
    // Log app initialization
    console.log('✅ Portfolio app initialized');
});

// Handle window events
window.addEventListener('scroll', () => {
    NavigationManager.updateActiveLink();
    ScrollObserver.handleScroll();
});

window.addEventListener('resize', () => {
    // Handle responsive updates if needed
});
