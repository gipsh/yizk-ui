import "./App.css";
import Book from "./components/Book";
import BookItem from "./components/BookItem";
import books from "./books.json";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { ImageListItemBar } from '@mui/material';
import { IconButton } from '@mui/material';
import { ListSubheader } from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';







function App() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (e, book) => {
    console.log(book);
    setSelected(book);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Books</ListSubheader>
          </ImageListItem>

          {books.books.map((book, i) => {
            return (
              <ImageListItem key={i}>
                <img
                  id={"book-" + nanoid()}
                  key={i}
                  srcSet={process.env.PUBLIC_URL + "/books/" + book.folder + "/" + book.cover}
                  src={process.env.PUBLIC_URL + "/books/" + book.folder + "/" + book.cover}
                  alt={book.name}
                  loading="lazy"
                  onClick={(e) => handleSelect(e, book)}
                />
                <ImageListItemBar
                  title={book.name}
                  subtitle={<span>pages: {book.pages}</span>}
                  position="below"
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${book.name}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>

            );
          })}
        </ImageList>
       
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
