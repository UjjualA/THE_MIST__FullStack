// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import '../../assets/css/Navfooter.css';

// const Footer = () => {
//   const footerStyle = {
//     backgroundColor: 'rgb(84,90,167)',
//     color: 'white',
//     padding: '30px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // position: 'fixed', 
//     zIndex: 1000,

//   };

//   const socialIconStyle = {
//     fontSize: '39px',
//     marginRight: '10px',
//     color: '#50afbf',
//   };

//   return (
//     <div className='fot'>

//     <footer style={footerStyle}>
//       <div> 
//         <span className='sp'>&copy; 2023 All rights reserved.</span>
//       </div>
//       <div>
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//           <FaFacebook style={socialIconStyle} />
//         </a>
//         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//           <FaTwitter style={socialIconStyle} />
//         </a>
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <FaInstagram style={socialIconStyle} />
//         </a>
//         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin style={socialIconStyle} />
//         </a>
//       </div>
//     </footer>
//     </div>
//   );
// };

// export default Footer;

import { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../assets/css/Navfooter.css';

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const footerStyle = {
    backgroundColor: 'rgb(84, 90, 167)',
    color: 'white',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1000,
  };

  const socialIconStyle = {
    fontSize: '39px',
    marginRight: '10px',
    color: '#50afbf',
  };

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - window.innerHeight;

      setIsFooterVisible(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer style={{ ...footerStyle, marginTop: isFooterVisible ? '0' : '-100px' }}>
      <div>
        <span className='sp'>&copy; 2023 All rights reserved.</span>
      </div>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={socialIconStyle} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={socialIconStyle} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={socialIconStyle} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={socialIconStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


