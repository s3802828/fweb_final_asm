import React, { useState } from 'react';
import weblogo from '../../weblogo.png'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import emailsent from './emailsent.gif'

function Signup(props) {
    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required('Firstname is required')
            .max(10, 'Firstname must not exceed 10 characters')
            .matches(/^[a-zA-Z]+$/, 'Firstname must only contain letters'),
        lastname: Yup.string()
            .required('Lastname is required')
            .max(10, 'Lastname must not exceed 10 characters')
            .matches(/^[a-zA-Z]+$/, 'Lastname must only contain letters'),
        username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(15, 'Username must not exceed 15 characters')
            .matches(/^[a-zA-Z0-9_]+$/, 'Username must only contain letters, numbers, or "_"'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .max(40, 'Password must not exceed 40 characters')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/, 'Password must contain at least one letter, one number, and one special character'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const [returnMessage, setReturnMessage] = useState("")
    const endPoint = "http://localhost:9000/auth/signup"
    const signUp = data => {
        let registrant = {}
        //let c
        const deleteToken = localStorage.getItem("deleteToken")
        if ( deleteToken === "") {
            registrant = {
                username: data.username, password: data.password, email: data.email, name: data.firstname + " " + data.lastname
            }
        } else {
            registrant = {
                username: data.username, password: data.password, email: data.email, deleteToken: JSON.parse(deleteToken), name: data.firstname + " " + data.lastname
            }
        }
        console.log(registrant)
        fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrant)
        }).then(response => response.json()).then(data => setReturnMessage(data.message))
    };
    return (
        <div class="container" style={{ marginTop: "110px" }}>
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    {returnMessage !== "Verification email has been sent to you. Please verify your email to continue!" ?
                        (<form onSubmit={handleSubmit(signUp)}>
                            <div style={{ marginLeft: "35%" }}>
                                <img class="mb-4 mx-auto" src={weblogo} alt="Web Logo" width="45%" height="45%" />
                            </div>
                            <h1 class="h3 mb-3 fw-normal text-center">SIGN UP</h1>

                            <div class="form-floating">
                                <input type="username" class={`form-control ${errors.firstname ? 'is-invalid' : ''}`} id="floatingInput-firstname" placeholder="Kienhq51" {...register('firstname')} />
                                <label for="floatingInput-username">First Name</label>
                                <div className="invalid-feedback">{errors.firstname?.message}</div>
                            </div>
                            <div class="form-floating mt-2">
                                <input type="username" class={`form-control ${errors.lastname ? 'is-invalid' : ''}`} id="floatingInput-lastname" placeholder="Kienhq51" {...register('lastname')} />
                                <label for="floatingInput-username">Last Name</label>
                                <div className="invalid-feedback">{errors.lastname?.message}</div>
                            </div>
                            <div class="form-floating mt-2">
                                <input type="username" class={`form-control ${errors.username || returnMessage === "Username is already existed." ? 'is-invalid' : ''}`} id="floatingInput-username" placeholder="Kienhq51" {...register('username')} />
                                <label for="floatingInput-username">Username</label>
                                <div className="invalid-feedback">{returnMessage === "Username is already existed." && returnMessage} {errors.username?.message}</div>
                            </div>
                            <div class="form-floating mt-2">
                                <input type="email" class={`form-control ${errors.email || returnMessage === "Email is already existed." ? 'is-invalid' : ''}`} id="floatingInput-email" placeholder="name@example.com" {...register('email')} />
                                <label for="floatingInput-email">Email</label>
                                <div className="invalid-feedback">{returnMessage === "Email is already existed." && returnMessage} {errors.email?.message}</div>
                            </div>
                            <div class="form-floating mt-2">
                                <input type="password" class={`form-control ${errors.password ? 'is-invalid' : ''}`} id="floatingPassword" placeholder="Password" {...register('password')} />
                                <label for="floatingPassword">Password</label>
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                            <div class="form-floating mt-2">
                                <input type="password" class={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} id="floatingPassword" placeholder="Password" {...register('confirmPassword')} />
                                <label for="floatingPassword">Confirm Password</label>
                                <div className="invalid-feedback">
                                    {errors.confirmPassword?.message}
                                </div>
                            </div>
                            <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign up</button>
                            <div class="mb-3 mt-3 text-center">
                                <label>
                                    <a class="mx-auto" href="/login">Already have an account? Sign In</a>
                                </label>
                            </div>
                        </form>) : (<div>
                            <div>
                                <img class="mb-4 mx-auto" src={emailsent} alt="Verification email sent" width="100%" height="100%" />
                            </div>
                            <div class="alert alert-success" role="alert">
                                {returnMessage}
                            </div></div>
                        )

                    }
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    );
}

export default Signup;