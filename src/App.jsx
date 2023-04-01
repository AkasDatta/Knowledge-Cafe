import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="App">
        <Header></Header>
        <Card></Card>
        <ToastContainer></ToastContainer>
        <Blog></Blog>
      </div>
    </div>

  
  )
}

export default App
