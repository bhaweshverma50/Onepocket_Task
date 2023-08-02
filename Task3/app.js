import fs from 'fs'

function readFile(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
    } else {
      const wordCount = countWords(data);
      console.log(`Total word count: ${wordCount}`);
    }
  });
}

function countWords(text) {
  const wordsArray = text.match(/\w+/g);
  return wordsArray ? wordsArray.length : 0;
}

const fileName = 'data.txt';
readFile(fileName);