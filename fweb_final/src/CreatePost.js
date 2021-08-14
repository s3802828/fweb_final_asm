import Navbar from "./Navbar"
export default function CreatePost() {
    return (
        <div>
            <div class="pt-3">
                <div class="card mb-4">
                    <div class="card-header text-muted" id="post-{{$post->id}}">
                        Posted by: USER
                        &nbsp;&nbsp;

                    </div>

                    <div class="card-body">
                        <form>
                        <div class="input-group mb-3">
                            <label>Content
                                <textarea class="form-control" aria-label="With textarea" placeholder="Write something..."></textarea></label>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Upload Image</span>
                            </div>
                            <div class="custom-file ms-3">
                                <input type="file" class="custom-file-input" id="inputGroupFile01" />
                                <label class="custom-file-label" for="inputGroupFile01"></label>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Category</label>
                            </div>
                            <select class="custom-select ms-3" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <span class="pull-right">
                            &nbsp;&nbsp;
                            <button type="button" class="btn btn-primary">Upload</button>
                        </span>
                        </form>
                    </div>
                </div>



            </div>
        </div>

    )

}