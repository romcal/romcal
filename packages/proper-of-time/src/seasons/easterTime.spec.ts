import { easterTime } from './easterTime';

describe('easterTime', () => {
  it('should match snapshot', () => {
    expect(easterTime()).toMatchSnapshot();
  });

  it('should match snapshot with year offset to +1', () => {
    expect(easterTime(+1)).toMatchSnapshot();
  });
});
