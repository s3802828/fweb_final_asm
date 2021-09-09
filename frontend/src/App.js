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
import { useEffect, useState } from 'react';
import authHeader from './components/login_signup/authHeader';
function App() {
  //Authorization
  const [isAdmin, setIsAdmin] = useState(false)
  const [isReporter, setIsReporter] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const [isPublic, setIsPublic] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)
  const endPoint = "http://localhost:9000/auth"

  const checkAdmin = () => {
    fetch(endPoint + "/admin", {
      headers: authHeader()
    }).then(res => res.json()).then(data => setIsAdmin(data.isAdmin))
  }
  const checkReporter = () => {
    fetch(endPoint + "/reporter", {
      headers: authHeader()
    }).then(res => res.json()).then(data => setIsReporter(data.isReporter))
  }
  const checkUser = () => {
    fetch(endPoint + "/user", {
      headers: authHeader()
    }).then(res => res.json()).then(data => setIsUser(data.isUser))
  }
  const checkPublic = () => {
    fetch(endPoint + "/public", {
    }).then(res => res.json()).then(data => setIsPublic(data.isPublic))
  }
  useEffect(() => {
    checkPublic()
    const currentUser = JSON.parse(localStorage.getItem("user"))
    if(currentUser){
      setCurrentUser(currentUser)
      console.log('hello')
      checkUser();
      checkAdmin();
      checkReporter()
    }
    console.log(isPublic)
  }, []
  )

  return (
    <div>
      {isPublic &&
      <Router>
        <Navbar isUser = {isUser} currentUser = {currentUser} isReporter = {isReporter}/>
        <Switch>
          <Route exact base path="/"><NewsPage /></Route>
          <Route path="/forum"><ForumPage isUser = {isUser}/></Route>
          <Route exact path="/login"><Login /></Route>
          <Route path="/login/:verified"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/articles"><ReportPage /></Route>
          <Route path="/profile/:id"><MyProfile /></Route>
          <Route path="/articleform"><CreateNews /></Route>

        </Switch>
        <Footer />
      </Router>}
    </div>
  );
}

export default App;
