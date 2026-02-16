import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={`/images/${book.cover}`} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Автор: {book.author}</p>
    </div>
  );
};

export default BookCard;