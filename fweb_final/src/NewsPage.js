import Navbar from './Navbar';
import NewsCard from './NewsCard';
import BreakingNewsCarousel from './BreakingNewsCarousel';
import TopNew from './TopNew';
export default function NewsPage() {
    return (
        <div>
            <Navbar />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <BreakingNewsCarousel />
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <div className="row">
                            <TopNew />
                        </div>
                        <div className="row">
                            <NewsCard />
                        </div>
                        <div className="row">
                            <NewsCard />
                        </div>
                        <div className="row">
                            <NewsCard />
                        </div>
                    </div>
                    <div class="col-4">
                        Statistics
                    </div>
                </div>
            </div>
        </div>
    )
}