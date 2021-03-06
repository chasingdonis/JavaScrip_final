$("document").ready(function (){
$( "a" ).hover(
  function() {
    $( this ).not( "#home" ).append( $( "<span> work</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
 
$( "a" ).hover(function() {
  $( this ).addClass( "ani" );
});

$("#cui").hover(function(){
    $(this).animate({ marginLeft: "120px" });
    }, function() {
    $(this).animate({ marginLeft: "-10px" });
});

$( "h4" ).hover(function() {
  $( this ).addClass( "ani" );
});
    
var par = $('.content');
  $(par).hide();

$( "h3" ).click(function() {
   $(par).slideToggle('slow');
  e.preventDefault();
});
    
});

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
