import './App.css';
import {useState} from 'react'
import {books} from './books'
import {Card} from './components/Card'
import { FavoritesList} from './components/FavoritesList'

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([])

  console.log({favoriteBooks})

  // setFavoriteBooks((prevFavoriteBooks) => [...preFavoriteBooks, newBook])

  // setFavoriteBooks((currentFavoriteBooks) => )

  return (
    <>
      <h1>Book list</h1>
      <div className='app-container'>
        {books.map((book) => {
          return (
            <Card 
              key={book.title} 
              book={book}
              updateFavoriteBooks={setFavoriteBooks}
            />)
        })}
      </div>
      <FavoritesList favoriteBooks={favoriteBooks} updateFavoriteBooks={setFavoriteBooks}/>
    </>
  );
}

export default App;
