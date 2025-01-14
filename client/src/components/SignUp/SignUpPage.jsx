import { useState } from 'react';
import { Link } from 'react-router';
import styles from './SignUpPage.module.css';


const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // Basic validation (Frontend only)
    if (!fullName || !email) {
      setError('Please fill in all fields.');
      return;
    }

    // Success message (without backend integration for now)
    setMessage('Sign Up successful!');

    // Reset fields after success
    setFullName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Link to="/welcome">
          <button type="submit">Sign Up</button>
        </Link>

        <p className={styles.signupMessage}>
        Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>

      </form>
    </div>
  );
};

export default SignUp;
