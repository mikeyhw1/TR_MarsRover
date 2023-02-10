import { directions, Direction, compassDegrees, CompassDegree, roverActions, RoverAction } from "./models.types";

export const convertDirectionToDegree = (input: Direction) => {
    switch (input) {
        case "N":
            return 0;
        case "E":
            return 90;
        case "S":
            return 180;
        case "W":
            return 270;
        default:
            console.error("ERROR : <convertDirectionToDegree> unexpected Direction input");
            break;
    }
};
