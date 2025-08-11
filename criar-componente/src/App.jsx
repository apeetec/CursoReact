import { useState } from 'react'
// Components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MeuComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'
// Styles
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events />
      <Challenge/>
    </>
  )
}

export default App
