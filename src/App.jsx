import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './reset.css';

import Homepage from './components/homepage.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Homepage />
    </>
  )
}

export default App
