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
                  document.title = " CERTIFICATES | PORTFOLIO";
                  $("#favicon").attr("href", "/assets/images/ankit.jpg");
              }
              else {
                  document.title = "Come Back To PortfoLio";
                  $("#favicon").attr("href", "/assets/images/favhand.png");
              }
          });
      
      
      // fetch Certificates start
      function getCertificates() {
          return fetch("certificates.json")
              .then(response => response.json())
              .then(data => {
                  return data
              });
      }
      
      
      function showCertificates(Certificates) {
          let certificatesContainer = document.querySelector("#certificates .box-container");
          let certificatesHTML = "";
         Certificates.forEach(Certificates => {
              certificatesHTML += `
              <div class="grid-item ${Certificates.category}">
              <div class="box tilt" style="width: 380px; margin: 1rem">
            <img draggable="false" src="/assets/images/certificates/${Certificates.image}.png" alt="Certificates" />
            <div class="content">
              <div class="tag">
              <h3>${Certificates.name}</h3>
              </div>
              <div class="desc">
                <p>${Certificates.desc}</p>
                <div class="btns">
                  <a href="${Certificates.links.view}" class="btn"><i class="fas fa-eye"></i> View</a>
                  <a href="/assets/images/certificates/${Certificates.links.download}.png "download="Certificate"class="btn">Download <i class="fas fa-download"></i></a>                

                  </div>
              </div>
            </div>
          </div>
          </div>`
          });
          certificatesContainer.innerHTML = certificatesHTML;
      
          // isotope filter products
          var $grid = $('.box-container').isotope({
              itemSelector: '.grid-item',
              layoutMode: 'fitRows',
              masonry: {
                  columnWidth: 200
              }
          });
      
          // filter items on button click
          $('.button-group').on('click', 'button', function () {
              $('.button-group').find('.is-checked').removeClass('is-checked');
              $(this).addClass('is-checked');
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
          });
      }
      
      getCertificates().then(data => {
          showCertificates(data);
      })
      // fetch projects end
      
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