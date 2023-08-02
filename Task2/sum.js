export default function sumOfArray(arr) {
    let sum = 0;
    for (const num of arr) {
      if (Number.isInteger(num)) {
        sum += num;
      } else {
        throw new Error('Array must only contain integers');
      }
    }
    return sum;
  }