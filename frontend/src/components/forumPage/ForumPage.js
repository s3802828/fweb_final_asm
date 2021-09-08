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
      .then( (data) => {
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
                return <Post element={element} url = {url}/>;
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
