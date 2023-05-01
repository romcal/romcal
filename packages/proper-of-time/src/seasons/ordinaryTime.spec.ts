import { ordinaryTime } from './ordinaryTime';

describe('ordinaryTime', () => {
  it('should match snapshot', () => {
    expect(ordinaryTime()).toMatchSnapshot();
  });

  it('should match snapshot with year offset to +1', () => {
    expect(ordinaryTime(+1)).toMatchSnapshot();
  });
});
