// Get the header element
const header = document.querySelector('header');

// Get the offset position of the header
const sticky = header.offsetTop;

// Function to make the navigation bar sticky
function stickyNav() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Attach the function to the scroll event
window.addEventListener('scroll', stickyNav);
