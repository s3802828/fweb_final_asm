export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#A19882"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/" style={{fontSize: "25px"}}>COVI-AWAY</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize: "20px"}}>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/forum">Forum</a>
                            </li>
                        </ul>
                        <a href="/signup"><button class="btn btn-light me-2" type="button">Sign Up</button></a>
                        <a href="/login"><button class="btn btn-light" type="button">Login</button></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}