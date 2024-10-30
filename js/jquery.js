// Initialize AOS
AOS.init();

// Initialize Tilt.js
$('.feature-card, .pricing-card').tilt({
    scale: 1.1
});

// Toggle Dark Mode
$('#dark-mode-toggle').click(function() {
    $('body').toggleClass('dark-mode');
    $(this).find('i').toggleClass('fa-moon fa-sun');
});

// Smooth Scroll
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 70 }, 500);
});
