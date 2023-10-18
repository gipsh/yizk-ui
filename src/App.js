import './App.css';
import Book from './components/Book';
import books from './books.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Book
         name="Horodlo"
         folder="horodlo"
         initalPage={56990567}
         maxPages={322}
        />
      </header>
    </div>
  );
}

export default App;
