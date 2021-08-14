import NewsCard from './NewsCard';
import BreakingNewsCarousel from './BreakingNewsCarousel';
import TopNew from './TopNew';
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import ReportPage from './ReportPage';
export default function NewsPage() {
    let arrayNew = [1, 2, 3]
    return (
        <div>
            <div className="container-fluid">
                <div class="row">
                    <div className="col-12">
                        <BreakingNewsCarousel />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div className="row">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <TopNew />
                            </Link>
                        </div>
                        {arrayNew.map(element => (<div className="row">
                            <Link to="/articles" style={{ "text-decoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>))
                        }
                    </div>
                    <div class="col-4">
                        Statistics
                    </div>
                </div>
            </div>

        </div>
    )
}