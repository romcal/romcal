export const OCTAVE_IDS = ['christmas', 'easter', 'pentecost'] as const;

export type OctaveId = (typeof OCTAVE_IDS)[number];

export type OctaveDayNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type OctaveDayKind = 'feast' | 'within' | 'octaveDay';

export type OctaveRank = 'classI' | 'classII';
