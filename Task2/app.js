import dotenv from 'dotenv'
import express from 'express'
import sumOfArray from './sum.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.post('/sumOfArray', (req, res) => {
    try {
        const { numbers } = req.body;
        if (!numbers || !Array.isArray(numbers)) {
          throw new Error('Invalid input format. Please provide an array of integers in the "numbers" field.');
        }
        if (!numbers.length){
          throw new Error('Array cannot be empty!')
        }
        const sum = sumOfArray(numbers);
        res.json({ sum });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  });
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});