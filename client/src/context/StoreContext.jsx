// import { createContext, useState, useContext } from 'react';
// import api from '../services/api';
// import PropTypes from 'prop-types';

// const StoreContext = createContext();

// export const StoreProvider = ({ children }) => {
//   const [items, setItems] = useState(null);
//   const [account, setAccount] = useState(null);
//   const [items, setItems] = useState(null);
//   const [items, setItems] = useState(null);

//   const signIn = async (username, email) => {
//     try {
//       const response = await api.post('/accounts/signIn', { userName: username, email });
//       setAccount(response.data.account);
//       return response.data;
//     } catch (error) {
//       console.error('Error finding an account: ', error);
//     }
//   };

//   const signUp = async (username, email) => {
//     try {
//       const response = await api.post('/accounts/createAccount', { userName: username, email });
//       setAccount(response.data.account);
//       return response.data;
//     } catch (error) {
//       console.error('Error creating an account: ', error);
//     }
//   };

//   const earnCoins = async (amount) => {
//     if (!account) return;
//     try {
//       const response = await api.post('/accounts/earnCoins', {
//         userName: account.userName,
//         amount
//       });
      
//       setAccount(response.data.account);
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   };

//   return (
//     <AccountContext.Provider value={{ account, signIn, signUp, earnCoins }}>
//       {children}
//     </AccountContext.Provider>
//   );
// };

// AccountProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export const useAccount = () => {
//   const context = useContext(AccountContext);
//   if (!context) {
//     throw new Error('useAccount must be used within an AccountProvider');
//   }
//   return context;
// };

// export default AccountContext;