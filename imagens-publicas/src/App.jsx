import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import madara from "./assets/madara.webp";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Avançado em React</h1>
        <div>
          <img src="/akatsuki-1.jpg" alt="Akatsuki de Naruto" />
        </div>
        <div>
          <img src={madara} alt="Madara de Naruto" />
        </div>
      </div>
    </>
  )
}

export default App
