export type Title =
  | 'PATRON_OF_EUROPE'
  | 'FEAST_OF_THE_LORD'
  | 'DOCTOR_OF_THE_CHURCH'
  | 'MARIAN_FEAST'
  | 'TRIDUUM'
  | 'MARTYR';

export type Titles = {
  [key in Title]: string;
};
