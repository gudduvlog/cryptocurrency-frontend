 console.log("checking");
 let burger=document.querySelector('.burger');
 let  navbar=document.querySelector('.navbar');
 let rightNav=document.querySelector('.rightNav');
  let navlist=document.querySelector('.navlist');


burger.addEventListener('click',()=>{
		navbar.classList.toggle('h-nav-resp');
		rightNav.classList.toggle('opacity-resp');
		navlist.classList.toggle('opacity-resp');
});

var slideIndex = 0;
showSlides();
            
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 secondssecond
}


/*for pre loader*/

  let preloader=document.getElementById('loading');

   function preloaderfun(){
     preloader.style.display='none';
   }

