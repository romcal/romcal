import { concatAll } from "./array";

describe("concatAll", () => {
    test("should flatten and merge array item", () => {
        const result = concatAll([1, 2, [3, 4], [5, 6, 7]]);
        expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    test("should flatten and merge array item WITHOUT removing duplicates", () => {
        const result = concatAll([1, 2, [1, 2], [3, 4, 5]]);
        expect(result).toStrictEqual([1, 2, 1, 2, 3, 4, 5]);
    });
});
