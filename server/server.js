import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import rubberDuckRoutes from './routes/rubberDucks.js'; // Import the routes
import {Account} from './classes/Account.js'; // Import Account class

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images'))); // Serve static images

app.use(cors({
  origin: process.env.CLIENT_URL
}));
console.log('CLIENT_URL:', process.env.CLIENT_URL);

// Use the routes file for all `/ducks` routes
app.use('/ducks', rubberDuckRoutes);

//Account class start
const account = new Account('John Doe', 'john@example.com', 'password123');

app.post('/api/account/add-points', (req, res) => {
  console.log('add-points route called'); // הדפסה לצורך בדיקה
  const { points } = req.body;
  try {
    account.add_points(points);
    res.json({ message: 'Points added successfully', points: account.get_points() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



app.post('/api/account/delete-points', (req, res) => {  // Delete points from the account
  const { points } = req.body;
  try {
      account.delete_points(points);
      res.json({ message: 'Points deleted successfully', points: account.get_points() });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

app.get('/api/account/get-points', (req, res) => {  // Get current points of the account
  res.json({ points: account.get_points() });
});
//Account class end

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log('PORT from .env:', process.env.PORT);
app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
      console.log(r.route.path);
  }
});

