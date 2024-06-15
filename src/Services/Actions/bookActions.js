import axios from 'axios';

export const fetchBooks = () => async dispatch => {
  const response = await axios.get('http://localhost:5000/books');
  dispatch({ type: 'FETCH_BOOKS', payload: response.data });
};

export const addBook = (book) => async dispatch => {
  const response = await axios.post('http://localhost:5000/books', book);
  dispatch({ type: 'ADD_BOOK', payload: response.data });
};

export const updateBook = (id, updatedBook) => async dispatch => {
  const response = await axios.put(`http://localhost:5000/books/${id}`, updatedBook);
  dispatch({ type: 'UPDATE_BOOK', payload: response.data });
};

export const deleteBook = (id) => async dispatch => {
  await axios.delete(`http://localhost:5000/books/${id}`);
  dispatch({ type: 'DELETE_BOOK', payload: id });
};
