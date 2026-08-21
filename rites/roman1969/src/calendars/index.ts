import type { CalendarDef } from '../models/calendar-def';

import { Argentina } from './countries/argentina';
import { Australia } from './countries/australia';
import { Austria } from './countries/austria';
import { Belgium } from './countries/belgium';
import { Bolivia } from './countries/bolivia';
import { BosniaHerzegovina } from './countries/bosnia-herzegovina';
import { Brazil } from './countries/brazil';
import { Canada } from './countries/canada';
import { Chile } from './countries/chile';
import { China } from './countries/china';
import { CostaRica } from './countries/costa-rica';
import { Croatia } from './countries/croatia';
import { CzechRepublic } from './countries/czech-republic';
import { Denmark } from './countries/denmark';
import { England } from './countries/england';
import { Finland } from './countries/finland';
import {
  France,
  France_Albi,
  France_Angers,
  France_Cahors,
  France_Coutances,
  France_Laval,
  France_Lyon,
  France_LourdesSanctuary,
  France_Montauban,
  France_Pamiers,
  France_Paris,
  France_Rodez,
  France_SaintDenis,
  France_Strasbourg,
  France_TarbesLourdes,
  France_Toulouse,
} from './countries/france';
import { Germany } from './countries/germany';
import { Greece } from './countries/greece';
import { Guatemala } from './countries/guatemala';
import { HongKong } from './countries/hong-kong';
import { Hungary } from './countries/hungary';
import { India } from './countries/india';
import { Ireland } from './countries/ireland';
import { Italy } from './countries/italy';
import { Japan } from './countries/japan';
import { Lebanon } from './countries/lebanon';
import { Lithuania } from './countries/lithuania';
import { Malta } from './countries/malta';
import { Mexico } from './countries/mexico';
import { Netherlands } from './countries/netherlands';
import { NewZealand } from './countries/new-zealand';
import { Norway } from './countries/norway';
import { Panama } from './countries/panama';
import { Paraguay } from './countries/paraguay';
import { Peru } from './countries/peru';
import { Philippines } from './countries/philippines';
import { Poland } from './countries/poland';
import { Portugal } from './countries/portugal';
import { PuertoRico } from './countries/puerto-rico';
import { Romania } from './countries/romania';
import { AsianRussia, EuropeanRussia, Russia } from './countries/russia';
import { Scotland } from './countries/scotland';
import { Slovakia } from './countries/slovakia';
import { Slovenia } from './countries/slovenia';
import { Spain } from './countries/spain';
import { SriLanka } from './countries/sri-lanka';
import { Sweden } from './countries/sweden';
import { Switzerland } from './countries/switzerland';
import { Ukraine } from './countries/ukraine';
import { UnitedStates } from './countries/united-states';
import { Uruguay } from './countries/uruguay';
import { Venezuela } from './countries/venezuela';
import { Vietnam } from './countries/vietnam';
import { Wales } from './countries/wales';
import { GeneralRoman } from './general-roman';
import { Africa } from './regions/africa';
import { Americas } from './regions/americas';
import { Asia } from './regions/asia';
import { Europe } from './regions/europe';

export const calendarDefinitions: Record<string, typeof CalendarDef> = {
  Africa,
  Americas,
  Asia,
  Argentina,
  Australia,
  Austria,
  Belgium,
  Bolivia,
  BosniaHerzegovina,
  Brazil,
  Canada,
  Chile,
  China,
  CostaRica,
  Croatia,
  CzechRepublic,
  Denmark,
  England,
  Europe,
  Finland,
  France,
  France_Albi,
  France_Angers,
  France_Cahors,
  France_Coutances,
  France_Laval,
  France_Lyon,
  France_LourdesSanctuary,
  France_Montauban,
  France_Pamiers,
  France_Paris,
  France_Rodez,
  France_SaintDenis,
  France_Strasbourg,
  France_TarbesLourdes,
  France_Toulouse,
  GeneralRoman,
  Germany,
  Greece,
  Guatemala,
  HongKong,
  Hungary,
  India,
  Ireland,
  Italy,
  Japan,
  Lebanon,
  Lithuania,
  Malta,
  Mexico,
  Netherlands,
  NewZealand,
  Norway,
  Panama,
  Paraguay,
  Peru,
  Philippines,
  Poland,
  Portugal,
  PuertoRico,
  Romania,
  Russia,
  AsianRussia,
  EuropeanRussia,
  Scotland,
  Slovakia,
  Slovenia,
  Spain,
  SriLanka,
  Sweden,
  Switzerland,
  Ukraine,
  UnitedStates,
  Uruguay,
  Venezuela,
  Vietnam,
  Wales,
};
