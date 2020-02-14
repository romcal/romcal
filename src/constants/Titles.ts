import { ElementType } from "../utils/helpers";

enum Titles {
    PATRON_OF_EUROPE = "PATRON_OF_EUROPE",
    FEAST_OF_THE_LORD = "FEAST_OF_THE_LORD",
    DOCTOR_OF_THE_CHURCH = "DOCTOR_OF_THE_CHURCH",
    MARIAN_FEAST = "MARIAN_FEAST",
    TRIDUUM = "TRIDUUM",
    MARTYR = "MARTYR",
}

// Convert the keys of this enum into a type
const extractedTitleKeys = Object.keys(Titles) as Array<keyof typeof Titles>;
export type TTitles = ElementType<typeof extractedTitleKeys>;

export default Titles;
