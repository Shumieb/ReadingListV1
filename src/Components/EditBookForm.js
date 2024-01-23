import React from 'react'
import Ratings from './Ratings'

function EditBookForm() {
    return (
        <div>
            <form>
                <p>Edit Book</p>
                <div>
                    <label>Title </label>
                    <input type="text" name="bookTitle" id="bookTitle" placeholder='Book Title' />
                    <p>book title error</p>
                </div>
                <div>
                    <label>Author </label>
                    <input type="text" name="author" id="author" placeholder='Author' />
                    <p>author error</p>
                </div>
                <div>
                    <label>Read </label>
                    <input type="checkbox" name="bookRead" id="BookRead" />
                </div>
                <div>
                    <label>My Rating</label>
                    <Ratings />
                </div>
                <input type="button" value="Edit Book" />
            </form>
        </div>
    )
}

export default EditBookForm