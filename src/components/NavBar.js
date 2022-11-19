import React from 'react'
import "../App.css"

export default function NavBar() {
  return (
    <nav style={{position:"sticky", top:"0", zIndex:"10"}} id='nav'  className="navbar bg-light">
        <div  style={{padding:"15px"}} class="container-fluid">
            <h2 style={{fontFamily: 'Quicksand', color:"#000"}}>3.0 Revolution</h2>
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button id='buscar' class="btn btn-primary" type="submit">Search</button>
            </form>
            <button className='btn btn-danger disabled'>Conect Wallet</button>
        </div>
    </nav>
  )
}
