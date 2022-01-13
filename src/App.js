import './App.css';
import NewsFeed from './components/NewsFeed';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className='app'>
      <NavBar />
      <NewsFeed />
    </div>
  )
}

export default App;
