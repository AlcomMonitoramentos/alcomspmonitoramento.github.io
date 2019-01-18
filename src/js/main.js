$(document).ready(function(){
  console.log('oi')
  $('a').touch(function(e){
    e.preventDefault();
    var target = e.target.hash;
    elem = $(target)
    if (target.length)
    {
        var top = elem.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
        // window.scroll(element/)
    }
  });
  $('#contact_button').click(function() {
    var top = $('#contact').offset().top;
    $('html,body').animate({scrollTop: top}, 1000);
    return false;
  })
})
    
  