import { CalendarDef } from '../models/calendar-def';

import { Argentina } from './countries/argentina/argentina';
import { Australia } from './countries/australia/australia';
import { Austria } from './countries/austria/austria';
import { Belgium } from './countries/belgium/belgium';
import { Bolivia } from './countries/bolivia/bolivia';
import { BosniaHerzegovina } from './countries/bosnia-herzegovina/bosnia-herzegovina';
import { Brazil } from './countries/brazil/brazil';
import { Canada } from './countries/canada/canada';
import { Chile } from './countries/chile/chile';
import { China } from './countries/china/china';
import { CostaRica } from './countries/costa-rica/costa-rica';
import { Croatia } from './countries/croatia/croatia';
import { CzechRepublic } from './countries/czech-republic/czech-republic';
import { Denmark } from './countries/denmark/denmark';
import { England } from './countries/england/england';
import { Finland } from './countries/finland/finland';
import { France_Lyon } from './countries/france/archdiocese-of-lyon/archdiocese-of-lyon';
import { France_Paris } from './countries/france/archdiocese-of-paris/archdiocese-of-paris';
import { France_Angers } from './countries/france/diocese-of-angers/diocese-of-angers';
import { France_Coutances } from './countries/france/diocese-of-coutances/diocese-of-coutances';
import { France_SaintDenis } from './countries/france/diocese-of-saint-denis/diocese-of-saint-denis';
import { France_Strasbourg } from './countries/france/diocese-of-strasbourg/diocese-of-strasbourg';
import { France } from './countries/france/france';
import { Germany } from './countries/germany/germany';
import { Greece } from './countries/greece/greece';
import { Guatemala } from './countries/guatemala/guatemala';
import { Hungary } from './countries/hungary/hungary';
import { India } from './countries/india/india';
import { Ireland } from './countries/ireland/ireland';
import { Italy } from './countries/italy/italy';
import { Japan } from './countries/japan/japan';
import { Lebanon } from './countries/lebanon/lebanon';
import { Lithuania } from './countries/lithuania/lithuania';
import { Malta } from './countries/malta/malta';
import { Mexico } from './countries/mexico/mexico';
import { Netherlands } from './countries/netherlands/netherlands';
import { NewZealand } from './countries/new-zealand/new-zealand';
import { Norway } from './countries/norway/norway';
import { Panama } from './countries/panama/panama';
import { Paraguay } from './countries/paraguay/paraguay';
import { Peru } from './countries/peru/peru';
import { Philippines } from './countries/philippines/philippines';
import { Poland } from './countries/poland/poland';
import { Portugal } from './countries/portugal/portugal';
import { PuertoRico } from './countries/puerto-rico/puerto-rico';
import { Romania } from './countries/romania/romania';
import { Russia } from './countries/russia/russia';
import { Scotland } from './countries/scotland/scotland';
import { Slovakia } from './countries/slovakia/slovakia';
import { Slovenia } from './countries/slovenia/slovenia';
import { Spain } from './countries/spain/spain';
import { SriLanka } from './countries/sri-lanka/sri-lanka';
import { Sweden } from './countries/sweden/sweden';
import { Switzerland } from './countries/switzerland/switzerland';
import { Ukraine } from './countries/ukraine/ukraine';
import { UnitedStates } from './countries/united-states/united-states';
import { Uruguay } from './countries/uruguay/uruguay';
import { Venezuela } from './countries/venezuela/venezuela';
import { Vietnam } from './countries/vietnam/vietnam';
import { Wales } from './countries/wales/wales';
import { GeneralRoman } from './general-roman/general-roman';
import { Americas } from './regions/americas';
import { Europe } from './regions/europe';

export const calendarDefinitions: Record<string, typeof CalendarDef> = {
  Americas,
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
  France_Angers,
  France_Coutances,
  France_Lyon,
  France_Paris,
  France_SaintDenis,
  France_Strasbourg,
  GeneralRoman,
  Germany,
  Greece,
  Guatemala,
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
