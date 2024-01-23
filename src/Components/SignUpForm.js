import React from 'react'

function SignUpForm() {
    return (
        <form>
            <p>Sign Up Form</p>
            <div>
                <label>Email: </label>
                <input type="email" name="email" id="email" placeholder='Email' />
                <p>email error</p>
            </div>
            <div>
                <label>UserName: </label>
                <input type="text" name="userName" id="userName" placeholder='UserName' />
                <p>user name error</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" id="password" placeholder='password' />
                <p>password error</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='confirm password' />
                <p>confirm password error</p>
            </div>
            <input type="button" value="Sign In" />
        </form>
    )
}

export default SignUpForm