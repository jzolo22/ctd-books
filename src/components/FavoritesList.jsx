import React from 'react'
import {Card} from './Card'

export const FavoritesList = (props) => {
    // props.favoriteBooks --> array of books to display
console.log(props)
    return (
        <div>
            <h1>Favorite Books</h1>
            <ul>
            {props.favoriteBooks.map((book) => {
                return (
                    <li>
                        <Card 
                            key={book.title}
                            book={book}
                        />
                    </li>)
                })}
            </ul>
        </div>
    )

}