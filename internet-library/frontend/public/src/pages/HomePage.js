import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <div className="home-page">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default HomePage;