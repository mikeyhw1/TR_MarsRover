import { RoverAction, Coordinate, RoverCoordinate } from "../types/models.types";
import { isCoordinate, isRoverAction, isRoverCoordinate } from "../types/validator";

export function parseInstructionInput(instructionInput: string): RoverAction[] | undefined {
    let valid = true;
    let tempInputArray: RoverAction[] = [];
    instructionInput.split("").map((i) => {
        isRoverAction(i) ? tempInputArray.push(i) : (valid = false);
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

export function parseMaxCoordinateInput(maxCoordinateInput: string): Coordinate | undefined {
    const coordinateArray = maxCoordinateInput.split(" ");
    const tempCoordinate = {
        x: parseInt(coordinateArray[0]),
        y: parseInt(coordinateArray[1]),
    };
    return isCoordinate(tempCoordinate) ? tempCoordinate : undefined;
}
