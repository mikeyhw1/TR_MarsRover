import { CompassDegree, RoverAction, Coordinate, RoverCoordinate, MovingCoordinate } from "../types/models.types";
import { degreeRoundUp, roverCoordinateToMovingCoordinate, movingCoordinateToRoverCoordinate } from "./coordinateLogic";
import { parseInstructionInput, parseCoordinateInput, parseMaxCoordinateInput } from "../parser/parser";
import { isInBounds, isCoordinate } from "../types/validator";
import { minCoordinate } from "../config/config";

export function roverAction_LRM(
    maxCoordinate: Coordinate,
    movingCoordinate: MovingCoordinate,
    roverAction: RoverAction
): MovingCoordinate {
    const inputDegree: CompassDegree = movingCoordinate.degree;
    switch (roverAction) {
        case "L":
            return {
                ...movingCoordinate,
                degree: degreeRoundUp(inputDegree - 90),
            };
        case "R":
            return {
                ...movingCoordinate,
                degree: degreeRoundUp(inputDegree + 90),
            };
        case "M":
            // NOTE: only move if in bound
            switch (inputDegree) {
                case 0:
                    if (isInBounds(minCoordinate.y, maxCoordinate.y, movingCoordinate.y, 1)) {
                        return {
                            ...movingCoordinate,
                            y: movingCoordinate.y + 1,
                        };
                    } else {
                        return movingCoordinate;
                    }
                case 90:
                    if (isInBounds(minCoordinate.x, maxCoordinate.x, movingCoordinate.x, 1)) {
                        return {
                            ...movingCoordinate,
                            x: movingCoordinate.x + 1,
                        };
                    } else {
                        return movingCoordinate;
                    }
                case 180:
                    if (isInBounds(minCoordinate.y, maxCoordinate.y, movingCoordinate.y, -1)) {
                        return {
                            ...movingCoordinate,
                            y: movingCoordinate.y - 1,
                        };
                    } else {
                        return movingCoordinate;
                    }
                case 270:
                    if (isInBounds(minCoordinate.x, maxCoordinate.x, movingCoordinate.x, -1)) {
                        return {
                            ...movingCoordinate,
                            x: movingCoordinate.x - 1,
                        };
                    } else {
                        return movingCoordinate;
                    }
            }
    }
}

export function handleRoverInput(
    input_maxCoordinate: string,
    input_currentCoordinate: string,
    input_instructions: string
): string | undefined {
    const maxCoordinate: Coordinate | undefined = parseMaxCoordinateInput(input_maxCoordinate);
    if (maxCoordinate === undefined || !isCoordinate(maxCoordinate)) {
        console.log(`invalid input_maxCoordinate!`);
        return undefined;
    }

    const initCoordinate: RoverCoordinate | undefined = parseCoordinateInput(input_currentCoordinate);
    if (initCoordinate === undefined) {
        console.log(`invalid initCoordinateInput!`);
        return undefined;
    }

    const inputArray: RoverAction[] | undefined = parseInstructionInput(input_instructions);
    if (inputArray === undefined) {
        console.log(`invalid instructionInput!`);
        return undefined;
    }

    let movingCoordinate: MovingCoordinate = roverCoordinateToMovingCoordinate(initCoordinate);
    inputArray.forEach((roverAction, index) => {
        movingCoordinate = roverAction_LRM(maxCoordinate, movingCoordinate, roverAction);
        // console.log(`${index} round-result : ${movingCoordinate.x}, ${movingCoordinate.y},${movingCoordinate.degree},`);
    });
    const finalCoordinate: RoverCoordinate = movingCoordinateToRoverCoordinate(movingCoordinate);
    // console.log(`FINAL-result : ${finalCoordinate.x}, ${finalCoordinate.y}, ${finalCoordinate.direction}`);
    return `${finalCoordinate.x} ${finalCoordinate.y} ${finalCoordinate.direction}`;
}
