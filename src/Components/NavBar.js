import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <p> <Link to="/">My Reading List App</Link></p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="book">Books</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="signIn">Sign In</Link></li>
                <li><Link to="signUp">Sign Up</Link></li>
                <li>Sign Out</li>
                <li>Avatar</li>
            </ul>
        </div>
    )
}

export default NavBar