import React from 'react';

function Login(props) {
    return (
        <div class="container" style={{marginTop: "150px"}}>
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <form>
                        <img class="mb-4 mx-auto" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 class="h3 mb-3 fw-normal text-center">SIGN IN</h1>

                        <div class="form-floating">
                            <input type="user" class="form-control" id="floatingInput" placeholder="Kienhq51" />
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mt-2">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class ="mb-3 mt-3 text-center">
                            <label>
                                <a  href="#">Forgot Password?</a>
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <div class="mb-3 mt-3 text-center">
                            <label>
                                <a class="mx-auto" href="/signup">Create New Account</a>
                            </label>
                        </div>
                        
                        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </form>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    );
}

export default Login;