import Sidebar from "./Sidebar";
import Post from "./Post";
import Navbar from "./Navbar";

export default function ForumPage() {
    return (
        <div>
            <Navbar />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2">
                    <Sidebar />
                    </div>
                    <div class="col-8">
                    <Post />
                    </div>
                    <div class="col-2 ms-auto me-auto"> 
                    <button type="button" class="btn btn-dark mt-3">Create Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}