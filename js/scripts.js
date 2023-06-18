function handleSlideClick(event) {
    var index = $(event.target).index();

    // Reset the class for all slide elements
    $('.category').removeClass('active');
    
    // Add the class to the clicked slide element
    $('.categories').find('.category').eq(index).addClass('active');
    
    // Go to the corresponding slide
    categories.slick('slickGoTo', index);
}


$(document).ready(function(){
    $('.categories').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
      arrows: true,
      prevArrow:'<button type="button" class="slick-prev pull-left"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.54312 12.7737L7.95312 11.3637L3.37312 6.77368L7.95312 2.18368L6.54312 0.773682L0.543124 6.77368L6.54312 12.7737Z" fill="black"/></svg></button>',
      nextArrow:'<button type="button" class="slick-next pull-right"><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.05063 0.121338L0.640625 1.53134L5.22062 6.12134L0.640625 10.7113L2.05063 12.1213L8.05063 6.12134L2.05063 0.121338Z" fill="black"/></svg></button>',        
      responsive: [{
          breakpoint: 429,
          settings: {
              arrows: false,
          }
      }]
    });
    
    $('.categories').on('click', '.category', handleSlideClick);
    
    $('.house-items-menu').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
      arrows: true,
      prevArrow:'<button type="button" class="slick-prev pull-left"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.54312 12.7737L7.95312 11.3637L3.37312 6.77368L7.95312 2.18368L6.54312 0.773682L0.543124 6.77368L6.54312 12.7737Z" fill="black"/></svg></button>',
      nextArrow:'<button type="button" class="slick-next pull-right"><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.05063 0.121338L0.640625 1.53134L5.22062 6.12134L0.640625 10.7113L2.05063 12.1213L8.05063 6.12134L2.05063 0.121338Z" fill="black"/></svg></button>',        
      responsive: [{
          breakpoint: 429,
          settings: {
              arrows: false,
          }
      }]
    });
    
    $('.images-carousel').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
      arrows: true,
      prevArrow:'<button type="button" class="slick-prev pull-left"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.54312 12.7737L7.95312 11.3637L3.37312 6.77368L7.95312 2.18368L6.54312 0.773682L0.543124 6.77368L6.54312 12.7737Z" fill="black"/></svg></button>',
      nextArrow:'<button type="button" class="slick-next pull-right"><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.05063 0.121338L0.640625 1.53134L5.22062 6.12134L0.640625 10.7113L2.05063 12.1213L8.05063 6.12134L2.05063 0.121338Z" fill="black"/></svg></button>',        
      responsive: [{
          breakpoint: 429,
          settings: {
              arrows: true,
          }
      }]
    });
  });



  
/* Button Other Links */
let btnOtherLinks = document.querySelector('.btn-other-links');
const otherLinks = document.querySelector('.other-links');

btnOtherLinks.addEventListener('click', function() {
  if (otherLinks.classList.contains('hidden')) {
    otherLinks.classList.remove('hidden');
  } else {
    otherLinks.classList.add('hidden');
  }
});