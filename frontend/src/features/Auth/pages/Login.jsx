import React from "react";
import "../style/Form.scss";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Login = () => {

     const {loading,handleLogin} = useAuth();
        const navigate = useNavigate();

        const [email,setemail] = useState('');
        const [password,setpassword] = useState('');
     
     
       async function handleSubmit(e){
           e.preventDefault()
          
          await handleLogin({email,password})
          navigate('/')

        }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

                    <InputField value={email} onChange={(e)=>{setemail(e.target.value)}} label={"Email"} placeholder={"Enter your email"} type={"email"}></InputField>
          <InputField value={password} onChange={(e)=>{setpassword(e.target.value)}} label={"Password"} placeholder={"Enter your password"} type={"text"}></InputField>
          <button type="submit">Login</button>
        </form>

        <p>Create an account ? <Link to={'/register'} className="link">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
