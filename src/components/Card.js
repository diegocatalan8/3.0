import React from 'react'
import "../App.css"

export default function Card({datos}) {

    const {img, title, description} = datos;
  return (
    <div id="card-nft" className='card text-center animate__animated animate__pulse'>
        <div style={{borderRadius:"15px"}} className='overflow'>
            <img className='card-img-top'  src={img}/>
        </div>
        <div className='card-body '>
            <h4 className='card-title  text-center'>{title}</h4>
            <p className='card-text  text-center'>{description}</p>
        </div>
        <a href='#' target="_blank" className='btn btn-outline-primary border-0'>Ver más</a>

    </div>
  )
}


//style={{marginRight:"15px", marginTop:"30px", marginBottom:"62px"}} id='card-nft' className='card col-10 col-md-3 p-3'