import styles from './Home.module.css';
import SignIn from '../../components/SignIn/SignIn.jsx';
import { Link } from 'react-router';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>LOGIN</h1>
      <SignIn />
      <p className={styles.signupMessage}>
        Dont have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default Home;
