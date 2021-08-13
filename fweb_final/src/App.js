import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './CreatePost';
import Footer from './Footer';
import ForumPage from './ForumPage';
import Navbar from './Navbar';
import NewsPage from './NewsPage';
import Login from './Login';
import Signup from './Signup';
import Posts from './Posts';
function App() {
  return (
    <div>

      <Navbar />
      <NewsPage />
      {/*<CreatePost />*/}
      {/*<ForumPage />*/}
      {/* <Footer /> */}
      {/*<Login/>*/}
      {/*<Signup/>*/}
      <Posts />
    </div>
  );
}

export default App;
