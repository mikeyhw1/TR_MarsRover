import { a_b_b } from "../../models/rover";

describe("init", () => {
    test("sum", () => {
        expect(a_b_b(1, 2)).toBe(5);
    });
});
