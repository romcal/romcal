import { concatAll, removeWhere } from "./array";

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

describe("removeWhere", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let items: any;
    beforeEach(() => {
        items = [
            {
                id: 1,
                name: "foo",
            },
            {
                id: 2,
                name: "bar",
            },
        ];
    });
    test("should remove objects from array with matching keys and values", () => {
        removeWhere(items, { id: 1 });
        expect(items).toStrictEqual([{ id: 2, name: "bar" }]);
    });
    test("should return the original array if asked to delete an item that doesn't exist", () => {
        removeWhere(items, { id: 3 });
        expect(items).toStrictEqual([
            { id: 1, name: "foo" },
            { id: 2, name: "bar" },
        ]);
    });
});
