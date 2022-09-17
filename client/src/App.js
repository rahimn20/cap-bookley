import React from 'react';
import Layout from './components/Main/Layout.jsx';
import { AuthState } from './components/context/auth/index.js';
import BookState from './components/context/books/bookState.js';

function App() {
  return (
    <>
      <AuthState>
        <BookState>
          <Layout />
        </BookState>
      </AuthState>
    </>
  );
}

export default App;
