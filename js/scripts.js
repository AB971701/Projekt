//Topnav
function topnav() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//Slideshow
var slideIndex = 0;
showSlides();
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("hideSlides");
    var dots = document.getElementsByClassName("dot")
    if (n > slides.lenght) {slideIndex = 1}
    if (n < slides.length) {slideIndex = slides.lenght}
    for (i = 0; i < slides.lenght; i++) {
        slides[i].getElementsByClassName.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.lenght) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}