import { print, clear, askQuestion } from "./consoleBuilder";
import { minCoordinate } from "../config/config";
import { isCoordinate } from "../types/validator";
import { handleRoverInput } from "../models/rover";
import { parseMaxCoordinateInput, parseCoordinateInput, parseInstructionInput } from "../parser/parser";
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

let temp_maxCoordinate: string = "";
let temp_currentCoordinate: string = "";
let temp_instructions: string = "";

export function systemStart() {
    clear(false);
    temp_maxCoordinate = "";
    temp_currentCoordinate = "";
    temp_instructions = "";

    print("--------------------------");
    print("|    System Started !    |");
    print("--------------------------");

    askQuestion(`Press enter to continuou!`, showBasicInfo);
}

function showBasicInfo() {
    clear(true);
    print(`Default MIN coorinate: ${minCoordinate.x} ${minCoordinate.y}`);
    askQuestion(`Press enter MAX coorinate! (e.g.: '5 5')`, enterMaxCoordinate);
}

function enterMaxCoordinate(input_maxCoordinate: string) {
    const maxCoordinate: Coordinate | undefined = parseMaxCoordinateInput(input_maxCoordinate);
    if (maxCoordinate === undefined || !isCoordinate(maxCoordinate)) {
        clear(true);
        print(`INVALID MAX coorinate input : ${input_maxCoordinate}`);
        return askQuestion(`Press enter to retry!`, showBasicInfo);
    }
    temp_maxCoordinate = input_maxCoordinate;
    enterCurrentCoordinate();
}

function enterCurrentCoordinate() {
    clear(true);
    print(`MAX coorinate : ${temp_maxCoordinate}`);

    temp_currentCoordinate = "";
    askQuestion(`Press enter rover current coordinate & orientation! (e.g.: '1 2 N')`, validateCurrentCoordinate);
}

function validateCurrentCoordinate(input_currentCoordinate: string) {
    const initCoordinate: RoverCoordinate | undefined = parseCoordinateInput(input_currentCoordinate);
    if (initCoordinate === undefined) {
        clear(true);
        print(`INVALID rover current coordinate & orientation input : ${input_currentCoordinate}`);
        return askQuestion(`Press enter to retry!`, enterCurrentCoordinate);
    }
    temp_currentCoordinate = input_currentCoordinate;
    enterInstructions();
}

function enterInstructions() {
    clear(true);
    print(`Rover current coorinate : ${temp_currentCoordinate}`);

    temp_instructions = "";
    askQuestion(`Press enter rover moving instructions! (e.g.: 'LMLMLMLMM')`, validateInstructions);
}

function validateInstructions(input_instructions: string) {
    const inputArray: RoverAction[] | undefined = parseInstructionInput(input_instructions);
    if (inputArray === undefined) {
        clear(true);
        print(`INVALID rover moving instructions input : ${input_instructions}`);
        return askQuestion(`Press enter to retry!`, enterInstructions);
    }
    temp_instructions = input_instructions;
    processRoverInputs();
}

function processRoverInputs() {
    const finalCoordinate: string | undefined = handleRoverInput(
        temp_maxCoordinate,
        temp_currentCoordinate,
        temp_instructions
    );
    if (finalCoordinate === undefined) {
        clear(true);
        print(`ERROR processing input! please retry from the beginning:`);
        return askQuestion(`Press enter to restart!`, systemStart);
    }

    print(`Final Coordinate:`);
    print(`${finalCoordinate}`);
    print("--------------------------");
    return askQuestion(`Press enter to input new rover current coordinate & instructions!`, enterCurrentCoordinate);
}
