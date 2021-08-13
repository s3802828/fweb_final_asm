import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './CreatePost';
import Footer from './Footer';
import ForumPage from './ForumPage';
import Navbar from './Navbar';
import NewsPage from './NewsPage';
function App() {
  return (
    <div>
      <Navbar />
      <NewsPage />
      {/*<CreatePost />*/}
      {/*<ForumPage />*/}
      <Footer />
    </div>
  );
}

export default App;
