import NewsCard from './NewsCard';
import BreakingNewsCarousel from './BreakingNewsCarousel';
import TopNew from './TopNew';
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
export default function NewsPage() {
    let category = [1, 2, 3]
    let cateNewCard = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <div className="container">
                <div class="row">
                    <div className="col-12">
                        <BreakingNewsCarousel />
                    </div>
                </div>
            </div>
            {category.map((element, indexCate) => (
                <div class="container" key={indexCate}>
                    <h1>{`CATEGORY ${element}`}</h1>
                    <div class="row mb-3">
                        <div class="col-8">
                            <div className="row">
                                <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                    <TopNew />
                                </Link>
                            </div>
                        </div>
                        {indexCate === 0 ? <div class="col-4">
                            Statistics
                        </div> : <div class="col-4">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <TopNew />
                            </Link>
                        </div>}
                    </div>
                    <div className="row">

                        <div className="col">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}