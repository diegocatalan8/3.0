import React from 'react'
import fondo1 from '../src/img/fondo1.jpg'
import NavBar from './components/NavBar'
import golemGheos from '../src/img/golemGheos1.png'
import bot from '../src/img/bot-blue.png'
import {  useLocation } from "wouter";

export default function Landing() {

    const [location, setLocation] = useLocation();

  return (
    <div   style={{width:"100%", height:"100%", backgroundImage:`url(${fondo1})`, backgroundSize:"cover" }}>
            <NavBar/>
            <div   className='container' >
                    <div style={{paddingBottom:"100px", paddingTop:"90px" }}  className='row  mt-5  d-flex justify-content-between aling-items-center'>

                                <div style={{margin:"0 auto", height:"300px" }} id='columna' className='animate__animated animate__bounceInDown col-10 col-md-5  d-flex justify-content-center aling-items-center flex-column'>
                                        
                                        <h2 className='text-center '>Web3 es el futuro.</h2>
                                        <h2 className='text-center'>Bienvenido a 3.0 Revolution ✨</h2>
                                        <button onClick={()=>{setLocation("/Home")}} style={{margin:"0 auto", marginTop:"20px"}} className='btn btn-outline-dark  col-md-3'>Explorar &gt;</button>
                                       
                                </div>


                                <div style={{height:"100%"}}   className='animate__animated animate__bounceInUp col-10 col-md-5'>

                                    <div style={{height:"100%"}} >
                                        <img style={{position:"relative", zIndex:"2", height:"80%", width:"50%",  borderRadius:"0px 25px 0px 25px"}} src={golemGheos}/>
                                    </div>

                                    <div  style={{zIndex:"1", position:"relative", top:"-20px", left:"50px", padding:"15px", paddingTop:"60px", paddingBottom:"30px"}} id='columna2' className='col-md-8'>
                                        <h5 className='text-center text-dark' >Conoce la historia del Golem Gheos</h5>
                                       <button style={{color:"black"}} className='btn btn-link'>Ver Historia</button>
                                    </div>

                                    <button  style={{position:"relative",  zIndex:"3", top:"-40px", left:"110px"}} className='btn btn-danger'>Place a bid   &gt;</button>

                                </div>
                    </div>

                    <div style={{paddingBottom:"100px"}} className='row justify-content-between aling-items-center'>
                          
                          <div style={{margin:"0 auto",}}  id='columna' className='animate__animated animate__backInDown col-10 col-md-6 d-flex flex-column justify-content-center align-items-center p-5'>
                                  <h2 className=' text-center'>¿Qué es 3.0 Revolution?</h2>
                                  <p className='text-justify mt-3'>3.0 Revolution es una página que centraliza los proyectos NFTs más prometedores en la tecnologia blockchain y web3 que podrán ser encontrados por medio de un motor de búsqueda, brindando al usuario todo tipo de información acerca del proyecto y una opinión de porque seria buena inversion a largo plazo.</p>
                          </div>

                          <div style={{margin:"0 auto", marginTop:"15px",  }}  className='animate__animated animate__backInDown col-10 col-md-4 d-flex flex-column justify-content-center align-items-center p-5'>
                                <img style={{margin:"0 auto",height:"100%", position:"relative", borderRadius:"15px", opacity:"0.85" }}  width={300} src={bot} alt=""/>
                          </div>

                         
                    
                    </div>
            
            </div>
            
    </div>
  )
}
