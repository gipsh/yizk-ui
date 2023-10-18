import './App.css';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Book
         name="Horodlo"
         folder="horodlo"
         initalPage={56990565}
         maxPages={322}
        />
      </header>
    </div>
  );
}

export default App;
