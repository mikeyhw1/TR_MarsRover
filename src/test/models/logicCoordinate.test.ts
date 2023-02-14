import {
    convertDirectionToDegree,
    convertDegreeToDirection,
    degreeRoundUp,
    roverCoordinateToMovingCoordinate,
    movingCoordinateToRoverCoordinate,
} from "../../models/coordinateLogic";

describe("test <convertDirectionToDegree>", () => {
    test("convertDirectionToDegree", () => {
        expect(convertDirectionToDegree("N")).toBe(0);
        expect(convertDirectionToDegree("E")).toBe(90);
        expect(convertDirectionToDegree("S")).toBe(180);
        expect(convertDirectionToDegree("W")).toBe(270);
    });
});

describe("test <convertDegreeToDirection>", () => {
    test("convertDegreeToDirection", () => {
        expect(convertDegreeToDirection(0)).toBe("N");
        expect(convertDegreeToDirection(90)).toBe("E");
        expect(convertDegreeToDirection(180)).toBe("S");
        expect(convertDegreeToDirection(270)).toBe("W");
    });
});

describe("test <degreeRoundUp>", () => {
    test("degreeRoundUp_positive", () => {
        expect(degreeRoundUp(0)).toBe(0);
        expect(degreeRoundUp(90)).toBe(90);
        expect(degreeRoundUp(180)).toBe(180);
        expect(degreeRoundUp(270)).toBe(270);
        expect(degreeRoundUp(360)).toBe(0);
        expect(degreeRoundUp(450)).toBe(90);
        expect(degreeRoundUp(540)).toBe(180);
        expect(degreeRoundUp(720)).toBe(0);
        expect(degreeRoundUp(810)).toBe(90);
        expect(degreeRoundUp(900)).toBe(180);
        expect(degreeRoundUp(1080)).toBe(0);
    });

    test("degreeRoundUp_negative", () => {
        expect(degreeRoundUp(-90)).toBe(270);
        expect(degreeRoundUp(-180)).toBe(180);
        expect(degreeRoundUp(-270)).toBe(90);
        expect(degreeRoundUp(-360)).toBe(0);
        expect(degreeRoundUp(-450)).toBe(270);
        expect(degreeRoundUp(-540)).toBe(180);
        expect(degreeRoundUp(-720)).toBe(0);
        expect(degreeRoundUp(-810)).toBe(270);
        expect(degreeRoundUp(-900)).toBe(180);
        expect(degreeRoundUp(-1080)).toBe(0);
    });
});

describe("test <roverCoordinateToMovingCoordinate>", () => {
    test("roverCoordinateToMovingCoordinate", () => {
        expect(roverCoordinateToMovingCoordinate({ x: 2, y: 3, direction: "N" })).toEqual({ x: 2, y: 3, degree: 0 });
        expect(roverCoordinateToMovingCoordinate({ x: 2, y: 3, direction: "E" })).toEqual({ x: 2, y: 3, degree: 90 });
        expect(roverCoordinateToMovingCoordinate({ x: 2, y: 3, direction: "S" })).toEqual({ x: 2, y: 3, degree: 180 });
        expect(roverCoordinateToMovingCoordinate({ x: 2, y: 3, direction: "W" })).toEqual({ x: 2, y: 3, degree: 270 });
    });
});

describe("test <movingCoordinateToRoverCoordinate>", () => {
    test("movingCoordinateToRoverCoordinate", () => {
        expect(movingCoordinateToRoverCoordinate({ x: 2, y: 3, degree: 0 })).toEqual({ x: 2, y: 3, direction: "N" });
        expect(movingCoordinateToRoverCoordinate({ x: 2, y: 3, degree: 90 })).toEqual({ x: 2, y: 3, direction: "E" });
        expect(movingCoordinateToRoverCoordinate({ x: 2, y: 3, degree: 180 })).toEqual({ x: 2, y: 3, direction: "S" });
        expect(movingCoordinateToRoverCoordinate({ x: 2, y: 3, degree: 270 })).toEqual({ x: 2, y: 3, direction: "W" });
    });
});
