import Post from "../forumPage/Post";
import { BrowserRouter as useRouteMatch} from "react-router-dom";
import ProfileCard from "./ProfileCard";

export default function MyProfile() {
    // let {path, url} = useRouteMatch()

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-2">
                    {/*<Sidebar url={url}/>*/}
                </div>
                <div class="col-8">
                    {/* <Switch>
                    <Route exact path={`${path}/:cateid`}><Post url={url}/></Route>
                    <Route exact path={`${path}/post/postdetail`}><Posts/></Route>
                    </Switch> */}

                    <ProfileCard/>
                    

                    <Post/>
                    <Post/>
                    
                </div>
                <div class="col-2 ms-auto me-auto">
                </div>
            </div>
        </div>
    )
}