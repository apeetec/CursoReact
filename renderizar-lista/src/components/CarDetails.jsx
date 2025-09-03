import React from 'react'

const CarDetails = ({brand,km,color}) => {
  return (
   <div>
    <h2>
        Detalhes do carros
    </h2>
    <ul>
        <li>Marca:{brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
    </ul>
   </div>
  )
}

export default CarDetails