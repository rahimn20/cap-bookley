import React, { useState } from 'react';
import BookContext from './';

function BookState({ children }) {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);

  const getBooks = React.useCallback(async options => {
    if (!options) {
      options = { sort: 'recent', filters: { min: 0, max: 5000 } };
    }
    let { sort, filters } = options;

    fetch(`/api/books?s=${sort}&min=${filters.min}&max=${filters.max}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.error(
          'Error fetching data, Please turn on Port address',
          error
        );
      });
  }, []);

  const getBookById = React.useCallback(async bookID => {
    fetch(`/api/books/${bookID}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setBook(data);
      })
      .catch(error => {
        console.error(
          'Error fetching data, Please turn on Port address',
          error
        );
      });
  }, []);

  return (
    <BookContext.Provider value={{ books, book, getBooks, getBookById }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookState;
