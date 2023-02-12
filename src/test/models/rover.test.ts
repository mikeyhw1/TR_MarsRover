// import {
//     directions,
//     Direction,
//     compassDegrees,
//     CompassDegree,
//     roverActions,
//     RoverAction,
//     RoverCoordinate,
//     MovingCoordinate,
// } from "../../types/models.types";
import { roverAction_LRM } from "../../models/rover";

describe("test <roverAction_LRM>", () => {
    test("roverAction_L", () => {
        expect(roverAction_LRM({ x: 3, y: 4, degree: 0 }, "L")).toEqual({ x: 3, y: 4, degree: 270 });
        expect(roverAction_LRM({ x: 3, y: 4, degree: 90 }, "L")).toEqual({ x: 3, y: 4, degree: 0 });
        expect(roverAction_LRM({ x: 3, y: 4, degree: 180 }, "L")).toEqual({ x: 3, y: 4, degree: 90 });
        expect(roverAction_LRM({ x: 4, y: 2, degree: 270 }, "L")).toEqual({ x: 4, y: 2, degree: 180 });
    });
    test("roverAction_R", () => {
        expect(roverAction_LRM({ x: 3, y: 4, degree: 0 }, "R")).toEqual({ x: 3, y: 4, degree: 90 });
        expect(roverAction_LRM({ x: 3, y: 4, degree: 90 }, "R")).toEqual({ x: 3, y: 4, degree: 180 });
        expect(roverAction_LRM({ x: 3, y: 4, degree: 180 }, "R")).toEqual({ x: 3, y: 4, degree: 270 });
        expect(roverAction_LRM({ x: 4, y: 2, degree: 270 }, "R")).toEqual({ x: 4, y: 2, degree: 0 });
    });
    test("roverAction_M", () => {
        expect(roverAction_LRM({ x: 3, y: 4, degree: 0 }, "M")).toEqual({ x: 3, y: 5, degree: 0 });
        expect(roverAction_LRM({ x: 3, y: 4, degree: 90 }, "M")).toEqual({ x: 4, y: 4, degree: 90 });
        expect(roverAction_LRM({ x: 3, y: 4, degree: 180 }, "M")).toEqual({ x: 3, y: 3, degree: 180 });
        expect(roverAction_LRM({ x: 4, y: 2, degree: 270 }, "M")).toEqual({ x: 3, y: 2, degree: 270 });
    });
});
