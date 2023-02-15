import {
    DIRECTIONS,
    Direction,
    COMPASS_DEGREES,
    CompassDegree,
    ROVER_ACTIONS,
    RoverAction,
    Coordinate,
    RoverCoordinate,
    MovingCoordinate,
} from "../types/models.types";
import { degreeRoundUp, roverCoordinateToMovingCoordinate, movingCoordinateToRoverCoordinate } from "./coordinateLogic";
import { parseInstructionInput, parseCoordinateInput } from "../parser/parser";
import { isInBounds } from "../types/validator";
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
            // let inputDegree: CompassDegree = movingCoordinate.degree
            return {
                ...movingCoordinate,
                degree: degreeRoundUp(inputDegree + 90),
            };
        case "M":
            // NOTE: only move if in bound
            // TODO2: allow outbround moving VS stop the rover
            // TODO2: create seperate function
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

export function handleRoverInput(maxCoordinate: Coordinate, initCoordinateInput: string, instructionInput: string) {
    // TODO2: check input by UI

    const initCoordinate: RoverCoordinate | undefined = parseCoordinateInput(initCoordinateInput);
    if (initCoordinate === undefined) {
        console.log(`invalid initCoordinateInput!`);
        // TODO3: ui
        return;
    }

    const inputArray: RoverAction[] | undefined = parseInstructionInput(instructionInput);
    if (inputArray === undefined) {
        console.log(`invalid instructionInput!`);
        // TODO3: ui
        return;
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
