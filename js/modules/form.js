// Form Manager
const FormManager = {
    form: null,
    
    init() {
        this.form = Helpers.getElement(CONSTANTS.SELECTORS.contactForm);
        if (this.form) {
            this.attachListeners();
        }
    },
    
    attachListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    },
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.submitForm();
        }
    },
    
    validateForm() {
        const name = this.form.querySelector('#name');
        const email = this.form.querySelector('#email');
        const subject = this.form.querySelector('#subject');
        const message = this.form.querySelector('#message');
        
        let isValid = true;
        
        // Clear previous errors
        this.clearErrors();
        
        // Validate name
        if (!name.value.trim()) {
            this.showError('nameError', 'Name is required');
            isValid = false;
        }
        
        // Validate email
        if (!email.value.trim()) {
            this.showError('emailError', 'Email is required');
            isValid = false;
        } else if (!Helpers.isValidEmail(email.value)) {
            this.showError('emailError', 'Please enter a valid email');
            isValid = false;
        }
        
        // Validate subject
        if (!subject.value.trim()) {
            this.showError('subjectError', 'Subject is required');
            isValid = false;
        }
        
        // Validate message
        if (!message.value.trim()) {
            this.showError('messageError', 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            this.showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        return isValid;
    },
    
    showError(elementId, message) {
        const errorElement = Helpers.getElement(`#${elementId}`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    },
    
    clearErrors() {
        const errors = Helpers.getElements('.error-message');
        errors.forEach(error => {
            error.textContent = '';
        });
    },
    
    submitForm() {
        // In a real application, you would send data to a server
        // For now, we'll just show a success message
        
        const messageElement = Helpers.getElement('#formMessage');
        if (messageElement) {
            messageElement.textContent = '✅ Thank you for your message! I\'ll get back to you soon.';
            messageElement.className = 'form-message show success';
            
            // Reset form
            this.form.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageElement.className = 'form-message';
                messageElement.textContent = '';
            }, 5000);
        }
    }
};
