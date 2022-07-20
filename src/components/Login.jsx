import React from 'react'
import { useState } from 'react'
import "./Login.css";
import axios from "axios"


const Login = () => {
    const [data,setData]=useState({
        email:"",
        password:""
      })
      const changeHandler=(e)=>{
          setData({...data,[e.target.name]:e.target.value})
      }
     
      const clickHandler=()=>{
          console.log(data)
          axios.post("http://localhost:5050/auth/login",data).then(response=>{
              setData(response.data)
          }).catch(err=>{
              console.log(err)
          })
      }
  
    return (
        <div className='container'>
                 <center> <h1>Login page</h1></center> <br />
             
                    <center>    
            <div>
                <label>Email :</label>
                <input type='email' name="email" onChange={changeHandler} />
            </div><br />
            <div>
                <label>password :</label>
                <input type='password' name="password" onChange={changeHandler} />
            </div><br />

            <button onClick={clickHandler}>sumbit</button>
           
            </center>
        </div>
    )
}

export default Login;