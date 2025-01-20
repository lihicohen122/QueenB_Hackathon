import { AccountProvider } from './context/AccountContext';
import { BrowserRouter, Routes, Route  } from 'react-router';
// import { BrowserRouter, Routes, Route, Link } from 'react-router';

import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import SignUp from './components/SignUp/SignUpPage.jsx'; 
import SignIn from './components/SignIn/SignIn.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';
import Store from './components/Store/Store';
import ReportsPage from './components/ReportsPage/ReportsPage.jsx';
import Articles from './components/Articles/Articles.jsx';


 function App() {
   return (
    <AccountProvider>
      <BrowserRouter>
        <div className={styles.app}>
        <header className={styles.appHeader}>
            <nav className={styles.appNav}>
              {/* <Link to="/welcome" className={styles.appLink}>Home</Link> */}
            </nav>
          </header>
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path= "/welcome" element={<WelcomePage />} />
              <Route path= "/store" element={<Store />} /> 
              <Route path= "/reports" element={<ReportsPage />} />  
              <Route path="/articles" element={<Articles />} /> 
            </Routes>
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2024 My App</p>
          </footer>
        </div>
      </BrowserRouter>
     </AccountProvider>
   );
 }

 export default App;


