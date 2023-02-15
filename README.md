# TR_MarsRover

## Mars Rover Kata by Mike

A program to move rovers around the surface of Mars(Plateau)!

## Install

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/mikeyhw1/TR_MarsRover.git

# Go into the repository
$ cd TR_MarsRover

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Instruction

The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North, South, West, East (the four cardinal compass points) respectively.

    Example
    0 0 N

This means the Rover is at the bottom-left corner facing in the North direction.

N.B. Assume that the square directly North from (x, y) is (x, y+1), and the square directly East from (x, y) is (x + 1, y)

### Rover Instructions

| Name | Description                                                                         |
| ---- | ----------------------------------------------------------------------------------- |
| L    | Spins the Rover 90 degrees Left without moving from the current coordinate point    |
| R    | Spins the Rover 90 degrees Right without moving from the current coordinate point   |
| M    | Moves the Rover forward by one grid point, maintaining the same heading/orientation |
| ---- | ----------------------------------------------------------------------------------- |

N.B. Assume that the square directly North from (x, y) is (x, y+1).
Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.

## How To Use

### Config Input to the Program:

    Please enter MAX coorinate! (e.g.: '5 5')

The first line inputted into the program represents the upper-right coordinates of the Plateau.

    5 5

This Plateau has maximum (x, y) co-ordinates of (5, 5).
N.B. Assume that the lower-left coordinate is (0, 0).

### First Line of Input to a Rover

    Please enter rover current coordinate & orientation! (e.g.: '1 2 N')

The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation).

    1 2 N

### Second Line of Input to a Rover

    Please enter rover moving instructions! (e.g.: 'LMLMLMLMM')

A string of letters representing the instructions to move the Rover around the Plateau.

### Result

    Final Coordinate:
    1 3 N

## Notes

-   Input is case sensitive
