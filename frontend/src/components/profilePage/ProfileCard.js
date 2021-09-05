import './ProfileCard.css'
import UpdateProfile from './UpdateProfile'

export default function ProfileCard() {



  return (
    <div class="wrapper">
          <div class="left">
              <img src="https://wallpaperaccess.com/full/2213424.jpg" alt="user" width="100"></img>
              <h4>Real Name</h4>
              <p>username</p>
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
            
            <div class="flw_status">
                  <h3>Projects</h3>
                  <div class="flw_status_data">
                      <div class="data">
                          <h4>Followers</h4>
                          <p>5,423</p>
                      </div>
                      <div class="data">
                        <h4>Following</h4>
                          <p>11</p>
                    </div>
                  </div>
              </div>
            
              <div class="social_media">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <UpdateProfile />
                </ul>
            </div>
          </div>
      </div>
      
   
  )
} 
