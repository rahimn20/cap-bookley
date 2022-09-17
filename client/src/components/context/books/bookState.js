import { useState } from 'react';
import BookContext from './';

function BookState({ children }) {
  const [books, setBooks] = useState([]);

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
        // rows = setRows(data);
      })
      .catch(error => {
        console.error(
          'Error fetching data, Please turn on Port address',
          error
        );
      });
  };

  return (
    <BookContext.Provider value={{ books, getBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookState;
