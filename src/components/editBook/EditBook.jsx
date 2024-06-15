// import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../../Services/Actions/bookActions';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.find(book => book.id === parseInt(id)));

  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [genre, setGenre] = useState(book ? book.genre : '');
  const [year, setYear] = useState(book ? book.year : '');
  const [Photo, setPhoto] = useState(book ? book.Photo : '');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setGenre(book.genre);
      setYear(book.year);
      setPhoto(book.Photo);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { id: parseInt(id), title, author, genre, year , Photo};
    dispatch(updateBook(id, updatedBook));
    navigate('/view');
  };

  return (
  <>
    <div className='container add'>

      <div className='form-style'>
        <form onSubmit={handleSubmit}>
          <input type='link' placeholder='Add Link' required value={Photo} onChange={(e) => setPhoto(e.target.value)} className='input'/>
          <input type="text" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} className='input'/>
          <input type="text" placeholder="Author" required value={author} onChange={(e) => setAuthor(e.target.value)} className='input'/>
          <input type="text" placeholder="Genre" required value={genre} onChange={(e) => setGenre(e.target.value)} className='input'/>
          <input type="text" placeholder="Publication Year" required value={year} onChange={(e) => setYear(e.target.value)} className='input'/>
          <button type="submit" className='btn-style'>Update Book</button>
        </form>
      </div>
    </div>
  </>
  );
};

export default EditBook;
