import React from 'react';
import '../App.css';

export const Card = (props) => {
  const handleAddToFavorites = (book) => {
    props.fetchNewCocktail();
    // same as setFavoriteBooks from App.js
    props.updateFavoriteBooks((prevFavoriteBooks) => [
      ...prevFavoriteBooks,
      book,
    ]);
  };

  const handleRemoveFromFavorites = (book) => {
    // remove the book from our existing favorites array and update favoriteBooks state
    props.updateFavoriteBooks((prevFavoriteBooks) =>
      prevFavoriteBooks.filter(
        (favoriteBook) => favoriteBook.title !== book.title
      )
    );
  };

  return (
    <div className="card">
      <img
        className="image"
        alt={`book cover for ${props.book.title}`}
        src={props.book.imageLink}
      />
      <p>{props.book.title}</p>
      {props.favorite ? (
        <button
          className="unfavorite-button"
          onClick={() => handleRemoveFromFavorites(props.book)}
        >
          Remove from favorites
        </button>
      ) : (
        <button
          className="favorite-button"
          onClick={() => handleAddToFavorites(props.book)}
        >
          Add to favorites
        </button>
      )}
    </div>
  );
};
