import NewsCard from './NewsCard';
import BreakingNewsCarousel from './BreakingNewsCarousel';
import TopNew from './TopNew';
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function NewsPage() {
    const endPoint = 'http://localhost:9000/news'
    const [newsCategoryList, setNewsCategoryList] = useState([])
    const fetchAllNewsCategory = () => {
        fetch(endPoint + '/newscategory').then(res => res.json()).then(data => {
            data.sort((first, second) => {
                return first.name === 'Cases' ? -1 : second.name === 'Cases' ? 1 : 0
            })
            setNewsCategoryList(data)
        })
    }
    useEffect(()=> {
        fetchAllNewsCategory()
    }, [])
    return (
        <div>
            <div className="container">
                <div class="row">
                    <div className="col-12">
                        <BreakingNewsCarousel />
                    </div>
                </div>
            </div>
            {newsCategoryList.map((element, indexCate) => (
                <div class="container" key={indexCate} style={{marginTop: "2%"}}>
                    <h1>{`${element.name}`}</h1>
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
                </div>))}
        </div>
    )
}