import React, { useState,useEffect} from 'react'
//import {useForm} from "react-hook-form"
import { register } from '../services/api'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"
import { useNavigate } from 'react-router-dom'


function Register() {
const [form , setForm]=useState({
  name:"",
  username:"",
  email:"",
  password:""
})


const navigation=useNavigate();

useEffect(() => {
  const user=localStorage.getItem('user');
  if(user)
  {
    return navigation('/')
  }

}, [])


const [errors, setErrors] = useState(null);
 const  handleInputChange= (e)=>{
  setForm({...form,[e.target.name]:e.target.value})

}
const handleSubmit=async ()=>{
  const result=await register(form)
  if(result.status===200)
  {
    console.log(result.data.status)
      if(result.data.status === 201)
      {
        
        setErrors(result.data.data)
        toast(result.data.messagge)
        return;
      }
      if(result.data.status === 200)
      {
        localStorage.setItem('user',JSON.stringify(result.data.data));
        navigation("/");
        return;
      }
      if(result.data.status === 202)
      {
        toast(result.data.message)
        return;
      }
      
  }
  else{
    toast("Something went wrong")
  }

}

  return (
    <div className='container ' >
    <ToastContainer/>
      <div className='row justify-content-center mt-4'>
        <div className='col-lg-5 card  mt-4 todo-custom' >
            
            <div className="card-body">
            <h4 className="card-title">Register</h4>
            <div className="form-group">
              <label className="col-form-label mt-4">Name</label>
              <input type="text" name="name" onChange={handleInputChange} className="form-control"   placeholder="Enter Name" />
              {errors?.name && (
                <small id="emailHelp" className='form-text text-danger'>
                  {errors.name.msg}
                </small>
              )}            
            </div>
            <div className="form-group">
              <label  className="col-form-label mt-4">Username</label>
              <input type="text" name="username" onChange={handleInputChange}  className="form-control"  placeholder="Enter Username" />
              {errors?.username && (
                <small id="emailHelp" className='form-text text-danger'>
                  {errors.username.msg}
                </small>
              )}  
            </div>
            <div className="form-group">
              <label  className="form-label mt-4">Email</label>
              <input type="text" name="email" onChange={handleInputChange}  className="form-control" placeholder="Enter Your Email" />
              {errors?.email && (
                <small id="emailHelp" className='form-text text-danger'>
                  {errors.email.msg}
                </small>
              )} 
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Password</label>
              <input type="password" name="password" onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your password" />
              {errors?.password && (
                <small id="emailHelp" className='form-text text-danger'>
                  {errors.password.msg}
                </small>
              )} 
            </div>
            <br></br>
            <button type="button" onClick={handleSubmit} className="btn btn-secondary">Register</button>

          


        </div>
        </div>
        </div>
        </div>
  )
}

export default Register
