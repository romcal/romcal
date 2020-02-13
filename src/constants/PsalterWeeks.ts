export type TPsalterWeeks = "Week I" | "Week II" | "Week III" | "Week IV" | "Easter";
const PsalterWeeks: Array<TPsalterWeeks> = ["Week I", "Week II", "Week III", "Week IV", "Easter"];
export type TPsalterWeek = {
    key: number;
    value: TPsalterWeeks;
};

export default PsalterWeeks;
