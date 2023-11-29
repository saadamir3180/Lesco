import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/AboutUs' exact element={<AboutUs/>} />
            <Route path='/Login' exact element={<Login/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
