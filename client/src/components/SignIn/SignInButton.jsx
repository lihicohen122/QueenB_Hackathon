import { Link } from 'react-router';
import styles from './SignIn.module.css'; 

const SignInPrompt = () => { 
  return (
    <div className={styles.container}>
      <h2>already have an account?</h2>
      <p>Please sign in to access the platform.</p>
      <Link to="/sign-in"> {/* Assuming "/sign-in" is the correct route */}
        <button className={styles.button}>Sign In Now</button>
      </Link>
    </div>
  );
};

export default SignInPrompt;