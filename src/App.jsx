// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/bookList/BookList';
import AddBook from './components/addBook/AddBook';
import EditBook from './components/editBook/EditBook';
import Header from './components/Header/Header';
import Home from './components/Home/Home'

const App = () => {
  return (
      <>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path="/view" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </>
  );
};

export default App;
