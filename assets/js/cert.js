// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
          let response
          type === "skills" ?
              response = await fetch("skills.json")
              :
              response = await fetch("./certificates/certificates.json")
          const data = await response.json();
          return data;
       }
              
       function showCertificates(certificates) {
          let certificatesContainer = document.querySelector("#certificates .box-container");
          let certificateHTML = "";
          certificates.slice(0, 6).forEach(certificate => {
              certificateHTML += `
            <div class="box tilt">
            <img draggable="false" src="/assets/images/projects/${certificate.image}.png" alt="certificate" />
            <div class="content">
              <div class="tag">
              <h3>${certificate.name}</h3>
              </div>
              <div class="desc">
                <p>${certificate.desc}</p>
                <div class="btns">
                  <a href="${certificate.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                  <a href="${certificate.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                </div>
              </div>
            </div>
          </div>`
          });
          certificatesContainer.innerHTML = certificateHTML;
       
          // <!-- tilt js effect starts -->
          VanillaTilt.init(document.querySelectorAll(".tilt"), {
              max: 15,
          });
          // <!-- tilt js effect ends -->
       
          /* ===== SCROLL REVEAL ANIMATION ===== */
          const srtop = ScrollReveal({
              origin: 'top',
              distance: '80px',
              duration: 1000,
              reset: true
          });
       
          /* SCROLL PROJECTS */
          srtop.reveal('.cert .box', { interval: 200 });
       
       }
       
       fetchData().then(data => {
          showSkills(data);
       });
       
       fetchData("certificates").then(data => {
          showCertificates(data);
       });
       
       // <!-- tilt js effect starts -->
       VanillaTilt.init(document.querySelectorAll(".tilt"), {
          max: 15,
       });
       // <!-- tilt js effect ends -->