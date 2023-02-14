import { parseInstructionInput } from "../../parser/parser";

describe("test <parseInstructionInput>", () => {
    test("parseInstructionInput", () => {
        expect(parseInstructionInput("LMR")).toEqual(["L", "M", "R"]);
        expect(parseInstructionInput("LMLMLMLMM")).toEqual(["L", "M", "L", "M", "L", "M", "L", "M", "M"]);
        expect(parseInstructionInput("MMRMMRMRRM")).toEqual(["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"]);
        expect(parseInstructionInput("LMRMRLMRL")).toEqual(["L", "M", "R", "M", "R", "L", "M", "R", "L"]);
        expect(parseInstructionInput("LMr")).toBeUndefined();
        expect(parseInstructionInput("LmR")).toBeUndefined();
        expect(parseInstructionInput("lMR")).toBeUndefined();
        expect(parseInstructionInput("")).toBeUndefined();
        expect(parseInstructionInput("undefined")).toBeUndefined();
        expect(parseInstructionInput("1")).toBeUndefined();
        expect(parseInstructionInput("0")).toBeUndefined();
        expect(parseInstructionInput("sfjdl")).toBeUndefined();
    });
});
