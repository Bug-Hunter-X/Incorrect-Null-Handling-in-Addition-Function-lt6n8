function foo(a, b) {
  const numA = a === null ? 0 : a;
  const numB = b === null ? 0 : b;
  return numA + numB; 
}
console.log(foo(1, null)); //This will return 1
console.log(foo(1, 2)); //This will return 3
console.log(foo(null, null)); //This will return 0