import {
  BrowserRouter as Link,
  useLocation,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post(props) {
    return (
        
      <div class="card mb-4 mt-3">
        <div class="card-header text-muted" id={props.element._id}>
          <div>
          <a
            href={`/profile/${props.element.user_id}`}
            style={{ "text-decoration": "none", color: "black" }}
          >
            Posted by: {props.element.username ? props.element.username : props.username}&nbsp;&nbsp;
          </a>
          {props.createdAt}
          </div>
          <span class="pull-right">
            &nbsp;&nbsp;

            <button type="button" class="btn btn-primary">
              Follow
            </button>
            </span>
            {/*<span class="dropdown">
                            <i class="fas fa-edit pull-right hover-icon w3-xlarge" data-toggle="dropdown"></i>
                            <div class="dropdown-menu" aria-labelledby="editMenu">
                                <div class="dropdown-item" id="edit-post" data-toggle="modal" data-target="#edit-image-post-{{$post->id}}"> Edit post</div>
                                <div class="dropdown-item" id="delete-post" data-toggle="modal" data-target="#deletePost{{$post->id}}"> Delete post</div>
                            </div>
    </span>*/}
       
        </div>
        {/*<Link to={`${props.url}/post/postdetail`} style={{ "text-decoration": "none", "color": "black" }}></Link>*/}
        <a
          href={`${
            props.url === undefined ? "/forum" : props.url
          }/post/postdetail/${props.element._id}`}
          style={{ "textDecoration": "none", color: "black" }}
        >
          <div class="card-body">
            <h3 class="card-title">
              {props.element.title} 
            </h3>
            <p class="class-text">{props.element.content}</p>
          </div>
          <div class="">
            <img
              class="card-img-bottom"
              src="http://simpleicon.com/wp-content/uploads/icon2.png"
              alt="post-image"
              style={{ width: "50%" }}
            />
          </div>
        </a>

        <div class="card-footer text-muted">
          <i
            class="fa fa-thumbs-up hover-icon vote-button w3-large"
            id="post-{{$post->id}}-up"
            value="0"
          ></i>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={`${
              props.url == undefined ? "/forum" : props.url
            }/post/postdetail/${props.element._id}`}
            style={{ "textDecoration": "none", color: "black" }}
          >
            <i class=" fas fa-comment-dots hover-icon w3-large"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    );
  ;
 
}

// return (

//         <div class="pt-3">
//             {Posts}
//             {Posts.map((element, index) => {
//         return <div class="card mb-4" key={index}>
//             <div class="card-header text-muted" id="post-{{$post->id}}">
//                 <a href="/profile" style={{ "text-decoration": "none", "color": "black"}}>Posted by:
//                 &nbsp;&nbsp;</a>

//                 <span class="pull-right">
//                     &nbsp;&nbsp;
//                     <button type="button" class="btn btn-primary">Follow</button>
//                     {/*<span class="dropdown">
//                         <i class="fas fa-edit pull-right hover-icon w3-xlarge" data-toggle="dropdown"></i>
//                         <div class="dropdown-menu" aria-labelledby="editMenu">
//                             <div class="dropdown-item" id="edit-post" data-toggle="modal" data-target="#edit-image-post-{{$post->id}}"> Edit post</div>
//                             <div class="dropdown-item" id="delete-post" data-toggle="modal" data-target="#deletePost{{$post->id}}"> Delete post</div>
//                         </div>
// </span>*/}
//                 </span>
//             </div>
//             {/*<Link to={`${props.url}/post/postdetail`} style={{ "text-decoration": "none", "color": "black" }}></Link>*/}
//             <a href={`${props.url === undefined ? "/forum" : props.url}/post/postdetail`} style={{ "text-decoration": "none", "color": "black"}}>
//                 <div class="card-body">
//                     <h3 class="card-title">{element.title} - Category {cateid}</h3>
//                     <p class="class-text">
//                     </p>
//                 </div>
//                 <div class="">
//                     <img class="card-img-bottom" src="http://simpleicon.com/wp-content/uploads/icon2.png" alt="post-image" style={{ "width": "50%" }} />
//                 </div>)
//             </a>

//             <div class="card-footer text-muted">
//                 <i class="fa fa-thumbs-up hover-icon vote-button w3-large" id="post-{{$post->id}}-up" value="0"></i>
//                 &nbsp;&nbsp;
//                 &nbsp;&nbsp;&nbsp;&nbsp;
//                 <a href={`${props.url == undefined ? "/forum" : props.url}/post/postdetail`} style={{ "text-decoration": "none", "color": "black"}}><i class=" fas fa-comment-dots hover-icon w3-large"></i></a>
//                 &nbsp;&nbsp;&nbsp;&nbsp;
//             </div>
//         </div>})}