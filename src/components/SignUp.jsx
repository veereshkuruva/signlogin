import React from 'react'
import { useState } from 'react';
import "./SignUp.css"
import axios from "axios"

const signUp = () => {

    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const clickHandler=()=>{
        // console.log(data)
        axios.post("http://localhost:5050/auth/signup",data).then(response=>{
            setData(response.data)
        }).catch(err=>{
            console.log(err)
        })
    }



    return (
      
            <div className='main'>
                <div>
                    <center>
                    <h1 >sign form</h1>
                        <div style={{marginTop:"20px"}}>
                            <label>Name :</label>
                            <input type='text' name="name" onChange={changeHandler} />
                        </div><br />

                        <div>
                            <label>Email :</label>
                            <input type='email'  name="email"  onChange={changeHandler} />
                        </div><br />
                        <div>
                            <label>password :</label>
                            <input type='password' name="password"    onChange={changeHandler} />
                        </div>

                         <button onClick={clickHandler}>sumbit</button>

                    </center>
                </div>
            </div>
           
            )
}

            export default signUp;