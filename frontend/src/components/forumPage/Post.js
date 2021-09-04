import { BrowserRouter as Link, useLocation, useParams } from "react-router-dom"

export default function Post(props) {
    let {cateid} = useParams()
    console.log(cateid)
    return (
        <div class="pt-3">
            <div class="card mb-4">
                <div class="card-header text-muted" id="post-{{$post->id}}">
                    <a href="/profile" style={{ "text-decoration": "none", "color": "black"}}>Posted by: USER
                    &nbsp;&nbsp;</a>

                    <span class="pull-right">
                        &nbsp;&nbsp;
                        <button type="button" class="btn btn-primary">Follow</button>
                        {/*<span class="dropdown">
                            <i class="fas fa-edit pull-right hover-icon w3-xlarge" data-toggle="dropdown"></i>
                            <div class="dropdown-menu" aria-labelledby="editMenu">
                                <div class="dropdown-item" id="edit-post" data-toggle="modal" data-target="#edit-image-post-{{$post->id}}"> Edit post</div>
                                <div class="dropdown-item" id="delete-post" data-toggle="modal" data-target="#deletePost{{$post->id}}"> Delete post</div>
                            </div>
    </span>*/}
                    </span>
                </div>
                {/*<Link to={`${props.url}/post/postdetail`} style={{ "text-decoration": "none", "color": "black" }}></Link>*/}
                <a href={`${props.url === undefined ? "/forum" : props.url}/post/postdetail`} style={{ "text-decoration": "none", "color": "black"}}>
                    <div class="card-body">
                        <h3 class="card-title">Title - Category {cateid}</h3>
                        <p class="class-text"> Content
                        </p>
                    </div>
                    <div class="">
                        <img class="card-img-bottom" src="http://simpleicon.com/wp-content/uploads/icon2.png" alt="post-image" style={{ "width": "50%" }} />
                    </div>
                </a>

                <div class="card-footer text-muted">
                    <i class="fa fa-thumbs-up hover-icon vote-button w3-large" id="like-button" value="0"></i>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={`${props.url == undefined ? "/forum" : props.url}/post/postdetail`} style={{ "text-decoration": "none", "color": "black"}}><i class=" fas fa-comment-dots hover-icon w3-large"></i></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    )
}