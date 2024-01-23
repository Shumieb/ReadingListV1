import React from 'react'

function SignInForm() {
    return (
        <form>
            <p>Sign In Form</p>
            <div>
                <label>UserName: </label>
                <input type="text" name="userName" id="userName" placeholder='UserName' />
                <p>userName error</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" id="password" placeholder='password' />
                <p>password error</p>
            </div>
            <input type="button" value="Sign Up" />
        </form>
    )
}

export default SignInForm