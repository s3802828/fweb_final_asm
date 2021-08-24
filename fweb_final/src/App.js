import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './CreatePost';
import CreateNews from './CreateNews';
import Footer from './Footer';
import ForumPage from './ForumPage';
import Navbar from './Navbar';
import NewsPage from './NewsPage';
import Login from './Login';
import Signup from './Signup';
import Posts from './Posts';
import ReportPage from './ReportPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyProfile from './MyProfile';
function App() {
  return (

    <div style={{backgroundColor: "#EEEEEE"}}>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact base path="/"><NewsPage /></Route>
            <Route path="/forum"><ForumPage /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/articles"><ReportPage /></Route>
            <Route path="/profile"><MyProfile /></Route>
          </Switch>
        </Router>
      </div>
      <div className="container">
      <Footer />
      </div>
    </div>
  );
}

export default App;
