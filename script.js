document.addEventListener('DOMContentLoaded', () => {
    // Sign In Pop-up
    const signInBtn = document.querySelector('.sign-in');
    const signInPopup = document.getElementById('signin-popup');
    signInBtn.addEventListener('click', () => {
        signInPopup.classList.add('active');
    });

    // Sign Up Pop-up
    const signUpBtn = document.querySelector('.sign-up');
    const signUpPopup = document.getElementById('signup-popup');
    signUpBtn.addEventListener('click', () => {
        signUpPopup.classList.add('active');
    });

    // Payment Portal Pop-up
    const connectWalletBtn = document.getElementById('connect-wallet');
    const paymentPopup = document.getElementById('payment-popup');
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', () => {
            paymentPopup.classList.add('active');
        });
    }

    // Review Form Pop-up
    const reviewForm = document.getElementById('review-form');
    const emptyReviewPopup = document.getElementById('empty-review-popup');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const productName = document.getElementById('product-name').value.trim();
            const reviewText = document.getElementById('review-text').value.trim();
            if (!productName || !reviewText) {
                emptyReviewPopup.classList.add('active');
            } else {
                // Handle successful submission here if needed
                console.log('Review submitted:', { productName, reviewText });
            }
        });
    }

    // Close Pop-ups
    const closeButtons = document.querySelectorAll('.close-popup');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            signInPopup.classList.remove('active');
            signUpPopup.classList.remove('active');
            if (paymentPopup) {
                paymentPopup.classList.remove('active');
            }
            if (emptyReviewPopup) {
                emptyReviewPopup.classList.remove('active');
            }
        });
    });
});