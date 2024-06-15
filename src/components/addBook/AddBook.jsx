// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../Services/Actions/bookActions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addbook.css'

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [Photo, setPhoto] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, year , Photo };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setGenre('');
    setYear('');
    setPhoto('');
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
                <input type="number" placeholder="Publication Year" required value={year} onChange={(e) => setYear(e.target.value)} className='input'/>
                <button type="submit" className='btn-style'>Add Book</button>
            </form>
            </div>
        </div>
    </>
  );
};

export default AddBook;
