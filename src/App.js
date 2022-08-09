import './App.css';
import { useEffect, useRef, useState } from 'react';
import { books } from './books';
import { Card } from './components/Card';
import { FavoritesList } from './components/FavoritesList';
import { CocktailPicker } from './components/CocktailPicker';

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [isLoadingCocktail, setIsLoadingCocktail] = useState(false);
  const [cocktail, setCocktail] = useState();

  const fetchNewCocktail = () => {
    setIsLoadingCocktail(true);
    try {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then((data) => {
          const randomCocktail = {
            imageUrl: data.drinks[0].strDrinkThumb,
            title: data.drinks[0].strDrink,
          };
          // set our state with a cocktail
          setCocktail(randomCocktail);
          setIsLoadingCocktail(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // const inputRef = useRef();

  useEffect(() => {
    // something that you want to have happen at some time
    // inputRef.current.focus();
  }, [favoriteBooks]); //in the dependency array --> variable (props or state or some other variable)

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

  // const handleChange = (event) => {
  //   setSearch(event.target.value);
  // };

  return (
    <>
      <h1>Book list</h1>
      {/* <input ref={inputRef} value={search} onChange={handleChange} /> */}
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
