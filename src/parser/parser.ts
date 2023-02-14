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

// type Myarray<T> = T[];
// TODO2: usage of validator move to following input from UI
// validate
export function parseRowInput(rowInput: string): RoverAction[] | undefined {
    // const rowInputArray = rowInput.split("");
    let valid = true;

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

    let tempInputArray: RoverAction[] = [];
    rowInput.split("").map((i) => {
        if (isRoverAction(i)) {
            // console.log(`valid rowInput ${i}`);
            tempInputArray.push(i);
        } else {
            // console.log(`invalid rowInput ${i}`);
            valid = false;
        }
    });
    return valid ? tempInputArray : undefined;
}

// TODO2: to test still need ant UI input check??
function isRoverAction(input: any): input is RoverAction {
    return input === "L" || input === "R" || input === "M";
}
