import {useState} from 'react'


const ManageData = () => {
    let someData = 10;
    console.log(someData);
    const [number,setNumber] = useState(15);
  return (
   <div>
    {/* Exemplo sem useState */}
    <p>Valor: {someData}</p>
    <div>
        <button onClick={() => (someData = 15)}>Mudar varíavel</button>
    </div>
    <div>
        {/* Exemplo com useState */}
       <p>Valor: {number}</p> 
       <button onClick={() => setNumber(25)}>Mudar valor</button>
    </div>
   </div>
    
  )
}
export default ManageData;