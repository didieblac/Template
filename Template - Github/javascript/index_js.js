var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    dots[slideIndex-1].className += " active";  
    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 6000); // Change image every 2 seconds
}*/



/*function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n===undefined){n= ++slideIndex;}
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length}

  slides[slideIndex-1]).fadeIn(2000);
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1]).delay(3000);
  slides[slideIndex-1]).fadeOut(1000);

  setTimeout(showSlides, 6000);



   var slideIndex = 0;
showSlides(); */

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    dots[slideIndex-1].className += " active";  
    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 6000); // Change image every 2 seconds
}