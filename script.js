// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// Booking Form

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you! Your booking inquiry has been received. We will contact you shortly."
    );

    bookingForm.reset();

});
