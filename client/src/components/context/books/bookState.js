import { useState } from 'react';
import BookContext from './';

function BookState({ children }) {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);

  const getBooks = async () => {
    fetch('/api/books')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setBooks(data);
        // console.log(data)
        // rows = setRows(data);
      })
      .catch(error => {
        console.error(
          'Error fetching data, Please turn on Port address',
          error
        );
      });
  };

  const getBookById = async (bookID) => {
    fetch(`/api/books/${bookID}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then(data => {
      setBook(data);
      // rows = setRows(data);
    })
    .catch(error => {
      console.error(
        'Error fetching data, Please turn on Port address',
        error
      );
    });
  }

  return (
    <BookContext.Provider value={{ books, book, getBooks, getBookById }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookState;
