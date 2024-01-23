import React from 'react'
import Ratings from '../Components/Ratings'

function BookPage() {
    return (
        <div>
            <h3>Book Name</h3>
            <p>Author: </p>
            <p>Added: </p>
            <p>Last Updated: </p>
            <div>
                <label>Read </label>
                <input type="checkbox" name="bookRead" id="BookRead" />
            </div>
            <div>
                <label>My Rating</label>
                <Ratings />
            </div>
            <div>
                <input type="button" value="Delete" />
                <input type="button" value="Edit" />
            </div>
            <p>Back to list</p>
        </div>
    )
}

export default BookPage