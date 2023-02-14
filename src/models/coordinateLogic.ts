import {
    DIRECTIONS,
    Direction,
    COMPASS_DEGREES,
    CompassDegree,
    ROVER_ACTIONS,
    RoverAction,
    RoverCoordinate,
    MovingCoordinate,
} from "../types/models.types";

export function convertDirectionToDegree(direction: Direction): CompassDegree {
    switch (direction) {
        case "N":
            return 0;
        case "E":
            return 90;
        case "S":
            return 180;
        case "W":
            return 270;
        // default:
        //     console.error("ERROR : <convertDirectionToDegree> unexpected Direction input");
        //     break;
    }
}

export function convertDegreeToDirection(compassDegree: CompassDegree): Direction {
    switch (compassDegree) {
        case 0:
            return "N";
        case 90:
            return "E";
        case 180:
            return "S";
        case 270:
            return "W";
        // default:
        //     console.error("ERROR : <convertDirectionToDegree> unexpected Direction input");
        //     break;
    }
}

export function degreeRoundUp(degree: number): CompassDegree {
    if (degree >= 360) {
        return degreeRoundUp(degree - 360);
    } else if (degree < 0) {
        return degreeRoundUp(degree + 360);
    } else {
        return degree as CompassDegree;
    }
}

export function roverCoordinateToMovingCoordinate(roverCoordinate: RoverCoordinate): MovingCoordinate {
    const { x, y, direction } = roverCoordinate;
    return {
        x,
        y,
        degree: convertDirectionToDegree(direction),
    };
}

export function movingCoordinateToRoverCoordinate(movingCoordinate: MovingCoordinate): RoverCoordinate {
    const { x, y, degree } = movingCoordinate;
    return {
        x,
        y,
        direction: convertDegreeToDirection(degree),
    };
}
