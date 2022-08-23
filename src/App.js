import './App.css';
import { useEffect, useState } from 'react';
import { books } from './books';
import { Card } from './components/Card';
import { FavoritesList } from './components/FavoritesList';
import { CocktailPicker } from './components/CocktailPicker';
import { Link } from 'react-router-dom';
import { useFetchNewCocktail } from './services/fetchCocktail';

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const { cocktail, isLoadingCocktail, fetchNewCocktail } =
    useFetchNewCocktail();

  useEffect(() => {
    // look through our filtered books, find the relevant ones, and then setFilteredBooks to the newly relevant ones
    const newlyFilteredBooks = books.filter((book) => {
      const lowerCaseTitle = book.title.toLowerCase();
      const lowerCaseSearch = search.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseSearch);
    });

    // and then setFilteredBooks to the newly relevant ones
    setFilteredBooks(newlyFilteredBooks);
  }, [search]);

  return (
    <>
      <nav>
        <Link to="/randomcocktail">Cocktail?</Link>
      </nav>
      <h1>Book list</h1>
      <div className="app-container">
        {filteredBooks.map((book) => {
          return (
            <Card
              key={book.title}
              book={book}
              updateFavoriteBooks={setFavoriteBooks}
              fetchNewCocktail={fetchNewCocktail}
            />
          );
        })}
      </div>
      <hr style={{ marginTop: '24px', marginBottom: '16px', color: 'grey' }} />
      <FavoritesList
        favoriteBooks={favoriteBooks}
        updateFavoriteBooks={setFavoriteBooks}
      />
      <hr style={{ marginTop: '24px', marginBottom: '16px', color: 'grey' }} />

      <CocktailPicker cocktail={cocktail} isLoading={isLoadingCocktail} />
    </>
  );
}

export default App;
