import Sidebar from "./Sidebar";
import Post from "./Post";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";
import { useState, useEffect } from "react";

export default function ForumPage() {
  const [Posts, setPosts] = useState([]);
  //const [postUserInfo, setPostUserInfo] = useState({})
  // const fetchPostUser = (userId) => {
  //     var newElement = {}
  //     fetch(`http://localhost:9000/profile/${userId}`)
  //     .then(res => res.json())
  //     .then(data => setPostUserInfo({username: data.username}))
  // }
  const fetchPost = () => {
    fetch("http://localhost:9000/forums/posts")
      .then((response) => response.json())
      .then((data) => {
        data.map(async (postElement) => {
          var newElement = {};
          await fetch(`http://localhost:9000/profile/profiledetails/${postElement.user_id}`)
            .then((res) => res.json())
            .then((data) => newElement = {...postElement, username: data.username })
            .then(res => setPosts(Posts => [...Posts, res]));
          //fetchPostUser(postElement.user_id)
        });
        //setPosts(newData);
      });
  };
  
  const countTimeDiff = (time) => 
  {var diffTimeInMs = Date.now() - new Date(time)
    var years = Math.floor(diffTimeInMs / (1000 * 60 * 60 * 24 * 365))
    if (years > 0) 
    {return `${years > 1 ? `${years} years ago` : `${years} year ago`} `}
    var days = Math.floor(diffTimeInMs / (1000 * 60 * 60 * 24))
    if (days > 0) 
    {return `${days > 1 ? `${days} days ago` : `${days} day ago`} `}
    var hours = Math.floor(diffTimeInMs / (1000 * 60 * 60))
    if (hours > 0) 
    {return `${hours > 1 ? `${hours} hours ago` : `${hours} hour ago`} `}
    var minutes = Math.floor(diffTimeInMs / (1000 * 60))
    if (minutes > 0) 
    {return `${minutes > 1 ? `${minutes} minutes ago` : `${minutes} minute ago`} `}
    var seconds = Math.floor(diffTimeInMs / 1000)
    if (seconds > 0) 
    {return `${seconds > 1 ? `${seconds} seconds ago` : `${seconds} second ago`} `}}
  
  



  useEffect(() => {
    fetchPost();
  }, []);
  let { path, url } = useRouteMatch();
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 ps-5 pe-5">
          <Sidebar
              setPostList = {e => setPosts(e)}
            showCreatePostForm={showCreatePostForm}
            showForm={(showCreatePostForm) =>
              setShowCreatePostForm(showCreatePostForm)
            }
          />
        </div>

        <div class="col-6">
          {showCreatePostForm && <CreatePost />}
          <Switch>
            <Route exact path={`${path}`}>
              {Posts.map((element) => {
                return <Post createdAt={countTimeDiff(element.createdAt)} element={element} url = {url}/>;
              })}
            </Route>
            {/* <Route exact path={`${path}/:cateid`}><Post url={url} /></Route> */}
            <Route exact path={`${path}/post/postdetail/:id`}>
              <PostDetail/>
            </Route>
          </Switch>
        </div>

        <div class="col-3 mt-3">
          {/*<button type="button" class="btn btn-dark" style={{ marginLeft: "35%" }} onClick={() => setShowCreatePostForm(!showCreatePostForm)}>{showCreatePostForm ? "Close Form" : "Create New Post"}</button>   */}
        </div>
      </div>
    </div>
  );
}
