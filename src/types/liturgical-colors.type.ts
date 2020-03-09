export type LiturgicalColorKeys = 'RED' | 'ROSE' | 'PURPLE' | 'GREEN' | 'WHITE' | 'GOLD';

export type LiturgicalColor = {
  key: LiturgicalColorKeys;
  value?: string;
};

export type LiturgicalColors = {
  [key in LiturgicalColorKeys]: LiturgicalColor;
};
