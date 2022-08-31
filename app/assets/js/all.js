// init Masonry
var $grid = $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});