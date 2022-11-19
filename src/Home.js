import React from 'react'
import ListCards from './components/ListCards'
import NavBar from './components/NavBar'
import fondo2 from "../src/img/fondo2.jpg"

export default function Home() {
  return (
    <div style={{background:"linear-gradient(346deg, rgba(255,239,214,1) 0%, rgba(14,94,111,1) 57%)", height:"100vh",overflow:"auto", backgroundImage:`url(${fondo2})`, backgroundSize:"cover"}}>
        <NavBar/>
        <ListCards/>
    </div>
  )
}
