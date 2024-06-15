import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, deleteBook } from '../../Services/Actions/bookActions';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

import './booklist.css'

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const navigate = useNavigate();
  const [searchItem,setSearchItem] =useState('');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const booksByGenre = filteredBooks.reduce((acc, book) => {
    if (!acc[book.genre]) {
      acc[book.genre] = [];
    }
    acc[book.genre].push(book);
    return acc;
  }, {});

  return (
    <>
    
    <div className='pe-3 d-flex justify-content-between'>
      <div>
      <h1 style={{display:'inline'}}>Book List</h1>
      </div>
      <div style={{paddingTop:'10px', paddingRight:'10px'}}>
        <Form onSubmit={handleSearch}>
            <Form.Control type="text" placeholder="Search Book Title" value={searchItem} onChange={handleSearch} />
        </Form>
      </div>
    </div>
    <div >
      {Object.keys(booksByGenre).map((genre) => (
        <div key={genre} className='book-genre-div'>
          <h2 style={{margin:'10px 0px 10px 16px'}}>{genre}</h2>
          <ul>
            {booksByGenre[genre].map((book) => (
              <li key={book.id}  className='book-lists'>
                <div className='d-flex m-3'>
                  <div className='photo-width'>{book && <img src={book.Photo}/>}</div>
                  <div className='book-detail'>
                    <p>Book Title : {book.title}</p>
                    <p>Book Author : {book.author}</p>
                    <p>Book Genre : {book.genre}</p>
                    <p>Book Year : {book.year}</p>
                  </div>
                </div>
                <div className='d-flex justify-content-center mb-3'>
                  <button onClick={() => handleEdit(book.id)} className='edit-btn'>Edit</button>
                  <button onClick={() => handleDelete(book.id)} className='delete-btn'>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
};

export default BookList;
