import { ElementType } from "../utils/helpers";

// Rank types of celebrations.
// Order is important:
// Higher rank first, lower rank at the end.
export enum Types {
    SOLEMNITY = 0,
    SUNDAY,
    TRIDUUM,
    HOLY_WEEK,
    FEAST,
    MEMORIAL,
    OPT_MEMORIAL,
    COMMEMORATION,
    FERIA,
}

// Convert the keys of this enum into a type
export const extractedTypeKeys = Object.keys(Types).filter(key => typeof Types[key as keyof typeof Types] === "number") as Array<keyof typeof Types>;
export type TTypes = ElementType<typeof extractedTypeKeys>;

export default Types;
