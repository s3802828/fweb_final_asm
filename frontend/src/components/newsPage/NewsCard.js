export default function NewsCard(props) {
    return (
        <div>
            <div class="card mb-3" style={{maxWidth: "100%"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{props.news.title}</h5>
                            <p class="card-text">{props.news.content}</p>
                            <p class="card-text"><small class="text-muted">{props.createdDiffTime}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}