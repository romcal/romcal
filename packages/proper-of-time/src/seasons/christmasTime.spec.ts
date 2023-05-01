import { christmasTime } from './christmasTime';

describe('christmasTime', () => {
  it('should match snapshot', () => {
    expect(christmasTime()).toMatchSnapshot();
  });

  it('should match snapshot with year offset to +1', () => {
    expect(christmasTime(+1)).toMatchSnapshot();
  });
});
