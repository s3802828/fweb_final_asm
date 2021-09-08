import NewsCard from './NewsCard';
import BreakingNewsCarousel from './BreakingNewsCarousel';
import TopNew from './TopNew';
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function NewsPage() {
    const endPoint = 'http://localhost:9000/news'
    const [newsCategoryList, setNewsCategoryList] = useState([])
    const [latestCovidDataVietnam, setLatestCovidDataVietnam] = useState()
    const [latestCovidDataGlobal, setLatestCovidDataGlobal] = useState()
    const [categorizedNewsList, setCategoriedNewsList] = useState([])
    const fetchAllNewsCategory = () => {
        fetch(endPoint + '/newscategory').then(res => res.json()).then(data => {
            data.sort((first, second) => {
                return first.name === 'Cases' ? -1 : second.name === 'Cases' ? 1 : 0
            })
            setNewsCategoryList(data)
            data.map((element) => fetch(endPoint + `/${element._id}`).then(res => res.json()).then(data => {
                setCategoriedNewsList(categorizedNewsList => [...categorizedNewsList, data])
            }))
        })
    }
    const getLatestCovidData = () => {
        fetch('https://corona-api.com/countries/VN').then(res => res.json()).then(data => {
            setLatestCovidDataVietnam(data.data.latest_data)
        })
        fetch('https://corona.lmao.ninja/v2/all').then(res => res.json()).then(data => {
            console.log(data.cases)
            setLatestCovidDataGlobal(data)
        })
    }

    
    useEffect(() => {
        fetchAllNewsCategory()
        getLatestCovidData()
    }, [])
    return (
        <div>
            {console.log(categorizedNewsList)}
            <div className="container">
                <div class="row">
                    <div className="col-12">
                        <BreakingNewsCarousel/>
                    </div>
                </div>
            </div>
            {newsCategoryList.map((element, indexCate) => (
                <div class="container" key={indexCate} style={{ marginTop: "2%" }}>
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
                            {latestCovidDataVietnam ?
                                <div style ={{textAlign: "center"}}>
                                    <h1>Vietnam Live Statistics</h1>
                                    <div style={{ color: "red" }}>
                                        <span style={{ fontSize: 20 }}>Total Cases: </span>
                                        <div style={{ fontSize: 35, fontWeight: "bold" }}>{latestCovidDataVietnam.confirmed && latestCovidDataVietnam.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                    </div>
                                    <div style={{ color: "grey" }}>
                                        <span style={{ fontSize: 20 }}>Deaths: </span>
                                        <div style={{ fontSize: 35, fontWeight: "bold" }}>{latestCovidDataVietnam.deaths && latestCovidDataVietnam.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                    </div>
                                    <div style={{ color: "green" }}>
                                        <span style={{ fontSize: 20 }}>Recovered: </span>
                                        <div style={{ fontSize: 35, fontWeight: "bold" }}>{latestCovidDataVietnam.recovered && latestCovidDataVietnam.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                    </div>
                                    <div style={{ color: "#FFB830" }}>
                                        <span style={{ fontSize: 20 }}>Active cases:</span>
                                        <div style={{ fontSize: 35, fontWeight: "bold" }}> {latestCovidDataVietnam.critical && latestCovidDataVietnam.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                    </div>
                                </div> : <div>Vietnam Case Statistics: See below link</div>}
                            {latestCovidDataGlobal ?
                                <div  className = "mt-2" style ={{textAlign: "center"}}>
                                    <h1>Global Live Statistics</h1>
                                    <div style={{ color: "red" }}>
                                        <span style={{ fontSize: 20 }}>Total Cases: </span>
                                        <div style={{ fontSize: 35, fontWeight: "bold" }}>{latestCovidDataGlobal.cases  && latestCovidDataGlobal.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                    </div>
                                    <div style={{ color: "grey" }}>
                                        <span style={{ fontSize: 20 }}>Deaths: </span>
                                        <div style={{ fontSize: 35, fontWeight: "bold" }}>{latestCovidDataGlobal.deaths && latestCovidDataGlobal.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                    </div>
                                    <div style={{ color: "green" }}>
                                        <span style={{ fontSize: 20 }}>Recovered: </span>
                                        <div style={{ fontSize: 35, fontWeight: "bold" }}>{latestCovidDataGlobal.recovered && latestCovidDataGlobal.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                    </div>
                                    <div style={{ color: "#FFB830" }}>
                                        <span style={{ fontSize: 20 }}>Active cases:</span>
                                        <div style={{ fontSize: 35, fontWeight: "bold" }}> {latestCovidDataGlobal.active && latestCovidDataGlobal.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                    </div>
                                </div> : <div>Global Case Statictics See below link</div>}
                        </div> : <div class="col-4">
                            <Link to="/articles" style={{ "textDecoration": "none", "color": "black" }}>
                                <TopNew />
                            </Link>
                        </div>}
                    </div>
                    <div className="row">

                        <div className="col">
                            <Link to="/articles" style={{ "textDecoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/articles" style={{ "textDecoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/articles" style={{ "textDecoration": "none", "color": "black" }}>
                                <NewsCard />
                            </Link>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}