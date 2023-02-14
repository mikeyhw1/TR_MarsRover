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
import { isRoverAction } from "../types/validator";

// TOTEST:
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
            // console.log(`invalid rowInput ${i}`);
            valid = false;
        }
    });
    return valid ? tempInputArray : undefined;
}

// export function parseCoordinateInput(coordinateInput: string): RoverCoordinate | undefined {
//     function isCoordinateInput(input: any): input is RoverCoordinate {
//         return typeof input.x === "number" && typeof input.y === "number" &&
//     }

//     // function isPerson(o: any): o is Person {
//     //     return typeof o.firstName === "string" && typeof o.lastName === "string";
//     // }
//     return {
//         x: number;
//         y:
//     }
// }
