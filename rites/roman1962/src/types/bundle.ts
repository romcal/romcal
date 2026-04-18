import type { Locale1962 } from './locale';

type PropersText = Record<string, Record<string, string[]>>;

export interface RomcalBundle1962 {
  id: string;
  i18n: Locale1962;
  propers: {
    sancti: PropersText;
    tempora: PropersText;
    commune: PropersText;
  };
}
