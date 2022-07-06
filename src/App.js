import './App.css';
import {useState} from 'react'
import {books} from './books'
import {Card} from './components/Card'
import { FavoritesList} from './components/FavoritesList'

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([])

  // setFavoriteBooks((prevFavoriteBooks) => [...preFavoriteBooks, newBook])
console.log({favoriteBooks})

  return (
    <>
      <h1>Book list</h1>
    <div className='app-container'>
      {books.map((book) => {
        return (
          <Card 
            key={book.title} 
            book={book}
            handleAddFavorite={setFavoriteBooks}
          />)
      })}
    </div>
      <FavoritesList favoriteBooks={favoriteBooks}/>
    
    </>
  );
}

export default App;
