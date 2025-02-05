import { useState } from 'react';
import styles from './SignIn.module.css';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { useAccount } from '../../context/AccountContext.jsx';


const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useAccount();
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email) {
      setError('Both fields are required.');
      return;
    }

    try {
      await signIn(formData.username, formData.email);
      navigate('/welcome'); // Redirect to articles page after successful sign in
    } catch (err) {
      setError(err.mssg || 'Sign in failed. Please try again.');
    }

    // Clear any previous error or success
    setError('');
    setSuccess('Sign-in successful!');

    // You can add API logic here to send the formData to a backend
    console.log('Sign-in data:', formData);
  };

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
          Sign In
        </button>

        <p className={styles.signupMessage}>
        Dont have an account? <Link to="/sign-up">Sign Up</Link>
        </p>

      </form>
    </div>
  );
};

export default SignIn;
