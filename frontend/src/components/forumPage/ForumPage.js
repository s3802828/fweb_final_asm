import Sidebar from "./Sidebar";
import Post from "./Post";
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";
import { useState } from "react";

export default function ForumPage() {
    let { path, url } = useRouteMatch()

    const [postList, setPostList] = useState([])
    
    const [showCreatePostForm, setShowCreatePostForm] = useState(false)
    return (
        <div class="container-fluid">
            <div class="row">

                <div class="col-3 ps-5 pe-5">
                    <Sidebar setPostList = {e => setPostList(e)} url={url} showCreatePostForm={showCreatePostForm} showForm={showCreatePostForm => setShowCreatePostForm(showCreatePostForm)} />
                </div>

                <div class="col-6">
                {showCreatePostForm && <CreatePost />}
                {postList && console.log(JSON.stringify(postList))}
                {postList && JSON.stringify(postList)}
                    <Switch>
                        <Route exact path={`${path}`}><Post url={url} /></Route>
                        {/*<Route exact path={`${path}/:cateid`}><Post url={url} /></Route>*/}
                        <Route exact path={`${path}/post/postdetail`}><PostDetail /></Route>
                    </Switch>
                </div>

                <div class="col-3 mt-3">
                    {/*<button type="button" class="btn btn-dark" style={{ marginLeft: "35%" }} onClick={() => setShowCreatePostForm(!showCreatePostForm)}>{showCreatePostForm ? "Close Form" : "Create New Post"}</button>   */}
                </div>
            </div>
        </div>
    )
}