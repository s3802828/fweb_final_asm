import './ProfileCard.css'

export default function ProfileCard() {



  return (
    <div class="wrapper">
          <div class="left">
              <img src="https://wallpaperaccess.com/full/2213424.jpg" alt="user" width="100"></img>
              <h4>Kyle Winston</h4>
              <p>UI Developer</p>
          </div>
          <div class="right">
              <div class="info">
                  <h3>Information</h3>
                  <div class="info_data">
                      <div class="data">
                          <h4>Email</h4>
                          <p>kylewinston@gmail.com</p>
                      </div>
                      <div class="data">
                        <h4>Phone</h4>
                          <p>0977-251-821</p>
                    </div>
                  </div>
              </div>
            
            <div class="projects">
                  <h3>Projects</h3>
                  <div class="projects_data">
                      <div class="data">
                          <h4>Recent</h4>
                          <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div class="data">
                        <h4>Most Viewed</h4>
                          <p>dolor sit amet.</p>
                    </div>
                  </div>
              </div>
            
              <div class="social_media">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
          </div>
      </div>
      
   
  )
} 
