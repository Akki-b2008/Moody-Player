import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FacialExpression from './components/FacialExpression'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FacialExpression />
    </>
  )
}

export default App
