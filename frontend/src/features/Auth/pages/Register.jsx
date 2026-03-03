import React, { useState } from 'react'
import '../style/Form.scss'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Register = () => {
   const [username,setusername] = useState('');
   const [email,setemail] = useState('');
   const [password,setpassword] = useState('');
     const {loading,handleRegister} = useAuth();
           const navigate = useNavigate();
  
      const handleSubmit = async (e)=>{
          e.preventDefault();
          
          await handleRegister({username,email,password})
          navigate('/')

        }

  return (
        <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>  


             <InputField value={username} onChange={(e)=>{setusername(e.target.value)}} label={"Username"} placeholder={"Enter you username"} type={"text"}></InputField>
            <InputField value={email} onChange={(e)=>{setemail(e.target.value)}} label={"Email"} placeholder={"Enter your email"} type={"email"}></InputField>
          <InputField value={password} onChange={(e)=>{setpassword(e.target.value)}} label={"Password"} placeholder={"Enter your password"} type={"text"}></InputField>


          <button>Register</button>
        </form>

        <p>Already have an account ? <Link to={'/login'} className="link">Login</Link></p>
      </div>
    </main>
  )
}

export default Register