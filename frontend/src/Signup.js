import React from 'react';

function Signup(props) {
    return (
        <div class="container" style={{marginTop: "150px"}}>
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <form>
                        <img class="mb-4 mx-auto" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                        <h1 class="h3 mb-3 fw-normal text-center">SIGN UP</h1>

                        <div class="form-floating">
                            <input type="username" class="form-control" id="floatingInput-username" placeholder="Kienhq51"/>
                            <label for="floatingInput-username">Username</label>
                        </div>
                        <div class="form-floating mt-2">
                            <input type="email" class="form-control" id="floatingInput-email" placeholder="name@example.com"/>
                            <label for="floatingInput-email">Email</label>
                        </div>
                        <div class="form-floating mt-2">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mt-2">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Retype Password</label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign up</button>
                        <div class="mb-3 mt-3 text-center">
                            <label>
                                <a class="mx-auto"href="/login">Already have an account? Sign In</a>
                            </label>
                        </div>
                    </form>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    );
}

export default Signup;