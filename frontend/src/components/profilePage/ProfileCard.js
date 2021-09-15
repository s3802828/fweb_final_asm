import { useState, useEffect } from 'react';
import './ProfileCard.css';
import UpdateProfile from './UpdateProfile';

export default function ProfileCard(props) {
  const currentUser = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState()
  const [userFollowing, setuserFollowing] = useState()
  const [userFollower, setuserFollower] = useState([])
  const [followState, setFollowState] = useState(false)

  const fetchFollowing = () => {
    fetch(`http://localhost:9000/profile/allusers`)
      .then(response => response.json())
      .then(data => {
        var following = data.filter((element) => {
          if (element.followers.includes(props.user._id)) { return element }
        })
        setuserFollowing(following)
      })
  }
  const fetchFollower = () => {
    // if (props.user && props.user.followers.length > 0) {
    //   var follower = userFollower;
    //   props.user.followers.map(async (eachFollower) => {
    //     await fetch(`http://localhost:9000/profile/profiledetails/${eachFollower}`)
    //       .then(response => response.json())
    //       .then(data => {
    //         follower.push(data)
    //         setuserFollower(follower)})
    //   })
    // }
    fetch(`http://localhost:9000/profile/allusers`)
      .then(response => response.json())
      .then(data => {
        var follower = [];
        if (props.user && !user) {
          for (let i = 0; i < data.length; i++) {
            for (let y = 0; y < props.user.followers.length; y++) {
              if (data[i]._id === props.user.followers[y]) {
                follower.push(data[i])
              }
            }
          }
          setuserFollower(follower)
        }
        if(user){
          for (let i = 0; i < data.length; i++) {
            for (let y = 0; y < user.followers.length; y++) {
              if (data[i]._id === user.followers[y]) {
                follower.push(data[i])
              }
            }
          }
          setuserFollower(follower)
        }
      })
  }

  const follow = () => {
    fetch(`http://localhost:9000/user/${currentUser.id}/follow`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: props.user._id })
    })
      .then(response => response.json())
      .then(data => setUser(data))
  }

  const unFollow = () => {
    fetch(`http://localhost:9000/user/${currentUser.id}/unfollow`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: props.user._id })
    })
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
  }


  useEffect(() => {
    fetchFollowing();
    // check if current user have followed
    if (currentUser != null && props.user.followers && props.user.followers.includes(currentUser.id)) {
      setFollowState(true)
    }
  }, [props.user._id, props.user.followers])
  useEffect(()=> {
    fetchFollower();
  }, [props.user.followers, user])

  return (
    <div class="wrapper">
      <div class="left">
        <img src="https://wallpaperaccess.com/full/2213424.jpg" alt="user" width="100" />
        <h4>{props.user.name ? props.user.name : 'Your name is here'}</h4>
        <p>{props.user.username}</p>
      </div>
      <div class="right">
        <div class="info">
          <h3>Information

          </h3>
          <div class="info_data">
            <div class="data">
              <h4>Email</h4>
              <p style={{ fontSize: "16px" }}>{props.user.email}</p>
            </div>
            <div class="data">
              <h4>Phone</h4>
              <p style={{ fontSize: "16px" }}>{props.user.phoneNumber ? props.user.phoneNumber : 'Your phone goes here'}</p>
            </div>
          </div>
          <div class="info_data">
            <div class="data">
              <h4>DoB</h4>
              <p style={{ fontSize: "16px" }}>{props.user.dateOfBirth ? props.user.dateOfBirth : 'Your date of birth goes here'}</p>
            </div>
            <div class="data">
              <h4>Gender</h4>
              <p style={{ fontSize: "16px" }}>{props.user.gender ? props.user.gender : 'Your gender goes here'}</p>
            </div>
          </div>

        </div>
        <div class="flw_status">
          <h3>Follow</h3>
          <div class="flw_status_data">
            <div class="data">
              <h4 data-bs-toggle="modal" data-bs-target="#followerModal">Followers</h4>
              <p style={{ fontSize: "16px" }}>{user ? (user.followers.length) : (props.user.followers ? props.user.followers.length : '0')}</p>
            </div>
            <div class="data">
              <h4 data-bs-toggle="modal" data-bs-target="#followingModal">Following</h4>
              <p style={{ fontSize: "16px" }}>{userFollowing ? userFollowing.length : "0"}</p>
            </div>
          </div>
        </div>

        <div class="modal fade" id="followerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Follower</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {userFollower ? userFollower.map((eachFollower) =>
                  <div style={{ marginBottom: "5px" }}><a href={`/profile/${eachFollower._id}`} style={{ textDecoration: "none", color: 'black', fontSize: "16px" }}>
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <span>{eachFollower.username}</span>
                  </a></div>) : <div></div>
                }
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="followingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Following</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {userFollowing ? userFollowing.map((eachUser) =>
                  <div style={{ marginBottom: "5px" }}><a href={`/profile/${eachUser._id}`} style={{ textDecoration: "none", color: 'black', fontSize: "16px" }}>
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <span>{eachUser.username}</span>
                  </a></div>) : <div></div>
                }
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
        </div>


        <div class="social_media">
          <ul>
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            {(props.isUser && currentUser.id === props.user._id) ? <UpdateProfile user={props.user !== undefined && props.user} /> : (props.isUser ? <button id="follow-btn" type="button" class="btn btn-primary float-right"
              style={currentUser != null && followState ? { background: "grey" } : {}}
              onClick={currentUser != null && (followState ? () => { unFollow(); setFollowState(false)} : () => { follow(); setFollowState(true)})}>
              {followState ? "Unfollow" : "Follow"}
            </button> : "")}


          </ul>
        </div>
      </div>
    </div>
  )
}
