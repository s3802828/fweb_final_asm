import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router'


function PostDetail() {
    const {id} = useParams()
    const endPoint = `http://localhost:9000/forums/posts/${id}`
    const [postDetail, setpostDetail] = useState({})
    const fetchUserInfo = (passId, oldData, setFunction) => {
        fetch(`http://localhost:9000/profile/profiledetails/${passId}`)
            .then((res) => res.json())
            .then((dataProfile) => setFunction({...oldData, username: dataProfile.username }));
        }
    
    const fetchPostDetail = () => {
        fetch(endPoint)
       .then(response => response.json())
       .then(data => {console.log(data); fetchUserInfo(data.user_id, data, setpostDetail)})
        //   fetch(`http://localhost:9000/profile/profiledetails/${data.user_id}`)
        //     .then((res) => res.json())
        //     .then((dataProfile) => setpostDetail({...data, username: dataProfile.username }));})
    }
   
    const [postComment, setpostComment] = useState({})
    const fetchPostComment = () => {
        fetch(`http://localhost:9000/forums/comment/${id}`)
       .then(response => response.json())
       .then(data => {console.log(data);
        fetchUserInfo(data.user_id, data, setpostComment)
    })}
    useEffect(()=>{
        fetchPostDetail();
        fetchPostComment();
    },[])
    return (
       
        <div class="container-fluid">
            <div class="row">
                <article>
                    {console.log(postDetail)}
                <header class="my-4">
                    <h1 class="fw-bolder">
                        {postDetail.title}
                    </h1>
                    <p class="text-muted fst-italic">Posted on January 1, 2021 by {postDetail.username}</p>
                    <p class="fw-normal">categories<button class="btn btn-light btn-sm">urgent</button><button class="btn btn-light btn-sm">popular</button></p>
                </header>
                <figure class="img-fluid">
                    <img src="https://img.buzzfeed.com/buzzfeed-static/static/2016-01/22/17/campaign_images/webdr14/19-hermosos-regalos-para-gente-obsesionada-con-fr-2-25600-1453503418-3_dblbig.jpg" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
                    <figcaption class="figure-caption">A caption for the above image.</figcaption>
                </figure>
                <section class="mb-4 " style={{ textAlign: "justify" }}> 
                    <p class="lh-base mb-4 fs-5 lead">{postDetail.content}</p>
                </section>
            </article>
                    <section>
                        <div class="mt-5">
                            <div class="card bg-light">
                                <div class="card-body container">
                                    <div class="row">
                                        <form class="my-4 mx-2">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                                                <label for="floatingTextarea2">Comments</label>
                                            </div>
                                            <button class="btn btn-dark mt-3 pull-right">Post</button>
                                        </form>
                                    </div>
                                    <div class="row">
                                        <div class="d-flex mb-4">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Commenter Name</div>
                                                <div>{postComment.comment}</div>

                                                <div class="d-flex mt-4">
                                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                    <div class="ms-3">
                                                        <div class="fw-bold">Commenter Name</div>
                                                        Vivamus varius pellentesque nulla, lobortis condimentum ex. Nulla auctor velit vel viverra malesuada. Vivamus a efficitur justo.
                                                    </div>
                                                </div>

                                                <div class="d-flex mt-4">
                                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                    <div class="ms-3">
                                                        <div class="fw-bold">Commenter Name</div>
                                                        Nulla auctor velit vel viverra malesuada. Vivamus a efficitur justo.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Commenter Name</div>
                                                When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
            </div>
        </div>
    )
}

export default PostDetail;
