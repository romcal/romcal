import type { MassPropers, PropersBlock } from '../types/liturgical-day-1962';

export interface ResolvePropersOptions {
  locales?: string[];
}

export interface ResolvedPropers {
  propers: MassPropers;
  extraSections: Record<string, PropersBlock>;
}

export interface AttachPropersOptions extends ResolvePropersOptions {
  attachToCommemorations?: boolean;
}
