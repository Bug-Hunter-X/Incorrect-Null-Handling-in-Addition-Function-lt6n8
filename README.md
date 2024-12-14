# Incorrect Null Handling in Addition Function

This repository demonstrates a common bug in JavaScript involving incorrect null handling in an addition function. The function `foo` is designed to add two numbers, but it incorrectly returns `null` if either input is `null`.  The solution demonstrates a correct implementation which handles `null` values appropriately.

## Bug Description
The original `foo` function returns `null` if either `a` or `b` is `null`, even if the other argument is a number. The correct behavior would be to treat `null` as 0 in this scenario.

## Solution
The solution introduces a check to handle null values gracefully by converting them to 0 before performing the addition.

## How to Run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run the JavaScript files using a Node.js environment (or any other JavaScript runtime).
