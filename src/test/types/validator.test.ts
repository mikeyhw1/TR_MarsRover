import { isRoverAction, isDirection, isRoverCoordinate } from "../../types/validator";

describe("test <isRoverAction>", () => {
    test("isRoverAction", () => {
        expect(isRoverAction("L")).toBe(true);
        expect(isRoverAction("R")).toBe(true);
        expect(isRoverAction("M")).toBe(true);
        expect(isRoverAction(undefined)).toBe(false);
        expect(isRoverAction(0)).toBe(false);
        expect(isRoverAction(null)).toBe(false);
        expect(isRoverAction(3)).toBe(false);
        expect(isRoverAction(3)).toBe(false);
        expect(isRoverAction("W")).toBe(false);
        expect(isRoverAction("l")).toBe(false);
        expect(isRoverAction("r")).toBe(false);
        expect(isRoverAction("LR")).toBe(false);
    });
});

describe("test <isDirection>", () => {
    test("isDirection", () => {
        expect(isDirection("N")).toBe(true);
        expect(isDirection("E")).toBe(true);
        expect(isDirection("S")).toBe(true);
        expect(isDirection("W")).toBe(true);
        expect(isDirection(undefined)).toBe(false);
        expect(isDirection(0)).toBe(false);
        expect(isDirection(null)).toBe(false);
        expect(isDirection(3)).toBe(false);
        expect(isDirection("a")).toBe(false);
        expect(isDirection("n")).toBe(false);
        expect(isDirection("w")).toBe(false);
        expect(isDirection("LE")).toBe(false);
    });
});

describe("test <isRoverCoordinate>", () => {
    test("isRoverCoordinate", () => {
        expect(isRoverCoordinate({ x: 1, y: 1, direction: "N" })).toBe(true);
        expect(isRoverCoordinate({ x: 2, y: 3, direction: "E" })).toBe(true);
        expect(isRoverCoordinate({ x: 0, y: 1, direction: "S" })).toBe(true);
        expect(isRoverCoordinate({ x: 0, y: 0, direction: "S" })).toBe(true);
        expect(isRoverCoordinate({ x: 10, y: 111, direction: "W" })).toBe(true);
        expect(isRoverCoordinate({ x: -1, y: 1, direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: -1, direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: -1, y: -1, direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: 1, direction: "n" })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: 1, direction: "a" })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: 1, direction: "NE" })).toBe(false);
        expect(isRoverCoordinate({ x: undefined, y: 1, direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: null, y: 1, direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: "N", y: 1, direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: undefined, direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: null, direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: "N", direction: "N" })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: 1, direction: undefined })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: 1, direction: 0 })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: 1, direction: 2 })).toBe(false);
        expect(isRoverCoordinate({ x: 1, y: 1, direction: null })).toBe(false);
    });
});
