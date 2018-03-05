# Northcoders Morning Katas

## Running Order

The running order for this block's katas is: 

1. subArrSum
2. romanNumeralEncoder
3. vowelShift
4. rgbaModifier
5. findPartner
6. findMostRepeated
7. fillSquare
8. needleInHaystack
9. binarySearch
10. parseHexInt


## Instructions

Each kata should be completed with full TDD. Every morning you should start a new kata, regardless of the progress you have made on the previous one! You will have a chance to review your progress with your katas in your weekly 1-to-1s. 

## Setup Instructions

1. Fork this repository to your own GitHub account because you will be pushing your own solutions to it.

2. Clone your fork of this repository to your local machine and `cd` into it:

  ```
  $ git clone <your fork's URL>
  $ cd CORE-B1-katas
  ```

3. Run this command in your terminal:

`$ echo "mocha **/*.spec.js" > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit`


4. Add Northcoders' version of the repo as a git remote called `upstream`:

  ```
  $ git remote add upstream https://github.com/northcoders/morning-katas-august-2017.git
  ```

5. Navigate into its folder and install all its dependecies using `npm install`. You also have access to an npm script to run tests (`npm test`). You have until *9:45* to work on the problem.

  ```
  $ cd calculateDivisors
  $ npm install
  $ npm test
  ```

6. Work on the kata and commit changes as needed. When you are happy with your solution, push all your changes to your forked repo. If you haven't finished it by 9:30, feel free to do so in your own time, but make sure you keep your forked copy up to date. You should push to your fork frequently but as a bare minimum please make sure it's up to date with last week's kata solutions before Monday morning each week:

  ```
  $ git push origin master
  ```
  

