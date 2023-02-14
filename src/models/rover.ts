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
import { degreeRoundUp } from "./coordinateLogic";

export function roverAction_LRM(movingCoordinate: MovingCoordinate, roverAction: RoverAction): MovingCoordinate {
    const inputDegree: CompassDegree = movingCoordinate.degree;

    switch (roverAction) {
        case "L":
            return {
                ...movingCoordinate,
                degree: degreeRoundUp(inputDegree - 90),
            };
        case "R":
            // let inputDegree: CompassDegree = movingCoordinate.degree
            return {
                ...movingCoordinate,
                degree: degreeRoundUp(inputDegree + 90),
            };
        case "M":
            // TODO2: allow outbround moving VS stop the rover
            // TODO2: create seperate function
            switch (inputDegree) {
                case 0:
                    return {
                        ...movingCoordinate,
                        y: movingCoordinate.y + 1,
                    };
                case 90:
                    return {
                        ...movingCoordinate,
                        x: movingCoordinate.x + 1,
                    };
                case 180:
                    return {
                        ...movingCoordinate,
                        y: movingCoordinate.y - 1,
                    };
                case 270:
                    return {
                        ...movingCoordinate,
                        x: movingCoordinate.x - 1,
                    };
                // default:
                //     break;
            }
        // default:
        //     break;
    }
}

export function handleRoverInput(rowInput: string) {
    // const inputArray = rowInput.split("");
}
