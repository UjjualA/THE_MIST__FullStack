import { useState } from 'react';
import '../../assets/css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please provide both username and password');
      return;
    }

    console.log('Logging in with:', { username, password });
    navigate('/home');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <img src="/src/assets/images/logo.png" alt="Logo" className="log-logo" />
      <fieldset className="log-fieldset-container">
        <legend className="log-title">Login</legend>
        <form onSubmit={handleLogin}>
          <label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </label>
          {errorMessage && <div className="log-error">{errorMessage}</div>}
          <div className="log-forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <br />
          <button type="submit" className="log-but" onClick={handleLogin}>
            LOG IN
          </button>
          <br />
          <button type="submit" className="log-don" onClick={handleRegister}>
            Dont Have an Account ?<br />
            <span className="log-dont">REGISTER</span>
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
