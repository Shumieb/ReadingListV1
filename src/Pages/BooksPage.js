import React from 'react'
import BooksList from '../Components/BooksList'

function BooksPage() {
    return (
        <div>
            <div>
                <input type="button" value="Add New Book" />
            </div>
            <div>
                <input type="text" name="searchBooks" id="searchBooks" placeholder='Search' />
            </div>
            <BooksList />
        </div>
    )
}

export default BooksPage