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

// TODO2: usage of validator move to following input from UI
// validate
export const parseRowInput = (rowInput: string) => {
    const rowInputArray = rowInput.split("");
    let valid = false;

    // TODO:

    // rowInputArray.forEach((i: RoverAction | any) => {
    //     if (validateRowInputItem(i)) {
    //     } else {
    //     }
    // });
};

// TODO: rebuild
// const validateRowInputItem = (rowInputItem: RoverAction | any): RoverAction | undefined => {
//     // let valid = false;

//     // TODO2: UI input check

//     //     // if (i instanceof RoverAction) {
//     //     // }
//     switch (rowInputItem) {
//         case "L":
//         case "R":
//         case "M":
//             return rowInputItem;
//         default:
//             return undefined;
//     }
// };
