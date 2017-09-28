(function(){
  $(document).ready(function(){

    /** STICKY ITEMS MENU **/
    $(this).scroll(function(){
      stickTop(stickyTable);
    /*  menuMark();*/
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

    /** LOCATION MENU MARKING  **
    function menuMark() {
      let scrollPos = $(document).scrollTop();
      let sections = $('.menu-button a');
      sections.each(function(index,el){
        console.log($(this).offset().top);
        if ($(this).offset().top <= scrollPos) { $(this).addClass('glow') }
        else { $(this).removeClass('glow') }
      })
    }
    */

    /** SMOOTH SCROOL & GLOW IN MENU **/

    $(".menu-button a").click(function(e){
      e.preventDefault();
      let sectionID = $(this).attr('href');
      let sectionOffset = $(sectionID).offset().top;
      console.log(sectionOffset);
      $('html, body').animate( {scrollTop: sectionOffset}, 400);
    });




  });
})();
