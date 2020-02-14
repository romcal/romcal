import { Schema, Validator } from "jsonschema";
import { Titles } from "../constants";
import * as CountryCalendars from "../calendars";

export const getRomcalConfigJsonSchema = (): Schema => {
    const romcalConfigJsonSchema: Schema = {
        id: "/romcalConfig",
        type: "object",
        minProperties: 0,
        maxProperties: 10,
        properties: {
            year: { type: "number" },
            // Will only accept values that match existing countries in the romcal library
            country: {
                type: "string",
                enum: [Object.keys(CountryCalendars)],
                description: `Acceptable values are ${Object.keys(CountryCalendars).join(", ")}`,
            },
            locale: { type: "string" },
            christmastideEnds: { type: "string", enum: ["t", "o", "e"] },
            epiphanyOnJan6: { type: "boolean" },
            christmastideIncludesTheSeasonOfEpiphany: { type: "boolean" },
            corpusChristiOnThursday: { type: "boolean" },
            ascensionOnSunday: { type: "boolean" },
            type: { type: "string", enum: ["calendar", "liturgical"] },
            query: { $ref: "/romcalQueryJsonSchema" },
        },
    };
    return romcalConfigJsonSchema;
};

export const getRomcalQueryJsonSchema = (): Schema => {
    const romcalQueryJsonSchema: Schema = {
        id: "/romcalQueryJsonSchema",
        type: "object",
        minProperties: 1,
        properties: {
            day: {
                type: "number",
                enum: [0, 1, 2, 3, 4, 5, 6],
                description: "Acceptable values are numbers between 0 to 6 where 0 is Sunday and 6 is Saturday",
            },
            month: {
                type: "number",
                enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                description: "Acceptable values are numbers between 0 to 11 where 0 is January and 11 is December",
            },
            group: {
                type: "string",
                enum: ["days", "months", "daysByMonth", "weeksByMonth", "cycles", "types", "liturgicalSeasons", "liturgicalColors", "psalterWeeks"],
            },
            title: {
                type: "string",
                enum: Object.keys(Titles),
                description: `Acceptable values are ${Object.keys(Titles).join(", ")}`,
            },
        },
    };
    return romcalQueryJsonSchema;
};

export const getRomcalConfigSchemaValidator = (): Validator => {
    const validator = new Validator();
    validator.addSchema(getRomcalQueryJsonSchema());
    validator.addSchema(getRomcalConfigJsonSchema());
    return validator;
};
