
$(document).ready(function(){
    $('.btn').click(function(){
         const value =$(this).attr('data-filter');
         if(value=='all'){
              $('.box-container').show('1000');

         }
         else{
              $('.box-container').not('.'+value).hide('1000');
              $('.box-container').filter('.'+value).show('1000')

         }
    })
    $('.btn').click(function(){
         $(this).addClass('is-checked').siblings().removeClass('is-checked');
    })
})










$(document).ready(function () {

          $('#menu').click(function () {
              $(this).toggleClass('fa-times');
              $('.navbar').toggleClass('nav-toggle');
          });
      
          $(window).on('scroll load', function () {
              $('#menu').removeClass('fa-times');
              $('.navbar').removeClass('nav-toggle');
      
              if (window.scrollY > 60) {
                  document.querySelector('#scroll-top').classList.add('active');
              } else {
                  document.querySelector('#scroll-top').classList.remove('active');
              }
          });
      });
      
      document.addEventListener('visibilitychange',
          function () {
              if (document.visibilityState === "visible") {
                  document.title = " PROJECTS | PORTFOLIO ";
                  $("#favicon").attr("href", "/assets/images/ankit.jpg");
              }
              else {
                  document.title = "Come Back To Portfolio";
                  $("#favicon").attr("href", "/assets/images/favhand.png");
              }
          });
      
      
      
      // Start of Tawk.to Live Chat
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function () {
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/62b2c812b0d10b6f3e78b529/1g655r302';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode.insertBefore(s1, s0);
      })();
      // End of Tawk.to Live Chat
      
      // disable developer mode
      document.onkeydown = function (e) {
          if (e.keyCode == 123) {
              return false;
          }
          if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
              return false;
          }
          if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
              return false;
          }
          if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
              return false;
          }
          if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
              return false;
          }
      
      }