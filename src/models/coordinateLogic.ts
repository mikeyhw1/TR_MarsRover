import {
    directions,
    Direction,
    compassDegrees,
    CompassDegree,
    roverActions,
    RoverAction,
    RoverCoordinate,
    MovingCoordinate,
} from "./models.types";

export const convertDirectionToDegree = (direction: Direction): CompassDegree => {
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
};

export const convertDegreeToDirection = (compassDegree: CompassDegree): Direction => {
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
};

// WIP: TOCHECK:
export const degreeRoundUp = (degree: number): CompassDegree => {
    if (degree >= 360) {
        return degreeRoundUp(degree - 360);
    } else if (degree < 0) {
        return degreeRoundUp(degree + 360);
    } else {
        return degree as CompassDegree;
    }
};

// WIP: TOFIX:
export const roverAction_LRM = (input: MovingCoordinate, roverAction: RoverAction): movingDegree => {
    let tempDegree: CompassDegree;
    // const tempDegree = input.degree - 90;
    // const tempDegree = input.degree + 90;
    return {
        ...input,
        degree: degreeRoundUp(tempDegree),
    };
};

// export const roverAction_R = (input: movingDegree): movingDegree => {
//     return {
//         ...input,
//         degree: degreeRoundUp(tempDegree),
//     };
// };

// TODO: roverCoordinate <- -> movingDegree
