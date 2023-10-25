let menu = document.querySelector('.hamburger-menu');
let navLinks = document.querySelector('.navlinkebi');

menu.addEventListener('click', function(){
    if(navLinks.style.display === 'none'){
        navLinks.style.display = 'block';
    } else{
        navLinks.style.display = 'none';
    }
});
