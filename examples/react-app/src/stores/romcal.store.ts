import { addMonths, subMonths } from 'date-fns';
import { makeAutoObservable, runInAction } from 'mobx';
import Romcal, { BaseLiturgicalDay } from 'romcal';
import { CALENDARS } from '../constants/calendars';

export class RomcalStore {
  fetchingData: boolean = false;
  yearlyData: BaseLiturgicalDay[][] = [];
  monthlyData: BaseLiturgicalDay[][] = [];
  localeKey: string = 'En';
  calendarKey: string = 'GeneralRoman';
  currentYear: number = new Date().getUTCFullYear();
  currentMonth: number = new Date().getUTCMonth();

  constructor() {
    makeAutoObservable(this);
  }

  fetchRomcalData = async () => {
    if (this.yearlyData.length === 0) {
      const calendar = (await CALENDARS[this.calendarKey])[`${this.calendarKey}_${this.localeKey}`];
      const romcal = new Romcal({ localizedCalendar: calendar });
      const data = await romcal.generateCalendar(this.currentYear).then(Object.values);
      runInAction(() => {
        this.yearlyData = data;
      });
    }
    return Promise.resolve();
  };

  getMonthData = () => {
    runInAction(() => (this.fetchingData = true));
    this.fetchRomcalData().then(() => {
      const monthlyData = this.yearlyData.filter((days) => new Date(days[0].date).getUTCMonth() === this.currentMonth);
      runInAction(() => {
        this.monthlyData = monthlyData;
        this.fetchingData = false;
      });
    });
  };

  setCalendarKey = (key: string): void => {
    this.calendarKey = key;
    this.yearlyData = [];
    this.getMonthData();
  };

  setLocaleKey = (key: string): void => {
    this.localeKey = key;
    this.yearlyData = [];
    this.getMonthData();
  };

  setDate = (date: Date): void => {
    const newYear = date.getUTCFullYear();
    if (newYear !== this.currentMonth) this.yearlyData = [];
    this.currentYear = newYear;
    this.currentMonth = date.getUTCMonth();
    this.getMonthData();
  };

  setPreviousMonth = (): void => {
    const newDate = subMonths(new Date(this.currentYear, this.currentMonth, 1), 1);
    if (newDate.getUTCFullYear() !== this.currentMonth) this.yearlyData = [];
    this.currentYear = newDate.getUTCFullYear();
    this.currentMonth = newDate.getUTCMonth();
    this.getMonthData();
  };

  setNextMonth = (): void => {
    const newDate = addMonths(new Date(this.currentYear, this.currentMonth, 1), 1);
    if (newDate.getUTCFullYear() !== this.currentMonth) this.yearlyData = [];
    this.currentYear = newDate.getUTCFullYear();
    this.currentMonth = newDate.getUTCMonth();
    this.getMonthData();
  };
}
