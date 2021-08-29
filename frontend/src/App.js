import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNews from './components/newsPage/CreateNews';
import Footer from './Footer';
import ForumPage from './components/forumPage/ForumPage';
import Navbar from './Navbar';
import NewsPage from './components/newsPage/NewsPage';
import Login from './components/login_signup/Login';
import Signup from './components/login_signup/Signup';
import ReportPage from './components/newsPage/ReportPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyProfile from './components/profilePage/MyProfile';
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
            <Route path="/articleform"><CreateNews /></Route>
            
          </Switch>
          <Footer />
        </Router>
      </div>
      
    </div>
  );
}

export default App;
