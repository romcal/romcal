import { findDescendantValueByKeys, omit, omitFalsyProps } from "./object";

describe("omit", () => {
    let testObject: any;

    beforeAll(() => {
        testObject = {
            foo: "bar",
            baz: "bat",
        };
    });

    test("should remove specified key(s) from the object", () => {
        const result = omit(testObject, ["foo"]);
        expect(Object.keys(result)).toHaveLength(1);
        expect(Object.keys(result)).toStrictEqual(["baz"]);
    });

    afterAll(() => {
        testObject = null;
    });
});

describe("omitFalsyProps()", () => {
    let testObject: any;

    beforeAll(() => {
        testObject = {
            removeMe1: null,
            removeMe2: "",
            removeMe3: undefined,
            validProp1: "asd",
            validProp2: false,
            validProp3: true,
            validProp4: 1,
        };
    });

    test("should remove all undefined, null and empty string fields from the object", () => {
        const result = omitFalsyProps(testObject);
        expect(Object.keys(result)).toHaveLength(4);
        expect(Object.keys(result)).toStrictEqual(["validProp1", "validProp2", "validProp3", "validProp4"]);
    });

    afterAll(() => {
        testObject = null;
    });
});

describe("findDescendantValueByKeys()", () => {
    let testNestedString: any;
    let testNestedArray: any;
    let testNestedObject: any;

    beforeAll(() => {
        testNestedString = {
            one: {
                two: {
                    three: "test",
                },
            },
        };
        testNestedArray = {
            one: {
                two: {
                    three: ["1", "2", "3"],
                },
            },
        };
        testNestedObject = {
            one: {
                two: {
                    three: {
                        foo: "bar",
                    },
                },
            },
        };
    });

    test("should be able to return the value of the given key sequence if it exists", () => {
        const result = findDescendantValueByKeys(testNestedString, ["one", "two", "three"]);
        const result2 = findDescendantValueByKeys(testNestedArray, ["one", "two", "three"]);
        const result3 = findDescendantValueByKeys(testNestedObject, ["one", "two", "three"]);

        expect(result).toBe(testNestedString.one.two.three);
        expect(typeof result).toBe("string");

        expect(result2).toBe(testNestedArray.one.two.three);
        expect(result2).toHaveLength(3);

        expect(result3).toBe(testNestedObject.one.two.three);
        expect(Object.keys(result3)).toStrictEqual(["foo"]);
    });

    test("should return the last valid value from an incorrect key sequene", () => {
        const result = findDescendantValueByKeys(testNestedString, ["one", "two", "t2hree"]);

        expect(result).toBe(testNestedString.one.two);
        expect(Object.keys(result)).toStrictEqual(["three"]);
    });

    afterAll(() => {
        testNestedString = null;
        testNestedArray = null;
        testNestedObject = null;
    });
});
