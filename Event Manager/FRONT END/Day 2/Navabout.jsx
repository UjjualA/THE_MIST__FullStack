/* eslint-disable react/no-unescaped-entities */
import '../../assets/css/Navabout.css'; 
import logo from '../../assets/videos/foxg.gif';

const Navabout = () => {
  return (
    <div>
      <div>
    <div className="card-container">
      <div className="card-image">
        <img
          src={logo} 
          alt="Card Image"
          />
      </div>
      <div className="card-content">
        <p>At Purple Fox, booking events is not just a transaction, 
            its an opportunity to turn dreams into memories. Whether youre planning a corporate gathering, 
            a wedding extravaganza, or a milestone celebration, 
            our platform offers a seamless and user-friendly experience. 
            Explore a diverse range of event options, from elegant weddings to corporate conferences, and choose from a curated selection of venues, 
            themes, and services.</p>
      </div>
    </div>
      <p className='quote'>"your premier destination for event management<br></br> excellence. Picture a world where every<br></br>celebration is crafted with precision, creativity,<br></br>and a touch of the extraordinary. Turning<br></br>Moments into Memories, Purple Fox Company,<br></br>Where Every Event is Crafted with Elegance and<br></br>Precision."<br></br><span className='kk'>– that's what Purple Fox is all about.</span></p>
    </div>
  </div>
  );
};

export default Navabout;
