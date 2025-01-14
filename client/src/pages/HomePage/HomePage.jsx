import styles from './Home.module.css';
import SignIn from '../../components/SignIn/SignIn.jsx';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>LOGIN</h1>
      <SignIn />
    </div>
  );
};

export default Home;
