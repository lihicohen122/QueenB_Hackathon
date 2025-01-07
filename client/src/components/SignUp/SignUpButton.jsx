import { Link } from 'react-router-dom'; // For navigation between pages
import styles from './SignUp.module.css'; // Add custom styles

const SignUpPrompt = () => {  // Rename the component to represent a sign-up prompt
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
