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
import { isRoverAction, isRoverCoordinate } from "../types/validator";

export function parseInstructionInput(instructionInput: string): RoverAction[] | undefined {
    // TODO2: UI input check??

    // const rowInputArray = rowInput.split("");

    // const tempInputArray: RoverAction[] = rowInput.split("").filter((i) => {
    //     if (isRoverAction(i)) {
    //         console.log(`valid rowInput ${i}`);
    //         return true;
    //     } else {
    //         console.log(`invalid rowInput ${i}`);
    //         valid = false;
    //         return false;
    //     }
    // });

    let valid = true;
    let tempInputArray: RoverAction[] = [];
    instructionInput.split("").map((i) => {
        if (isRoverAction(i)) {
            // console.log(`valid rowInput ${i}`);
            tempInputArray.push(i);
        } else {
            console.log(`invalid rowInput ${i}`);
            valid = false;
        }
    });
    return valid && tempInputArray.length > 0 ? tempInputArray : undefined;
}

export function parseCoordinateInput(coordinateInput: string): RoverCoordinate | undefined {
    const coordinateArray = coordinateInput.split(" ");
    const tempRoverCoordinate = {
        x: parseInt(coordinateArray[0]),
        y: parseInt(coordinateArray[1]),
        direction: coordinateArray[2],
    };
    return isRoverCoordinate(tempRoverCoordinate) ? tempRoverCoordinate : undefined;
}
