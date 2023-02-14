import {
    DIRECTIONS,
    Direction,
    COMPASS_DEGREES,
    CompassDegree,
    ROVER_ACTIONS,
    RoverAction,
    RoverCoordinate,
    MovingCoordinate,
} from "./models.types";

export function isRoverAction(input: any): input is RoverAction {
    return input === "L" || input === "R" || input === "M";
}

export function isDirection(input: any): input is Direction {
    return input === "N" || input === "E" || input === "S" || input === "W";
}

export function isRoverCoordinate(input: any): input is RoverCoordinate {
    return (
        typeof input.x === "number" &&
        input.x >= 0 &&
        typeof input.y === "number" &&
        input.y >= 0 &&
        isDirection(input.direction)
    );
}
