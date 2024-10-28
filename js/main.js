(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Initiate the wowjs
    new WOW().init();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });// Function to calculate dynamic slidesPerView and spaceBetween
    function getSwiperConfig() {
        const containerWidth = document.querySelector('.swiper').clientWidth; // Get the width of the Swiper container
        let slidesPerView = 2; // Default number of slides
        let spaceBetween = 30; // Default space between slides
    
        if (containerWidth < 480) {
            slidesPerView = 2;
            spaceBetween = 20; // Space for small screens
        } else if (containerWidth < 640) {
            slidesPerView = 3;
            spaceBetween = 30; // Space for medium screens
        } else if (containerWidth < 992) {
            slidesPerView = 4;
            spaceBetween = 40; // Space for large screens
        } else {
            slidesPerView = 6;
            spaceBetween = 50; // Space for extra large screens
        }
    
        return { slidesPerView, spaceBetween };
    }// Clients Swiper Initialization
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 6, // Adjust according to your design
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Popup Functionality
    const popupModal = document.getElementById("popupModal");
    const popupImage = document.getElementById("popupImage");
    const popupDescription = document.getElementById("popupDescription"); // New description element
    const closeBtn = document.querySelector(".close");

    // Add click event listener to each client image
    const clientImages = document.querySelectorAll(".client-img");
    clientImages.forEach(img => {
        img.addEventListener("click", function() {
            const largeImgSrc = this.getAttribute("data-popup-img");
            const description = this.getAttribute("data-popup-description"); // Get the description
            popupImage.src = largeImgSrc; // Set the image source for the popup
            popupDescription.textContent = description; // Set the description text
            popupModal.style.display = "flex"; // Show the modal
        });
    });

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function() {
        popupModal.style.display = "none"; // Hide the modal
    });

    // Close the popup when clicking outside the image
    popupModal.addEventListener("click", function(e) {
        if (e.target === popupModal) {
            popupModal.style.display = "none"; // Hide the modal
        }
    });
});

    


})(jQuery);
