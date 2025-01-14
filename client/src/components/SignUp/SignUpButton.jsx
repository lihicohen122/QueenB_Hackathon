import { Link } from 'react-router';
import styles from './SignUp.module.css'; 

const SignUpPrompt = () => { 
  return (
    <div className={styles.container}>
      <h2>You dont have an account?</h2>
      <p>Please sign up to access the platform.</p>
      <Link to="/sign-up"> {/* Assuming "/sign-up" is the correct route */}
        <button className={styles.button}>Sign Up Now</button>
      </Link>
    </div>
  );
};

export default SignUpPrompt;
