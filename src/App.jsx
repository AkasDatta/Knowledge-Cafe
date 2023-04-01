import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Blog/Blog'

function App() {

  return (
    <div>
      <div className="App">
        <Header></Header>
        <Card></Card>
        <Blog></Blog>
        <ToastContainer></ToastContainer>
      </div>
    </div>

  
  )
}

export default App
