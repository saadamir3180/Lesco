import '../style/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
        <footer className='footer'>
      <section className='footerTop'>
        <div className='footerDet'>
          <a to={'/'} className='aLink'><h1 className='brandFooter'>Lesco</h1></a>
          <ul className='footerLiItems'>
          <a to="mailto:saadamir318@gmail.com?" className='aLink'>
            <li><i className="fa-brands fa-google"></i>&nbsp;&nbsp; Google</li>
          </a>
          <a to={'https://www.facebook.com/'} className='aLink'>
            <li><i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp; FaceBook</li>
          </a>
          <a to={'https://www.instagram.com/saadamir3180'} className='aLink'>
            <li><i className="fa-brands fa-instagram"></i>&nbsp;&nbsp; Instagram</li>
          </a>
          <a to={'https://api.whatsapp.com/send?phone=+923241711473'} className='aLink'>
            <li><i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp; Whatsapp</li>
          </a>
          </ul>
          </div>
        <div className='footerDet'>
          <h3>Help & Information</h3>
          <ul className='footerLiItems'>
            <li>Track Orders</li>
            <li>Delivery & Return</li>
            <li>Help</li>
          </ul>
        </div>
        <div className='footerDet'>
          <h3>More From Lesco</h3>
          <ul className='footerLiItems'>
            <li>Mens Collection</li>
            <li>Womens Collection</li>
            <li>Other Accessories</li>
          </ul>
        </div>
      </section>


      <section className='footerBottom'>
        <p className='copyrightText'>Copyright &copy; 2023 Lesco. All rights resevred</p>
        <span className='rulesLinks'>
          <a to={'/TermsAndConditions'} className='aLink'>Terms & Conditions</a>|
          <a to={'/PrivacyAndPolicy'} className='aLink'>Privacy & Policy</a>
        </span>
      </section>
    </footer>
  )
}

export default Footer