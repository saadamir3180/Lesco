import Header from './components/Header'
import Footer from './components/Footer'
import './style/App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        <Home/>
        <Footer/>        
      </div>
    </>
  )
}

export default App
