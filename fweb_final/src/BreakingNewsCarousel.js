export default function BreakingNewsCarousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide mb-3 mt-3" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{ "height": "250px" }}>
                        <img src="https://izisoft.io/wp-content/uploads/2020/03/creative-powerpoint-template-QFKTK2.jpg" class="d-block w-100 img-fluid" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>TITLE 1</h4>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item" style={{ "height": "250px" }}>
                        <img src="https://izisoft.io/wp-content/uploads/2020/03/creative-powerpoint-template-QFKTK2.jpg" class="d-block w-100 img-fluid" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>TITLE 2</h4>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item" style={{ "height": "250px" }}>
                        <img src="https://izisoft.io/wp-content/uploads/2020/03/creative-powerpoint-template-QFKTK2.jpg" class="d-block w-100 img-fluid" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h4>TITLE 3</h4>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}