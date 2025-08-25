import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from './components/ManageData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <h1>
        Avançando em React
      </h1>
      <p>
        Construindo Hooks
      </p>
      <ManageData/>
     </div>
    </>
  )
}

export default App
