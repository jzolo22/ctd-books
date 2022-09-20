import './App.css';
import { useState, useEffect } from 'react';
import { books } from './books';
import { Card } from './components/Card';
import { FavoritesList } from './components/FavoritesList';
import { CocktailPicker } from './components/CocktailPicker';
import { Link } from 'react-router-dom';
import { useFetchNewCocktail } from './services/fetchCocktail';

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredBooks(books);
    }
  }, [searchTerm]);

  const { cocktail, isLoadingCocktail, fetchNewCocktail } =
    useFetchNewCocktail();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    const updatedFilteredBooks = filteredBooks.filter((book) => {
      const lowerCaseBookTitle = book.title.toLowerCase();
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return lowerCaseBookTitle.includes(lowerCaseSearchTerm);
    });
    // set the new filtered books to be the actual filtered books
    setFilteredBooks(updatedFilteredBooks);
  };

  return (
    <>
      <nav>
        <Link to="/randomcocktail">Cocktail?</Link>
      </nav>
      <h1>Book list</h1>

      <label htmlFor="searchInput" />
      <input
        value={searchTerm}
        onChange={handleInputChange}
        id="searchInput"
        placeholder="Search here!"
      />

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
