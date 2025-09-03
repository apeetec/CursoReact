import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Renderizar lista */}
      <ListRender/>
    {/* Renderização Condicional */}
    <ConditionalRender/>
    {/* Props */}
    <ShowUserName name="Gabriel"/>
    {/* Destruction */}
    <CarDetails brand="Chevrolet" km={1000} color="Azul"/>
    </>
  )
}

export default App
