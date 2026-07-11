// Theme Manager
const ThemeManager = {
    init() {
        this.loadTheme();
        this.attachListeners();
    },
    
    loadTheme() {
        const savedTheme = localStorage.getItem(CONSTANTS.STORAGE.theme);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
        
        if (isDark) {
            this.setDarkMode();
        } else {
            this.setLightMode();
        }
    },
    
    setDarkMode() {
        document.body.classList.add(CONSTANTS.CLASSES.darkMode);
        localStorage.setItem(CONSTANTS.STORAGE.theme, 'dark');
    },
    
    setLightMode() {
        document.body.classList.remove(CONSTANTS.CLASSES.darkMode);
        localStorage.setItem(CONSTANTS.STORAGE.theme, 'light');
    },
    
    toggle() {
        if (Helpers.hasClass(document.body, CONSTANTS.CLASSES.darkMode)) {
            this.setLightMode();
        } else {
            this.setDarkMode();
        }
    },
    
    attachListeners() {
        const themeToggle = Helpers.getElement(CONSTANTS.SELECTORS.themeToggle);
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }
};
