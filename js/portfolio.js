(function(){
  $(document).ready(function(){

    /** STICKY ITEMS MENU **/
    $(this).scroll(function(){
      stickTop(stickyTable);
    });

    let stickyTable = {
      hamburger: {
        element: $('.hamburger'),
        initialDistance: $('.hamburger').offset().top,
        topMargin: 15
      },
      menu: {
        element: $('.menu'),
        initialDistance: $('.menu').offset().top,
        topMargin: ($(document).innerWidth() < 768) ? 64 : 269
      }
    }

    function stickTop(obj) {
      for (el in obj) {
        let elem = obj[el];
      //  console.log(elem.topMargin);
        if ((elem.initialDistance - elem.topMargin) < $(document).scrollTop()){
          elem.element.addClass('sticky-top');
        } else {
          elem.element.removeClass('sticky-top');
        }
      };
    }

    /** SMOOTH SCROOL **/

    $(".menu-button a").click(function(e){
      e.preventDefault();
      let sectionID = $(this).attr('href');
      let sectionOffset = $(sectionID).offset().top;
      console.log(sectionOffset);
      $('html, body').animate( {scrollTop: sectionOffset}, 400);
    });

    $('a[href^="http"]').attr('target', '_blank');
  });
})();
