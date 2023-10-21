import "./App.css";
import Book from "./components/Book";
import BookItem from "./components/BookItem";
import books from "./books.json";
import { nanoid } from "nanoid";
import React, { useState } from "react";

function App() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (e, book) => {
        console.log(book);
        setSelected(book);
    };

    return (
        <div className="App">
            <header className="App-header">
                <ol>
                    {books.books.map((book, i) => {
                        return (
                            <li>
                                <BookItem
                                    key={i}
                                    id={"book-" + nanoid()}
                                    name={book.name}
                                    folder={book.folder}
                                    initalPage={book.initialPage}
                                    maxPages={book.pages}
                                    isList={true}
                                    onClick={(e) => handleSelect(e, book)}
                                />
                            </li>
                        );
                    })}
                </ol>

                {selected && (
                    <Book
                        name={selected.name}
                        folder={selected.folder}
                        initialPage={selected.initialPage}
                        maxPages={selected.pages}
                    />
                )}
            </header>
        </div>
    );
}

export default App;
