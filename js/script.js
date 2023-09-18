let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    nav.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    login.classList.remove('active');
    nav.classList.remove('active');

}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    nav.classList.remove('active');

}

let nav = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    nav.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    login.classList.remove('active');
}


window.onscroll = () => {
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    nav.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 10,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 10,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}