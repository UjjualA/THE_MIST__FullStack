/* eslint-disable react/prop-types */
// import { useState } from 'react';
// import '../../assets/css/Register.css';
// import { useNavigate } from 'react-router-dom';

// const Popup = ({ message, onClose }) => (
//   <div className="popup" style={{ backgroundColor: 'green', color: 'white' }}>
//     <div className="popup-content">
//       <p>{message}</p>
//       <button onClick={onClose}>Close</button>
//     </div>
//   </div>
// );

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [phonenumber, setPhonenumber] = useState('');
//   const [errorMessages, setErrorMessages] = useState({
//     username: '',
//     password: '',
//     email: '',
//     phonenumber: '',
//   });
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const errors = {};

//     if (!username) {
//       errors.username = 'Username is required';
//     }

//     if (!password) {
//       errors.password = 'Password is required';
//     }

//     if (!email) {
//       errors.email = 'Email is required';
//     }

//     if (!phonenumber) {
//       errors.phonenumber = 'Phone number is required';
//     }

//     if (Object.keys(errors).length > 0) {
//       setErrorMessages(errors);
//       setSuccessMessage('');
//       return;
//     }

//     // Perform registration logic if all fields are filled

//     setSuccessMessage('You Have Successfully Registered, Now You Can Login!');
//     setUsername('');
//     setPassword('');
//     setEmail('');
//     setPhonenumber('');
//     setErrorMessages({});
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const closePopup = () => {
//     setSuccessMessage('');
//   };

//   return (
//     <div className="reg-container">
//       <img src="/src/assets/images/logo.png" alt="Logo" className="reg-logon" />
//       <fieldset className="reg-fieldset-container">
//         <form onSubmit={handleRegister}>
//           <label>
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="email"
//             />
//             {errorMessages.email && <div className="reg-error">{errorMessages.email}</div>}
//           </label>
//           <label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="username"
//             />
//             {errorMessages.username && <div className="reg-error">{errorMessages.username}</div>}
//           </label>
//           <label>
//             <input
//               type="text"
//               value={phonenumber}
//               onChange={(e) => setPhonenumber(e.target.value)}
//               placeholder="phone number"
//             />
//             {errorMessages.phonenumber && (
//               <div className="reg-error">{errorMessages.phonenumber}</div>
//             )}
//           </label>
//           <label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="password"
//             />
//             {errorMessages.password && <div className="reg-error">{errorMessages.password}</div>}
//           </label>
//           {successMessage && <Popup message={successMessage} onClose={closePopup} />}
//           <br />
//           <br />
//           <button type="submit" className="reg-but">
//             REGISTER
//           </button>
//           <br />
//           <button type="button" className="reg-don" onClick={handleLogin}>
//             Have an Account ?<br />
//             <p className="reg-dont">LOG IN</p>
//           </button>
//         </form>
//       </fieldset>
//     </div>
//   );
// };

// export default Register;
import { useState, useEffect } from 'react';
import '../../assets/css/Register.css';
import { useNavigate } from 'react-router-dom';

const Popup = ({ message, onClose }) => (
  <div className="popup-overlay">
    <div className="popup-card success">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    password: '',
    email: '',
    phonenumber: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage) {
      // Wait for a brief moment before redirecting
      const redirectTimer = setTimeout(() => {
        navigate('/login');
      }, 3000); // Redirect after 2 seconds (adjust as needed)

      // Clear the timer if the component unmounts or successMessage changes
      return () => clearTimeout(redirectTimer);
    }
  }, [successMessage, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();

    const errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!phonenumber) {
      errors.phonenumber = 'Phone number is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      setSuccessMessage('');
      return;
    }

    // Perform registration logic if all fields are filled

    setSuccessMessage('You Have Successfully Registered, Now You Can Login!');
    setUsername('');
    setPassword('');
    setEmail('');
    setPhonenumber('');
    setErrorMessages({});
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const closePopup = () => {
    setSuccessMessage('');
  };

  return (
    <div className="reg-container">
      <img src="/src/assets/images/logo.png" alt="Logo" className="reg-logon" />
      <fieldset className="reg-fieldset-container">
        <form onSubmit={handleRegister}>
          <label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            {errorMessages.email && <div className="reg-error">{errorMessages.email}</div>}
          </label>
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
            {errorMessages.username && <div className="reg-error">{errorMessages.username}</div>}
          </label>
          <label>
            <input
              type="text"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              placeholder="phone number"
            />
            {errorMessages.phonenumber && (
              <div className="reg-error">{errorMessages.phonenumber}</div>
            )}
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            {errorMessages.password && <div className="reg-error">{errorMessages.password}</div>}
          </label>
          {successMessage && <Popup message={successMessage} onClose={closePopup} />}
          <br />
          <br />
          <button type="submit" className="reg-but">
            REGISTER
          </button>
          <br />
          <button type="button" className="reg-don" onClick={handleLogin}>
            Have an Account ?<br />
            <p className="reg-dont">LOG IN</p>
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Register;


