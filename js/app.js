// Simple JS initialization for Foundation framework
$(document).foundation();

// You can add custom JavaScript here if you want to implement any interactions or features
// For example, if you want to add a smooth scroll when clicking on the links:

$(document).ready(function() {
    // Smooth scrolling for links with hashes
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

