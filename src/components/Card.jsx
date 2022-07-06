import React from 'react'
import '../App.css';


export const Card = (props) => {

    // in our props:
        // book
        // handleAddFavorite (same as setFavoriteBooks)


    const handleAddToFavorites = (book) => {
        // same as setFavoriteBooks from App.js
        props.handleAddFavorite((prevFavoriteBooks) => [...prevFavoriteBooks, book])
        // functional setState
    }

    return (
        <div className='card'>
            <img className='image' alt={`book cover for ${props.book.title}`} src={props.book.imageLink}/>
            <p>{props.book.title}</p>
            <button 
                onClick={() => handleAddToFavorites(props.book)}
            >
                    Add to favorites
            </button>
        </div>
    )
}