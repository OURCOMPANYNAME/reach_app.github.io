// Scroll to bottom feature:
function scrollToAbout(element) {
    $(document).ready(function() {
        $(element).click(function() {
            $(document).scrollTop($(document).height() / 2 - 45);
        });
    });
}

// Scroll to the about section automatically when the following buttons are pressed
scrollToAbout("#btn-get-started")
scrollToAbout("#scroll_button")
scrollToAbout("#about-button-nav")