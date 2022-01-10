import './App.css';
import NewsFeed from './components/NewsFeed';
import CurrencyConvertor from './components/CurrencyConvertor';
function App() {
  return (
    <div className='app'>
      <CurrencyConvertor />
      <NewsFeed />
    </div>
  )
}

export default App;
