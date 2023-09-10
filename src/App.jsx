
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
// import Home from './pages/Home/Home'

function App() {
  

  return (
    <>
  <Header/>
  <Outlet/>
  {/* <Home/> */}
  <Footer/>

 
    </>
  )
}

export default App
