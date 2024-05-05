import { LiturgicalCalendar, Romcal } from '../src';

describe('Romcal library', () => {
  let data: LiturgicalCalendar;

  let timeoutSpy: jest.SpyInstance;

  // Act before assertions
  beforeAll(async () => {
    // Read more about fake timers
    // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
    // Jest 27 now uses "modern" implementation of fake timers
    // https://jestjs.io/blog/2021/05/25/jest-27#flipping-defaults
    // https://github.com/facebook/jest/pull/5171
    jest.useFakeTimers();
    timeoutSpy = jest.spyOn(global, 'setTimeout');

    const calendar = new Romcal();

    data = await calendar.generateCalendar(2021);

    jest.runOnlyPendingTimers();
  });

  // Teardown (cleanup) after assertions
  afterAll(() => {
    timeoutSpy.mockRestore();
  });

  // Assert greeter result
  it('generate a romcal calendar, and check the number of items', () => {
    expect(Object.keys(data).length).toBe(365);
  });
});
