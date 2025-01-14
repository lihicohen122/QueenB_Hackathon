import styles from './WelcomePage.module.css';
import { Link } from 'react-router';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <div className={styles.buttonContainer}>

        <Link to="/store">
          <button className={styles.button}>Store</button>
        </Link>

        <Link to="/articles"> 
          <button className={styles.button}>Articles</button>
        </Link>

        <Link to="/reports">
          <button className={styles.button}>Reports</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;