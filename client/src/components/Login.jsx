import React,{useEffect,useState} from 'react'
import {login } from "../services/api.js"
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

function Login({user,SetUser}) {
  const navigation=useNavigate();
  const [form, setForm] = useState({
    username:"",
    password:"",
  });

  useEffect(() => {
    const user=localStorage.getItem('user');
    if(user)
    {
      return navigation('/')
    }
  
  }, [])
  
  const [errors, setErrors] = useState(null);
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }
  const handleSubmit = async ()=>{
    const result=await login(form);
    console.log("form",result);
    setErrors(null);
  
    if(result.status===200)
    {
      //console.log(result);
      console.log(result.data.status)
      if(result.data.status===200)
      {
        localStorage.setItem("user",JSON.stringify(result.data.data));
        navigation("/");
        return;
      }
      if(result.data.status===201)
      {
        toast(result.data.message);
        setErrors(result.data.data);
        return;
      }
      if(result.data.status===202)
      {
        console.log("sdfs");
        toast(result.data.message);
        return;
      }
    }
  };


  return (

    <div className='container ' >
    <ToastContainer/>
      <div className='row justify-content-center mt-4 '>
        <div className='col-lg-5 card  mt-4 todo-custom' >
            
            <div className="card-body ">
            <h4 className="card-title">Login</h4>
        
            <div className="form-group">
              <label  className="col-form-label mt-4">Username</label>
              <input type="text" onChange={handleChange} name="username"  className="form-control"  placeholder="Enter Username or Email" />
              {errors?.username && (
                <small id="emailHelp" className='form-text text-danger'>
                  {errors.username.msg}
                </small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your password" />
             
            </div>
            <br></br>
            <button type="button" onClick={handleSubmit} className="btn btn-secondary ">Login</button>

          


        </div>
      </div>
    </div>
      
    </div>
  )
}


export default Login
