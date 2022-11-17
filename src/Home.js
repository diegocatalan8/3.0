import React from 'react'
import ListCards from './components/ListCards'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <div style={{background:"linear-gradient(346deg, rgba(255,239,214,1) 0%, rgba(14,94,111,1) 57%)", height:"100%"}}>
        <NavBar/>
        <ListCards/>
    </div>
  )
}
