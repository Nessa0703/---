import React from 'react';

const FavoriteButton = ({ bookId, isFavorite, toggleFavorite }) => {
  return (
    <button onClick={() => toggleFavorite(bookId)}>
      {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    </button>
  );
};

export default FavoriteButton;