import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const FavoritesPage = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/favorites')
      .then(response => {
        setFavoriteBooks(response.data);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <div className="favorites-page">
      {favoriteBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default FavoritesPage;