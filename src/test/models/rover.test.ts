import { roverAction_LRM, handleRoverInput } from "../../models/rover";

describe("test <roverAction_LRM>", () => {
    test("roverAction_L", () => {
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 0 }, "L")).toEqual({ x: 3, y: 4, degree: 270 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 90 }, "L")).toEqual({ x: 3, y: 4, degree: 0 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 180 }, "L")).toEqual({ x: 3, y: 4, degree: 90 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 4, y: 2, degree: 270 }, "L")).toEqual({ x: 4, y: 2, degree: 180 });
    });
    test("roverAction_R", () => {
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 0 }, "R")).toEqual({ x: 3, y: 4, degree: 90 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 90 }, "R")).toEqual({ x: 3, y: 4, degree: 180 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 180 }, "R")).toEqual({ x: 3, y: 4, degree: 270 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 4, y: 2, degree: 270 }, "R")).toEqual({ x: 4, y: 2, degree: 0 });
    });
    test("roverAction_M", () => {
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 0 }, "M")).toEqual({ x: 3, y: 5, degree: 0 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 90 }, "M")).toEqual({ x: 4, y: 4, degree: 90 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 4, degree: 180 }, "M")).toEqual({ x: 3, y: 3, degree: 180 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 4, y: 2, degree: 270 }, "M")).toEqual({ x: 3, y: 2, degree: 270 });
    });
    test("isInBounds", () => {
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 4, y: 5, degree: 0 }, "M")).toEqual({ x: 4, y: 5, degree: 0 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 5, y: 4, degree: 90 }, "M")).toEqual({ x: 5, y: 4, degree: 90 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 3, y: 0, degree: 180 }, "M")).toEqual({ x: 3, y: 0, degree: 180 });
        expect(roverAction_LRM({ x: 5, y: 5 }, { x: 0, y: 4, degree: 270 }, "M")).toEqual({ x: 0, y: 4, degree: 270 });
    });
});

describe("test <handleRoverInput>", () => {
    test("handleRoverInput", () => {
        expect(handleRoverInput("5 5", "1 2 N", "LMLMLMLMM")).toBe("1 3 N");
        expect(handleRoverInput("5 5", "3 3 E", "MMRMMRMRRM")).toBe("5 1 E");
        expect(handleRoverInput("5 5", "1 1 N", "MMM")).toBe("1 4 N");
        expect(handleRoverInput("5 5", "4 4 W", "MMM")).toBe("1 4 W");
        expect(handleRoverInput("5 5", "1 1 N", "LLL")).toBe("1 1 E");
        expect(handleRoverInput("5 5", "1 1 N", "RRR")).toBe("1 1 W");
        expect(handleRoverInput("5 5", "3 3 N", "RRMM")).toBe("3 1 S");
        expect(handleRoverInput("6 5", "3 3 S", "LMMM")).toBe("6 3 E");
    });
    test("isInBounds", () => {
        expect(handleRoverInput("5 5", "1 2 N", "MMMMMMMMM")).toBe("1 5 N");
        expect(handleRoverInput("5 5", "1 2 N", "MMMMMMMMMRRMM")).toBe("1 3 S");
        expect(handleRoverInput("5 5", "2 2 W", "MMMMMMMMM")).toBe("0 2 W");
        expect(handleRoverInput("5 5", "2 2 W", "MMMMMMMMMRRMMM")).toBe("3 2 E");
    });
});
