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
const extractedTypeKeys = Object.keys(Types) as Array<keyof typeof Types>;
export type TTypes = ElementType<typeof extractedTypeKeys>;

export default Types;
