import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import ForumPage from './ForumPage';
import Navbar from './Navbar';
import NewsPage from './NewsPage';
function App() {
  return (
    <div>
      <Navbar />
      <NewsPage />
      {/*<ForumPage />*/}
      <Footer />
    </div>
  );
}

export default App;
