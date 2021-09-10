import { useState,useEffect } from 'react'
import './ProfileCard.css'
import UpdateProfile from './UpdateProfile'

export default function ProfileCard(props) {
  const [userFollowing, setuserFollowing] = useState()
  const fetchFollowing = () => {
      fetch(`http://localhost:9000/profile/allusers`)
     .then(response => response.json())
     .then( data => {console.log(data);
      var following = data.filter((element) => {
        console.log(element.followers)
        console.log(props.user._id)
        if(element.followers.includes(props.user._id))
          {return element}
      })
      console.log(following)
      setuserFollowing(following)
    })
  }
  useEffect(()=>{
      fetchFollowing();
      console.log(props.user._id)
  },[props.user._id])


  return (
    <div class="wrapper">
      {console.log(props.user._id)}
          <div class="left">
              <img src="https://wallpaperaccess.com/full/2213424.jpg" alt="user" width="100"/>
              <h4>{props.user.name ? props.user.name : 'Your name is here'}</h4>
              <p>{props.user.username}</p>
          </div>
          <div class="right">
              <div class="info">
                  <h3>Information</h3>
                  <div class="info_data">
                      <div class="data">
                          <h4>Email</h4>
                          <p>{props.user.email}</p>
                      </div>
                      <div class="data">
                        <h4>Phone</h4>
                          <p>{props.user.phoneNumber ? props.user.phoneNumber : 'Your phone goes here'}</p>
                    </div>
                  </div>
              </div>
            
            <div class="flw_status">
                  <h3>Projects</h3>
                  <div class="flw_status_data">
                      <div class="data">
                          <h4>Followers</h4>
                          <p>{props.user.followers ? props.user.followers.length : '0'}</p>
                      </div>
                      <div class="data">
                        <h4>Following</h4>
                          <p>{userFollowing ? userFollowing.length : "0" }</p>
                    </div>
                  </div>
              </div>
            
              <div class="social_media">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <UpdateProfile user = {props.user !== undefined && props.user}/>
                </ul>
            </div>
          </div>
      </div>
      
   
  )
} 
