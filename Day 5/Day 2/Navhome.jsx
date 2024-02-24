
import { useEffect } from 'react';
import '../../assets/css/Navhome.css';

const Navhome = () => {
  useEffect(() => {
    const image = new Image();
    image.src = '/src/assets/videos/comp_1.gif';
    image.onload = () => {
      console.log('GIF is fully loaded');
    };
  }, []); 

  return (
    <div style={{ position: 'relative' }}>
      <img src="/src/assets/videos/foxx.gif" alt="Smooth GIF" style={{ width: '100%', height: '100vh' }} />
      <div style={{ position: 'absolute', top: '50%', left: '59%', transform: 'translate(-50%, 31%)', color: 'white', textAlign: 'center' }}>
        <p style={{ fontSize: '130px', fontWeight: 'bold' }}><br></br></p>
      </div>
    </div>
  );
};

export default Navhome;
