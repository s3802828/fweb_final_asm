import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';

export default function ReportPage() {

    const { id } = useParams();
    console.log(id);

    const endPoint = `http://localhost:9000/newsdata/articles`

    const [item, setItem] = useState()

    const redirectToMainPage = () => { window.location.replace("http://localhost:3000") };

    const load = () => {
        fetch(endPoint + "/" + id)
            .then(response => response.json())
            .then(data =>
                fetch(`http://localhost:9000/profile/profiledetails/${data.user_id}`)
                    .then((res) => res.json())
                    .then((dataUser) => setItem({ ...data, username: dataUser.username })
                    ))
    }

    const deleteNews = () => {
        console.log("clicked")
        fetch(endPoint + "/delete", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ _id: id })
        }).then(redirectToMainPage())
    }
    const breakLine = <br />

    // function nl2br(str, is_xhtml) {
    //     if (typeof str === 'undefined' || str === null) {
    //         return '';
    //     }
    //     //var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? <br /> : <br>;
    //     return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakLine + '$2');
    // }

    function flatMap(array, fn) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            var mapping = fn(array[i]);
            result = result.concat(mapping);
        }
        return result;
    }

    var nl2br = function (string) {
            string = flatMap(string.split(/\n/), function (part) {
                return [part, <br />];
            });
            // Remove the last spac
            string.pop();
            return (
                <div>
                    {string}
                </div>
            );
        }


    //load data automatically
    useEffect(() => {
        load()
    }, [])


    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2">

                    </div>

                    <div class="col-8">
                        <figure class="text-center my-5">
                            <h1 class="display-2">{item && item.title}</h1>
                            <img class="rounded-circle shadow my-3" src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="Profile picture" style={{ "width": "80px", "height": "80px" }}></img>
                            <p class="lead">{item && item.username}</p>
                            {console.log(item && item._id)}
                        </figure>
                        <p class="lead">Created at: {item && item.createdAt.substring(0, 10)} (Updated: {item && item.updatedAt.substring(0, 10)})</p>
                        <hr class="bg-secondary border-2 border-top border-secondary"></hr>
                        <figure class="text-center my-5">
                            <div style={{ textAlign: "justify" }}>
                                <div class="card my-3">
                                    <figure class="text-center my-2">
                                        <img style={{ "width": "90%" }} src={`/newsUploads/${item && item.image}`} alt="Image" />
                                    </figure>
                                </div>
                                <p class="fw-normal lh-base">{item && nl2br(item.content)}</p>


                            </div>
                        </figure>
                        <hr class="bg-secondary border-2 border-top border-secondary"></hr>
                        <figure class="text-start border border-light border-2 my-3">
                            <h6><img class="rounded-circle shadow my-3 mx-3" src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="Profile picture" style={{ "width": "80px", "height": "80px" }}></img> Reporter {item && item.username}</h6>
                        </figure>


                    </div>

                    <div class="col-2">
                        <figure class="text-center my-5">
                            <button type="button" class="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                Delete This Article
                            </button>
                            <button type="button" class="btn btn-warning my-3 w-100">
                                <Link to={`/editnews/${item && item._id}`} style={{ "text-decoration": "none", "color": "black" }}>
                                    Edit This Article
                                </Link>
                            </button>
                        </figure>

                        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        Do you want to delete this post?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                        <button type="button" class="btn btn-primary" onClick={() => deleteNews()}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}