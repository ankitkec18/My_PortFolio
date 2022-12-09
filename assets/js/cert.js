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
            <img draggable="false" src="/assets/images/certificates/${certificate.image}.png" alt="certificate" />
            <div class="content">
              <div class="tag">
              <h3>${certificate.name}</h3>
              </div>
              <div class="desc">
                <p>${certificate.desc}</p>
                <div class="btns">
                  <a href="${certificate.links.view}" class="btn"><i class="fas fa-eye"></i> View</a>
                  <a href="assets/images/certificates/${certificate.links.download}.png "download="Certificate"class="btn">Download <i class="fas fa-download"></i></a>                
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
            
          /* SCROLL PROJECTS */
          srtop.reveal('.cert .box', { interval: 200 });
       
       }
       
       fetchData().then(data => {
          showSkills(data);
       });
       
       fetchData("certificates").then(data => {
          showCertificates(data);
       });
       