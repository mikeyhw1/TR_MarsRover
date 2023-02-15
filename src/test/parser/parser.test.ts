import { parseInstructionInput, parseCoordinateInput } from "../../parser/parser";

describe("test <parseInstructionInput>", () => {
    test("parseInstructionInput", () => {
        expect(parseInstructionInput("LMR")).toEqual(["L", "M", "R"]);
        expect(parseInstructionInput("LMLMLMLMM")).toEqual(["L", "M", "L", "M", "L", "M", "L", "M", "M"]);
        expect(parseInstructionInput("MMRMMRMRRM")).toEqual(["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"]);
        expect(parseInstructionInput("LMRMRLMRL")).toEqual(["L", "M", "R", "M", "R", "L", "M", "R", "L"]);
        expect(parseInstructionInput("LMr")).toBeUndefined();
        expect(parseInstructionInput("LmR")).toBeUndefined();
        expect(parseInstructionInput("lMR")).toBeUndefined();
        expect(parseInstructionInput("laMR")).toBeUndefined();
        expect(parseInstructionInput("")).toBeUndefined();
        expect(parseInstructionInput("undefined")).toBeUndefined();
        expect(parseInstructionInput("1")).toBeUndefined();
        expect(parseInstructionInput("0")).toBeUndefined();
        expect(parseInstructionInput("sfjdl")).toBeUndefined();
    });
});

describe("test <parseCoordinateInput>", () => {
    test("parseCoordinateInput", () => {
        expect(parseCoordinateInput("1 2 N")).toEqual({ x: 1, y: 2, direction: "N" });
        expect(parseCoordinateInput("3 3 E")).toEqual({ x: 3, y: 3, direction: "E" });
        expect(parseCoordinateInput("0 2 N")).toEqual({ x: 0, y: 2, direction: "N" });
        expect(parseCoordinateInput("0 0 S")).toEqual({ x: 0, y: 0, direction: "S" });
        expect(parseCoordinateInput("10 20 W")).toEqual({ x: 10, y: 20, direction: "W" });
        expect(parseCoordinateInput("-1 2 N")).toBeUndefined();
        expect(parseCoordinateInput("1 -2 N")).toBeUndefined();
        expect(parseCoordinateInput("1 -2 0")).toBeUndefined();
        expect(parseCoordinateInput("1 2 a")).toBeUndefined();
        expect(parseCoordinateInput("1 2 n")).toBeUndefined();
        expect(parseCoordinateInput("1 2 s")).toBeUndefined();
        expect(parseCoordinateInput("1 2 fdsf")).toBeUndefined();
        expect(parseCoordinateInput("1 2 -1")).toBeUndefined();
        expect(parseCoordinateInput("1 2 1")).toBeUndefined();
        expect(parseCoordinateInput("     ")).toBeUndefined();
        expect(parseCoordinateInput("1   1")).toBeUndefined();
        expect(parseCoordinateInput("  2 1")).toBeUndefined();
        expect(parseCoordinateInput("1 2  ")).toBeUndefined();
        expect(parseCoordinateInput("     ")).toBeUndefined();
        expect(parseCoordinateInput("        ")).toBeUndefined();
        expect(parseCoordinateInput("1 2")).toBeUndefined();
        expect(parseCoordinateInput("12 N")).toBeUndefined();
        expect(parseCoordinateInput("N 1")).toBeUndefined();
        expect(parseCoordinateInput("N 2 1")).toBeUndefined();
        expect(parseCoordinateInput("1 N")).toBeUndefined();
        expect(parseCoordinateInput("N")).toBeUndefined();
        expect(parseCoordinateInput("1")).toBeUndefined();
        expect(parseCoordinateInput("1   2 N")).toBeUndefined();
        expect(parseCoordinateInput("1  2 N")).toBeUndefined();
        expect(parseCoordinateInput("1 2  N")).toBeUndefined();
        expect(parseCoordinateInput("1 2   N")).toBeUndefined();
    });
});
