import React from 'react'
import Card from './Card'
import stardust from "../img/stardust.png"
import golem from '../img/golem.jpeg'
import bot from '../img/bot-blue.png'
import shark from '../img/shark.png'


export default function ListCards() {

    const datos =[
        {
            id:1,
            img:stardust,
            title: "Creadore Universe",
            description:"Creadore Universe es la colección mas exclusiva de toda nuestra comunidad y tu llave de acceso a muchas cosas, nadie sabe que sigue, asi que Hold!"
        },
        {
            id:2,
            img:golem,
            title: "Rude Golems",
            description:"Rude Golems está trayendo el mejor arte en 3D e innovación en la tecnologia blockchain a Solana. Giblatön es su planeta..."
        },
        {
            id:3,
            img:bot,
            title: "Rebellion Bots",
            description:"¡Estamos brindando apoyo para construir muchas utilidades innovadoras y divertidas para todo el ecosistema de Creadore Studios!"
        },
        {
            id:4,
            img:shark,
            title: "Rogue Sharks",
            description:"El OG de las colecciones de Solana, Rogue Sharks es una coleccion para una comunidad de Deporte + Fitness + NFTs."
        }
        

    ]
  return (
    <div  className='container d-flex justify-content-center align-items-center h-100'>
        <div   className='row'>
                {
                datos.map((item)=>(
                    <div style={{margin:"0 auto"}} key={item.id} className="col-10 col-md-4 mt-5 mb-4">
                        <Card   datos={item}/>
                    </div>
                )
                )
            }
        
        </div>
        
    </div>
  )
}
