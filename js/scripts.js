function handleSlideClick(event) {
    var index = $(event.target).index();

    // Reset the class for all slide elements
    $('.category').removeClass('active');
    
    // Add the class to the clicked slide element
    $('.categories').find('.category').eq(index).addClass('active');
    
    // Go to the corresponding slide
    categories.slick('slickGoTo', index);
}