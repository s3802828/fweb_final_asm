export default function Sidebar() {
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light mt-3" style={{"width": "100%;"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span class="fs-4">Categories</span>
            </a>
            <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
                            Category 1
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></svg>
                            Category 2
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
                            Category 3
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></svg>
                            Category 4
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">
                            <svg class="bi me-2" width="16" height="16"><use xlinkHref="#people-circle" /></svg>
                            Category 5
                        </a>
                    </li>
                </ul>
            <hr />
        </div>
            )
}