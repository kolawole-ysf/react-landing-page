import {FaPhone ,FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
const Footer = ({imageSrc}) => {
  return (
    <div className="footer">
        <img src={imageSrc} alt="" />
        <div className="footer-content">
            <div>
                <span className="footer-logo">TRAVEL</span>
            </div>
            <div className='contact'>
                <span className="title">Contact</span>
                <div className='phone'><FaPhone style={{color:'black', fontSize: 20, cursor: 'pointer'}} /><span>+2348065252609</span></div>
                <div className='mail'><FaEnvelope style={{color:'black', fontSize: 20, cursor: 'pointer'}}/><span>eshkaysmat@hotmail.com</span></div>
            </div>
            <div className='contact'>
            <span className="title">Quick links</span>
            <span>All destination</span>
            <span>Recent Offer</span>
            <span>Blog</span>
            </div>
            <div>
            <span className="title">Get In Touch</span>
            <div className='s-icons'>
                  <FaWhatsapp style={{color:'green', fontSize: 24, cursor: 'pointer'}} />
                  <FaFacebook style={{color:'blue', fontSize: 24, cursor: 'pointer'}} />
                  <FaInstagram style={{color:'red', fontSize: 24, cursor: 'pointer'}} />
                  <FaYoutube style={{color:'red', fontSize: 24, cursor: 'pointer'}} />
            </div>
            </div>
        </div>
        <div className='copyright'>
          <span>All right reserved &copy; 2023. </span>
        </div>
      
    </div>
  )
}

export default Footer
