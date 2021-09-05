export default function Sidebar(props) {
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light mt-3" style={{"width": "100%;"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span class="fs-4">Categories</span>
            </a>
            <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href={`${props.url}/1`} class="nav-link link-dark" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
                            Category 1
                        </a>
                    </li>
                    <li>
                        <a href={`${props.url}/2`} class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></svg>
                            Category 2
                        </a>
                    </li>
                    <li>
                        <a href={`${props.url}/3`} class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
                            Category 3
                        </a>
                    </li>
                    <li>
                        <a href={`${props.url}/4`} class="nav-link link-dark">
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