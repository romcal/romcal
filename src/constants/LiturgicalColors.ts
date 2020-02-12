export type LiturgicalColorKeys = "RED" | "ROSE" | "PURPLE" | "GREEN" | "WHITE" | "GOLD";

export type TLiturgicalColor = {
    key: string;
    value: string;
};

export type TLiturgicalColors = {
    [key in LiturgicalColorKeys]: TLiturgicalColor;
};

const LiturgicalColors = {
    RED: { key: "RED", value: "#FF0000" },
    ROSE: { key: "ROSE", value: "#FF007F" },
    PURPLE: { key: "PURPLE", value: "#800080" },
    GREEN: { key: "GREEN", value: "#008000" },
    WHITE: { key: "WHITE", value: "#FFFFFF" },
    GOLD: { key: "GOLD", value: "#FFD700" },
};
export default LiturgicalColors;
