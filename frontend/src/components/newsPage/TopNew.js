export default function TopNew(props) {
    return (
        <div class="card mb-3" style={{"width": "100%;", "height": "100%"}}>
            <img src="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" class="card-img-top img-fluid" alt="topNew" />
            <div class="card-body">
                <h5 class="card-title">{props.news.title}</h5>
                <p class="card-text">{props.news.content}</p>
                <p class="card-text"><small class="text-muted">{props.createdDiffTime}</small></p>
            </div>
        </div>
    )
}