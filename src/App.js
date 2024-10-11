import logo from './logo.svg';
import './App.css';
import NewsHeadlines from './NewsHeadlines.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">News WebSite</h1>
        <h3 className="App-subtitle">Explore what's happening around the world</h3>
      </header>
      <main className="App-main">
        <NewsHeadlines />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 News Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
