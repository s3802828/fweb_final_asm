import React, { useEffect, useState } from "react"

export default function Sidebar(props) {
    const endPoint = "http://localhost:9000/categorize/categorize_post"

    const [postList, setPostList] = useState([])

    const categorzie_posts = (id) => {
        console.log(id)
        fetch(endPoint + `/${id}`)
        .then(response => response.json())
        .then(data => {setPostList(data);props.setPostList(data)})
    }

    

    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light mt-3" style={{"width": "100%;"}}>
            {console.log(postList)}
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span class="fs-4">Categories</span>
            </a>
            <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href= "" class="nav-link link-dark" aria-current="page" id="6128c6eb460773537ff30997" onClick={(e) => {e.preventDefault();console.log(e.target.id);categorzie_posts(e.target.id)}}>
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
                            Category 1
                        </a>
                    </li>
                    <li>
                        <a href={`${props.url}/2`} class="nav-link link-dark" id="6128c6eb460773537ff30996">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></svg>
                            Category 2
                        </a>
                    </li>
                    <li>
                        <a href={`${props.url}/3`} class="nav-link link-dark" id="6128c6eb460773537ff30995">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
                            Category 3
                        </a>
                    </li>
                    <li>
                        <a href={`${props.url}/4`} class="nav-link link-dark" id="6128c6eb460773537ff30994">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>
                            Category 4
                        </a>
                    </li>
                    <li>
                        <a href={`${props.url}/5`} class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#people-circle" /></svg>
                            Category 5
                        </a>
                    </li>
                </ul>
            <hr />
            <button type="button" class="btn btn-dark" onClick={props.showCreatePostForm ? e => props.showForm(false) : e => props.showForm(true)}>{props.showCreatePostForm ? "Close Form" : "Create New Post"}</button>
        </div>
            )
}