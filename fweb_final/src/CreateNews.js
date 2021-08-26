export default function CreateNews() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div class="pt-3">
                            <div class="card mb-4">
                                <div class="card-header text-center" id="post-{{$post->id}}">
                                    CREATE NEW ARTICLE
                                </div>

                                <div class="card-body container-fluid">
                                    <form>
                                        <div class="row">
                                            <div class="form-group mb-3 col-7">
                                                <label for="posttitle">Title</label>
                                                <input type="text" class="form-control border border-secondary" placeholder="Article Title" id="posttitle" />
                                            </div>
                                            <div class="form-group mb-3 col-5">
                                                <label for="inputGroupSelect01">Category</label>
                                                <div>
                                                    <select class="custom-select" id="inputGroupSelect01" style={{ "height": "35px" }}>
                                                        <option selected>Choose Category</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="postcontent">Content</label>
                                            <textarea class="form-control border border-secondary" placeholder="Article Content" id="postcontent"></textarea>
                                        </div>

                                        <div className="row">
                                            <div class="form-group mb-3 col-6">
                                                <div class="custom-file">
                                                    <label class="custom-file-label" for="inputGroupFile01">Upload Image</label><br />
                                                    <input type="file" class="custom-file-input" id="inputGroupFile01" />
                                                </div>
                                            </div>
                                            <div class="form-check form-switch col-6">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label" for="flexSwitchCheckDefault">Breaking news</label>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            &nbsp;&nbsp;
                                            <button type="button" class="btn btn-primary">Upload</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

        </div>


    )

}