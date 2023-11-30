import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/Dashboard' exact element={<Dashboard/>} />
            <Route path='/GetStarted' exact element={<GetStarted/>} />
            <Route path='/user/:email' exact element={<User/>} />
            <Route path='*' exact element={<NotFound/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
