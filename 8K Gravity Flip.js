// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

const flip = (d, a) => a.sort((a, b) => (d === "R" ? a - b : b - a));
