import React from 'react'
import '../style/Form.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
        <main>
      <div className="form-container">
        <h1>Register</h1>
        <form action="">
            <label htmlFor="username">
            Username
            <input type="text" id="username" placeholder="Enter your username" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" id="email" placeholder="Enter your email" />
          </label>
          <label htmlFor="password">
            Password
            <input id="password" type="text" placeholder="Enter your password" />
          </label>

          <button>Register</button>
        </form>

        <p>Already have an account ? <Link to={'/login'} className="link">Login</Link></p>
      </div>
    </main>
  )
}

export default Register