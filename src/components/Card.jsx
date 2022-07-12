import React from 'react'
import '../App.css';


export const Card = (props) => {

    // in our props:
        // book
        // updateFavoriteBooks (same as setFavoriteBooks)
        // sometimes! "favorite"


        // if (props.favorite) {
            // show some specific button
        // }

    const handleAddToFavorites = (book) => {
        // same as setFavoriteBooks from App.js
        props.updateFavoriteBooks((prevFavoriteBooks) => [...prevFavoriteBooks, book])
        // functional setState
    }

    const handleRemoveFromFavorites = (book) => {
        console.log(props.updateFavoriteBooks)
        // remove the book from our existing favorites array and update favoriteBooks state 
        props.updateFavoriteBooks((prevFavoriteBooks) => prevFavoriteBooks.filter((favoriteBook) => favoriteBook.title !== book.title))
    }

    return (
        <div className='card'>
            <img className='image' alt={`book cover for ${props.book.title}`} src={props.book.imageLink}/>
            <p>{props.book.title}</p>
            {props.favorite ? 
                <button
                    onClick={() => handleRemoveFromFavorites(props.book)}
                >
                    Remove from favorites
                </button> 
                : 
                <button 
                    onClick={() => handleAddToFavorites(props.book)}
                >
                    Add to favorites
                </button>
            }
            
            
        </div>
    )
}