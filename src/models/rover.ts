import {
    directions,
    Direction,
    compassDegrees,
    CompassDegree,
    roverActions,
    RoverAction,
    RoverCoordinate,
    MovingCoordinate,
} from "../types/models.types";
import { degreeRoundUp } from "./coordinateLogic";

// WIP: TOTEST:
export const roverAction_LRM = (movingCoordinate: MovingCoordinate, roverAction: RoverAction): MovingCoordinate => {
    // const tempDegree = input.degree - 90;
    // const tempDegree = input.degree + 90;
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
};
