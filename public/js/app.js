document.addEventListener('DOMContentLoaded', function() {

});

function addPostColour() {
    let posts = document.getElementsByClassName('post-block');

    for(let i = 0; i < posts.length; i++) {
        posts[i].style.background = 
    `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
}

function toggleMobileMenu() {
    let elem = document.getElementById('mobile-menu');
    elem.classList.toggle('mobile-menu-shown');
}