import Sidebar from "./Sidebar";
import Post from "./Post";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import { useState } from "react";

export default function ForumPage() {
    let { path, url } = useRouteMatch()
    const [showCreatePostForm, setShowCreatePostForm] = useState(false)
    return (
        <div class="container-fluid">
            <div class="row">

                <div class="col-3 ps-5 pe-5">
                    <Sidebar url={url} />
                </div>

                <div class="col-6">
                    <Switch>
                        <Route exact path={`${path}`}><Post url={url} /></Route>
                        <Route exact path={`${path}/:cateid`}><Post url={url} /></Route>
                        <Route exact path={`${path}/post/postdetail`}><Posts /></Route>
                    </Switch>
                </div>

                <div class="col-3 mt-3">
                    <button type="button" class="btn btn-dark" style={{ marginLeft: "35%" }} onClick={() => setShowCreatePostForm(!showCreatePostForm)}>{showCreatePostForm ? "Close Form" : "Create New Post"}</button>

                    {showCreatePostForm && <CreatePost />}
                </div>
            </div>
        </div>
    )
}