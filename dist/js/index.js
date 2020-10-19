$(document).ready(function(){

// slider

$(function(){
    $('.banner-section_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

// tab

$('ul.menu-tabs').on('click', 'li:not(.menu-tab_active)', function() {
    $(this)
      .addClass('menu-tab_active').siblings().removeClass('menu-tab_active')
      .closest('div.content').find('div.catalog-content').removeClass('catalog-content_active').eq($(this).index()).addClass('catalog-content_active');
  });

});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu-adaptive'),  
      close = document.querySelector('.menu-adaptive_close');

      hamburger.addEventListener('click', () => {
          menu.classList.add('active');
      });

      close.addEventListener('click', () => {
        menu.classList.remove('active');
      });


      $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });
      
      $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });


      function valideForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
        minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                date: {
                  required: true
                },
                time: {
                  required: true
                },
                people: "required",
            },
            messages: {
              name: {
                  required: "Пожалуйста, введите имя!",
                  minlength: jQuery.validator.format("Введите 1 символов!")
           },
              phone: "Пожалуйста, введите телефон!",
              date: "Выберите дату!",
              time: "Выберите время!",
              people: "Кол-во посетителей!",
              email: {
                required: "Пожалуйста, введите почту!",
                email: "Неправильно, Пожалуйста, введите почту!"
              }
            }
        });
      }
      valideForms('#book form');
      valideForms('#order');
      valideForms('#modal-form');

      //mask
      $('input[name=phone]').mask("+ 371 99999999");

      //modal
      const modal = document.querySelector('.overlay'),
      openBtn = document.querySelector('.open'),
      closeBtn = document.querySelector('.modal_close');

      openBtn.addEventListener('click', function() {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });


  