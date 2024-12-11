# React 19 useEffect Return Value Error

This repository demonstrates a common error when using the `useEffect` hook in React 19.  The error involves providing an incorrect return value from the `useEffect` cleanup function, leading to unexpected behavior or warnings.

## Bug Description

The `useEffect` hook in the `bug.js` file incorrectly returns a number (1) instead of a cleanup function.  This will not cause an immediate crash in newer React versions but it is a subtle bug which may lead to unexpected behavior and memory leaks in some cases.  The solution in `bugSolution.js` corrects this by returning a cleanup function.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output to see the incorrect return value warnings and potential unexpected behavior in the original code.

## Solution

The solution is demonstrated in `bugSolution.js` which uses a correct cleanup function within the `useEffect` hook.