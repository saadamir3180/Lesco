import { Link } from 'react-router-dom'
import '../style/Header.css'
import Lesco from './Lesco'
const Header = () => {
  return (
    <header className='header'>
        <Lesco/>
        <nav className='headerNavLargeScreen'>
            <ul className='navUl'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='AboutUs'>About</Link></li>
                <li><button className='navButton'><Link to={'/Login'}>Get Started</Link></button></li>
            </ul>
        </nav>
        <nav className='headerNavSmallScreen'>
        <ul className='navUl'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='AboutUs'>About</Link></li>
                <li><button className='navButton'><Link to={'/Login'}>Get Started</Link></button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header