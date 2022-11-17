import React, {useEffect} from 'react'
import './App.css';
import {  useLocation } from "wouter";



export default function Splash() {
        const [location, setLocation] = useLocation();
       

        useEffect(()=>{

                setTimeout(()=>{
                     setLocation("/Start")
                }, 2000)
           
             }, [])


  return (
    <div style={{width:"100%", height:"100vh", background:"linear-gradient(289deg, #F2DEBA 0%, #0E5E6F 61%, #0E5E6F 99%)"}}>
           
            <div className='container '>
           
                <div className='row d-flex justify-content-center align-items-center'>
                        <div style={{ color:"black", zIndex:"1", position:"absolute", top:"40%", height:"200px", paddingTop:"50px"}} id="glassCard" className='text-center col-10 col-md-4 card animate__animated animate__fadeInDown'>
                            <div className='card-body' style={{fontFamily: 'Quicksand'}}>
                                    <h3 className='card-title'>
                                            3.0 Revolution
                                    </h3>
                                    <p className='card-text'>By Algoritmos Catalán</p>
                            </div>

                        </div>
                </div>
            </div>
    </div>
  )
}
