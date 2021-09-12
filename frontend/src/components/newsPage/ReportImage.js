export default function ReportImage(props) {

    const link = props.imagelink;
    return (
        <div>
            <div class="card my-3">
                <figure class="text-center my-2">
                    <img style={{ "width": "90%" }} src={`./../frontend/public/uploads/${link}`} alt="Image" />
                </figure>
            </div>
        </div>
    );
}