import React from 'react'
import golem from './img/golem.jpeg'
import bot from './img/bot-blue.png'
import shark from './img/shark.png'
import { useLocation } from "wouter";



export default function Start() {
       

        const [location, setLocation] = useLocation();


  return (
    <div  style={{background:"linear-gradient(289deg, #F2DEBA 0%, #0E5E6F 61%, #0E5E6F 99%)", height:"100vh"}}>
            <div  className='container'>
                <div className='animate__animated animate__zoomIn' style={{display:"flex", flex:"wrap", justifyContent:"center", alignItems:"center", height:"400px"}}>
                    <div    style={{ height:"150px", width:"150px", position:"relative", transform:"rotate(-30deg)", zIndex:"10", left:"30px", top:"30px"}} >
                        <img  src={golem}  style={{height:"100%", width:"100%"}}/>
                    </div> 
                    <div   style={{ height:"150px", width:"150px", position:"relative", zIndex:"9"}} >
                        <img src={bot}  style={{height:"100%", width:"100%"}}/>
                    </div>  
                    <div   style={{ height:"150px", width:"150px", position:"relative", transform:"rotate(30deg)", zIndex:"8", right:"30px", top:"30px"}} >
                    <img src={shark}  style={{height:"100%", width:"100%"}}/>
                     </div>          
                </div>
                <div  className='row p-5'>
                        <div className='animate__animated animate__backInLeft col-12 text-center' style={{ paddingBottom:"70px"}}>
                                <h1 style={{fontFamily: 'Quicksand', color:"#000"}}>3.0 Revolution</h1>
                        </div>
                        <div className='animate__animated animate__backInDown col-12  text-center' style={{height:"100%"}}>
                              
                                <button onClick={()=>{
                                        setLocation("/Home")
                                }} id='btn-start'  className='btn btn-outline-dark' style={{width:"140px", height:"60px"}}>
                                        Start
                                </button>
                        </div>
                
                </div>

               
            </div>
    </div>
  )
}
