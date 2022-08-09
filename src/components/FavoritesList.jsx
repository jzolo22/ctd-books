import React from 'react';
import { Card } from './Card';

export const FavoritesList = (props) => {
  // props.favoriteBooks --> array of books to display
  // props.updateFavoriteBooks --> an update function for favoriteBooks
  return (
    <div>
      <h1>Favorite Books</h1>
      <ul className="favorites">
        {props.favoriteBooks.map((book) => {
          return (
            <Card
              key={book.title}
              book={book}
              favorite={true}
              updateFavoriteBooks={props.updateFavoriteBooks}
            />
          );
        })}
      </ul>
    </div>
  );
};
