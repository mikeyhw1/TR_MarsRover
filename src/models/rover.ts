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
import { degreeRoundUp, roverCoordinateToMovingCoordinate, movingCoordinateToRoverCoordinate } from "./coordinateLogic";
import { parseRowInput } from "../parser/parser";

function roverAction_LRM(movingCoordinate: MovingCoordinate, roverAction: RoverAction): MovingCoordinate {
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

export function handleRoverInput(initCoordinate: RoverCoordinate, rowInput: string) {
    // TODO2: max field size
    const inputArray: RoverAction[] | undefined = parseRowInput(rowInput);
    if (inputArray === undefined) {
        console.log(`invalid rowInput!`);
        // TODO2:
        return;
    }

    let movingCoordinate: MovingCoordinate = roverCoordinateToMovingCoordinate(initCoordinate);
    // let tempCoordinate: MovingCoordinate;
    inputArray.forEach((roverAction, index) => {
        movingCoordinate = roverAction_LRM(movingCoordinate, roverAction);
        console.log(`${index} round-result : ${movingCoordinate.x}, ${movingCoordinate.y},${movingCoordinate.degree},`);
    });

    const finalCoordinate: RoverCoordinate = movingCoordinateToRoverCoordinate(movingCoordinate);

    console.log(`FINAL-result : ${finalCoordinate.x}, ${finalCoordinate.y},${finalCoordinate.direction},`);
}

// TODO: row coord input -> RoverCoordinate
