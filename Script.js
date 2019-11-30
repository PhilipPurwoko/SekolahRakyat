$(document).ready(function(){
    // memberi efek smooth scrolling unt setiap link di navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
    if (this.hash !== "") {
  
      event.preventDefault();
  
      var hash = this.hash;
  
      // timer scrollingnya 900 ms
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
  
        window.location.hash = hash;
        });
      } 
    });
  })

  $(window).scroll(function() {
$(".slideanim").each(function(){
var pos = $(this).offset().top;

var winTop = $(window).scrollTop();
if (pos < winTop + 600) {
$(this).addClass("slide");
}
});
});

  