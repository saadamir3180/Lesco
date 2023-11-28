import '../style/Header.css'
import Lesco from './Lesco'
const Header = () => {
  return (
    <header className='header'>
        <Lesco/>
        <nav className='headerNav'>
            <ul className='navUl'>
                <li>Home</li>
                <li>About</li>
            </ul>
            <button className='navButton'>Get Started</button>
        </nav>
    </header>
  )
}

export default Header