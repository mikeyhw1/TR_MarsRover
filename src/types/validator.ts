import { Direction, RoverAction, Coordinate, RoverCoordinate } from "./models.types";

export function isCoordinate(input: any): input is Coordinate {
    return typeof input.x === "number" && input.x >= 0 && typeof input.y === "number" && input.y >= 0;
}

export function isRoverAction(input: any): input is RoverAction {
    return input === "L" || input === "R" || input === "M";
}

export function isDirection(input: any): input is Direction {
    return input === "N" || input === "E" || input === "S" || input === "W";
}

export function isRoverCoordinate(input: any): input is RoverCoordinate {
    return (
        // FAIL NOTES: isCoordinate(input) && isDirection(input.direction)
        typeof input.x === "number" &&
        input.x >= 0 &&
        typeof input.y === "number" &&
        input.y >= 0 &&
        isDirection(input.direction)
    );
}

export function isInBounds(min: number, max: number, current: number, movement: 1 | -1) {
    switch (movement) {
        case 1:
            return current + 1 <= max ? true : false;
        case -1:
            return current - 1 >= min ? true : false;
    }
}
