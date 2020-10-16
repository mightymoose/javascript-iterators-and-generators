const values = [1, 2, 3][Symbol.iterator]();

const copy = Array.from(values);

console.log(copy);

in
