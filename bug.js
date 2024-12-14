function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is incorrect
  }
  return a + b;
}
console.log(foo(1, null)); //This will return null
console.log(foo(1, 2)); //This will return 3