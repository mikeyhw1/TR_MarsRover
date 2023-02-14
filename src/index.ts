import { handleRoverInput } from "./models/rover";
import {
    DIRECTIONS,
    Direction,
    COMPASS_DEGREES,
    CompassDegree,
    ROVER_ACTIONS,
    RoverAction,
    RoverCoordinate,
    MovingCoordinate,
} from "./types/models.types";

export const sum_0 = (a: number, b: number) => {
    return a + b;
};

// console.log("index start a");

const aaa_coord: RoverCoordinate = { x: 1, y: 2, direction: "N" };
const aaa_rowInput = "LMLMLMLMM";
handleRoverInput(aaa_coord, aaa_rowInput);

const b_coord: RoverCoordinate = { x: 3, y: 3, direction: "E" };
const b_rowInput = "MMRMMRMRRM";
handleRoverInput(b_coord, b_rowInput);
