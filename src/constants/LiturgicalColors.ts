export type TLiturgicalColorKeys = 'RED' | 'ROSE' | 'PURPLE' | 'GREEN' | 'WHITE' | 'GOLD';

export type TLiturgicalColor = {
  key: TLiturgicalColorKeys;
  value?: string;
};

export type TLiturgicalColors = {
  [key in TLiturgicalColorKeys]: TLiturgicalColor;
};

const LiturgicalColors: TLiturgicalColors = {
  RED: { key: 'RED' },
  ROSE: { key: 'ROSE' },
  PURPLE: { key: 'PURPLE' },
  GREEN: { key: 'GREEN' },
  WHITE: { key: 'WHITE' },
  GOLD: { key: 'GOLD' },
};

export default LiturgicalColors;
