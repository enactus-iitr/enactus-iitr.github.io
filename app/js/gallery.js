// external js: isotope.pkgd.js

var buttonFilter;
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',

  filter: function() {
    var $this = $(this);
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return buttonResult;
  }

});


$('#filters').on( 'click', 'button', function() {
  buttonFilter = $( this ).attr('data-filter');
  $grid.isotope();
});


$grid.on( 'click', '.element-item', function() {
  // change size of item by toggling gigante class
  $( this ).toggleClass('gigante');
  $grid.isotope('layout');
});


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    setTimeout( delayed, threshold || 100 );
  };
}
