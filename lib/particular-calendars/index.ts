import { CalendarDef } from '@romcal/models/calendar-def';
import { Americas } from '@romcal/particular-calendars/americas';
import { Argentina } from '@romcal/particular-calendars/argentina';
import { Australia } from '@romcal/particular-calendars/australia';
import { Austria } from '@romcal/particular-calendars/austria';
import { Belgium } from '@romcal/particular-calendars/belgium';
import { Bolivia } from '@romcal/particular-calendars/bolivia';
import { BosniaHerzegovina } from '@romcal/particular-calendars/bosnia-herzegovina';
import { Brazil } from '@romcal/particular-calendars/brazil';
import { Canada } from '@romcal/particular-calendars/canada';
import { Chile } from '@romcal/particular-calendars/chile';
import { China } from '@romcal/particular-calendars/china';
import { CostaRica } from '@romcal/particular-calendars/costa-rica';
import { Croatia } from '@romcal/particular-calendars/croatia';
import { CzechRepublic } from '@romcal/particular-calendars/czech-republic';
import { Denmark } from '@romcal/particular-calendars/denmark';
import { England } from '@romcal/particular-calendars/england';
import { Europe } from '@romcal/particular-calendars/europe';
import { Finland } from '@romcal/particular-calendars/finland';
import { France } from '@romcal/particular-calendars/france';
import { France_Paris } from '@romcal/particular-calendars/france.paris';
import { France_SaintDenis } from '@romcal/particular-calendars/france.saint-denis';
import { Germany } from '@romcal/particular-calendars/germany';
import { Greece } from '@romcal/particular-calendars/greece';
import { Guatemala } from '@romcal/particular-calendars/guatemala';
import { Hungary } from '@romcal/particular-calendars/hungary';
import { India } from '@romcal/particular-calendars/india';
import { Ireland } from '@romcal/particular-calendars/ireland';
import { Italy } from '@romcal/particular-calendars/italy';
import { Japan } from '@romcal/particular-calendars/japan';
import { Lebanon } from '@romcal/particular-calendars/lebanon';
import { Lithuania } from '@romcal/particular-calendars/lithuania';
import { Malta } from '@romcal/particular-calendars/malta';
import { Mexico } from '@romcal/particular-calendars/mexico';
import { Netherlands } from '@romcal/particular-calendars/netherlands';
import { NewZealand } from '@romcal/particular-calendars/new-zealand';
import { Norway } from '@romcal/particular-calendars/norway';
import { Panama } from '@romcal/particular-calendars/panama';
import { Paraguay } from '@romcal/particular-calendars/paraguay';
import { Peru } from '@romcal/particular-calendars/peru';
import { Philippines } from '@romcal/particular-calendars/philippines';
import { Poland } from '@romcal/particular-calendars/poland';
import { Portugal } from '@romcal/particular-calendars/portugal';
import { PuertoRico } from '@romcal/particular-calendars/puerto-rico';
import { Romania } from '@romcal/particular-calendars/romania';
import { Russia } from '@romcal/particular-calendars/russia';
import { Scotland } from '@romcal/particular-calendars/scotland';
import { Slovakia } from '@romcal/particular-calendars/slovakia';
import { Slovenia } from '@romcal/particular-calendars/slovenia';
import { Spain } from '@romcal/particular-calendars/spain';
import { SriLanka } from '@romcal/particular-calendars/sri-lanka';
import { Sweden } from '@romcal/particular-calendars/sweden';
import { Switzerland } from '@romcal/particular-calendars/switzerland';
import { Ukraine } from '@romcal/particular-calendars/ukraine';
import { UnitedStates } from '@romcal/particular-calendars/united-states';
import { Uruguay } from '@romcal/particular-calendars/uruguay';
import { Venezuela } from '@romcal/particular-calendars/venezuela';
import { Vietnam } from '@romcal/particular-calendars/vietnam';
import { Wales } from '@romcal/particular-calendars/wales';

export const particularCalendars: Record<string, typeof CalendarDef> = {
  americas: Americas,
  argentina: Argentina,
  australia: Australia,
  austria: Austria,
  belgium: Belgium,
  bolivia: Bolivia,
  bosniaHerzegovina: BosniaHerzegovina,
  brazil: Brazil,
  canada: Canada,
  chile: Chile,
  china: China,
  costaRica: CostaRica,
  croatia: Croatia,
  czechRepublic: CzechRepublic,
  denmark: Denmark,
  england: England,
  europe: Europe,
  finland: Finland,
  france: France,
  france_paris: France_Paris,
  France_saintDenis: France_SaintDenis,
  germany: Germany,
  greece: Greece,
  guatemala: Guatemala,
  hungary: Hungary,
  india: India,
  ireland: Ireland,
  italy: Italy,
  japan: Japan,
  lebanon: Lebanon,
  lithuania: Lithuania,
  malta: Malta,
  mexico: Mexico,
  netherlands: Netherlands,
  newZealand: NewZealand,
  norway: Norway,
  panama: Panama,
  paraguay: Paraguay,
  peru: Peru,
  philippines: Philippines,
  poland: Poland,
  portugal: Portugal,
  puertoRico: PuertoRico,
  romania: Romania,
  russia: Russia,
  scotland: Scotland,
  slovakia: Slovakia,
  slovenia: Slovenia,
  spain: Spain,
  sriLanka: SriLanka,
  sweden: Sweden,
  switzerland: Switzerland,
  ukraine: Ukraine,
  unitedStates: UnitedStates,
  uruguay: Uruguay,
  venezuela: Venezuela,
  vietnam: Vietnam,
  wales: Wales,
};
