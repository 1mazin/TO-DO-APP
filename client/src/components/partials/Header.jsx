import React from 'react'
import { useState ,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
function Header() {

  const navigation=useNavigate();

  const [user, setUser] = useState(null)
  useEffect(()=>
  {
    const u=localStorage.getItem('user');
    setUser(u);
  },[])
  const handleLogout=()=>
  {
    localStorage.clear();
    navigation('/login')
  }
  return(
  <nav className="navbar navbar-expand-lg navbar-light navbar-custom ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> TO DO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">HOME
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">REGISTER</Link>
        </li>
        {
          user &&   <li className="nav-item">
          <a className="nav-link" href='#'  onClick={handleLogout}> LOGOUT</a>
        </li>
        
        }
       
      </ul>
      <form className="d-flex navbar-custom">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header
