import { lent } from './lent';

describe('lent', () => {
  it('should match snapshot', () => {
    expect(lent()).toMatchSnapshot();
  });

  it('should match snapshot with year offset to +1', () => {
    expect(lent(+1)).toMatchSnapshot();
  });
});
