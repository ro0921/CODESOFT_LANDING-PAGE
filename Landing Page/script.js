document.addEventListener('DOMContentLoaded', function() {
    // Get all feature elements
    const features = document.querySelectorAll('.feature');

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class when in viewport
    function checkAnimation() {
        features.forEach(feature => {
            if (isElementInViewport(feature)) {
                feature.style.animationPlayState = 'running';
            }
        });
    }

    // Run on load and on scroll
    window.addEventListener('scroll', checkAnimation);
    checkAnimation();
});

document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.querySelector('.animate-text');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedText.classList.add('animate-visible');
                observer.unobserve(animatedText); // Unobserve to prevent repeated animations
            }
        });
    });

    observer.observe(animatedText);
});

