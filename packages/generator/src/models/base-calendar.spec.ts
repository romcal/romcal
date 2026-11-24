import { CalendarDef } from './calendar-def';

type BaseCalendar = typeof import('./base-calendar');

// Each test loads a fresh copy of the module, because the registry is module state.
const load = (): BaseCalendar => {
  let loaded: BaseCalendar | undefined;
  jest.isolateModules(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    loaded = require('./base-calendar') as BaseCalendar;
  });
  return loaded as BaseCalendar;
};

describe('base-calendar.ts', () => {
  it('refuses to hand out a base calendar before one is registered', () => {
    expect(() => load().getBaseCalendar()).toThrow('No base calendar has been registered');
  });

  it('hands out the base calendar that was registered', () => {
    const { getBaseCalendar, registerBaseCalendar } = load();
    const calendar = class Stand {} as unknown as typeof CalendarDef;

    registerBaseCalendar(calendar);

    expect(getBaseCalendar()).toBe(calendar);
  });

  it('replaces the base calendar when another one is registered', () => {
    const { getBaseCalendar, registerBaseCalendar } = load();
    const first = class First {} as unknown as typeof CalendarDef;
    const second = class Second {} as unknown as typeof CalendarDef;

    registerBaseCalendar(first);
    registerBaseCalendar(second);

    expect(getBaseCalendar()).toBe(second);
  });
});
