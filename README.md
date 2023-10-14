# [React Battleships Game](https://grzegorzjendernal.github.io/battleships-game/)

![Logo](https://raw.githubusercontent.com/GrzegorzJendernal/battleships-game/main/public/shareImage.png)

A popular ship game written in React with TypeScript. I hope it will give you some fun.

## Demo

[React Battleships Game](https://grzegorzjendernal.github.io/battleships-game/)

## Preview

!["Preview of the app"](https://raw.githubusercontent.com/GrzegorzJendernal/battleships-game/main/demo.gif)

## Rules

Each player has two boards, usually of size 10x10 squares. The squares are labeled with coordinates using letters from A to J and numbers from 1 to 10. On one of the grids, a player marks their own ships whose positions their opponent will try to guess. On the other grid, they mark the opponent's hit ships and the shots they've taken. The ships are placed either vertically or horizontally, in such a way that they do not touch each other by sides or corners. The ships vary in size, and there are usually more smaller units, players might have one four-square battleship, two three-square cruisers, three two-square destroyers, and four one-square patrol boats.

Hitting an opponent's ship involves taking a shot, which is an attempt to guess the position of one of the ships. Shots are taken alternately by specifying the coordinates of a square (e.g., B5). In the case of a hit, the player continues to shoot (take their turn) until they miss. A ship is sunk when the player correctly guesses the entire ship's position. The player informs the opponent of a miss by saying "miss," a hit by saying "hit," or "sunk" if the ship is entirely hit.

The winner is the first player to sink all of the opponent's ships.
## Technologies

- TypeScript
- React
- NPM
- Vite
- React Hooks
- JavaScript: ES6+
- styled components
- Responsive Web Design
- Figma
- CSS Grid
- CSS Flexbox
- Dall-e image creator
