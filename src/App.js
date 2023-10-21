import './App.css';
import Book from './components/Book';
import BookItem from './components/BookItem';
import books from './books.json';
import { nanoid } from "nanoid";
import React, { useState } from "react";



function App() {
  const [selected,setSelected]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setSelected(e)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ol>
        {books.books.map((book) => {
          return <li><BookItem 
            id={'book-' + nanoid()}
            name={book.name}
            folder={book.folder}
            initalPage={book.initalPage}
            maxPages={book.pages}
            isList={true}
            onClick={handleSelect}
            /></li>
        })}
        </ol>

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
