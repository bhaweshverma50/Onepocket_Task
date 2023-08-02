import dotenv from "dotenv";
import express from "express";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

function countWords(text) {
  const wordsArray = text.match(/\w+/g);
  return wordsArray ? wordsArray.length : 0;
}

app.post("/countWords", (req, res) => {
  try {
    const { input } = req.body;
    if (!input || typeof input !== "string") {
      throw new Error(
        'Invalid input format. Please provide a valid string in the "input" field.'
      );
    }
    const wordCount = countWords(input);
    res.json({ wordCount });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
