import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import SignUp from './components/SignUp/SignUpPage.jsx'; 
import SignIn from './components/SignIn/SignIn.jsx';


 function App() {
   return (
     <BrowserRouter>
       <div className={styles.app}>
       <header className={styles.appHeader}>
          <nav className={styles.appNav}>
             <Link to="/" className={styles.appLink}>Home</Link>
           </nav>
         </header>
         <main className={styles.main}>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/sign-in" element={<SignIn />} />
             <Route path="/sign-up" element={<SignUp />} />
           </Routes>
         </main>
         <footer className={styles.footer}>
           <p>&copy; 2024 My App</p>
         </footer>
       </div>
     </BrowserRouter>
   );
 }

 export default App;


