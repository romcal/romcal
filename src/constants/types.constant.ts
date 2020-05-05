import { TypesEnum } from '@romcal/enums/types.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[TYPES]]
 */
export const TYPES = Object.keys(TypesEnum).filter(
  key => typeof TypesEnum[key as keyof typeof TypesEnum] === 'number',
) as Array<keyof typeof TypesEnum>;
