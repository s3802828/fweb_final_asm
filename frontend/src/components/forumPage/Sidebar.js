import { useEffect, useState } from "react"

export default function Sidebar(props) {
    const endPoint = 'http://localhost:9000/forums/post_category'
    const endPoint1 = "http://localhost:9000/categorize/categorize_post"
    const [postCategoryList, setpostCategoryList] = useState([])
    const fetchPostCategories = () => {
        fetch(endPoint)
       .then(response => response.json())
       .then(data => {console.log(data); setpostCategoryList(data)})
    }


    const categorzie_posts = (id) => {
        console.log(id)
        fetch(endPoint1 + `/${id}`)
        .then(response => response.json())
        .then(data => {props.setPostList(data)})
    }

    useEffect(()=>{
        fetchPostCategories()
    },[])
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light mt-3" style={{"width": "100%;"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span class="text-center">Categories</span>
            </a>
            <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href='' class="nav-link link-dark" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
                            General
                        </a>
                    </li>
                    <li>
                        <a href="" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></svg>
                            Popular
                        </a>
                    </li>
                    
                    {postCategoryList.map((element, index)=>{
                        {console.log(element)}
                        return (<li key={index}>
                        <a href="" class="nav-link link-dark" onClick={(e) => {e.preventDefault();console.log("clicked");categorzie_posts(`${element._id}`)}}>
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
                            {element.name} 
                        </a>
                    </li>)
                    })}
                </ul>
            <hr />
            <button type="button" class="btn btn-dark" onClick={props.showCreatePostForm ? e => props.showForm(false) : e => props.showForm(true)}>{props.showCreatePostForm ? "Close Form" : "Create New Post"}</button>
        </div>
            )
}