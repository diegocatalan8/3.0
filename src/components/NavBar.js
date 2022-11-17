import React from 'react'
import "../App.css"

export default function NavBar() {
  return (
    <nav id='nav'  className="navbar bg-light">
        <div  style={{padding:"15px"}} class="container-fluid">
            <h4 style={{fontFamily: 'Quicksand', color:"#000"}}>3.0 Revolution</h4>
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button id='buscar' class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
  )
}
