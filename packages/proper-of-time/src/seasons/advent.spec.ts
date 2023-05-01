import { advent } from './advent';

describe('advent', () => {
  it('should match snapshot', () => {
    expect(advent()).toMatchSnapshot();
  });

  it('should match snapshot with year offset to +1', () => {
    expect(advent(+1)).toMatchSnapshot();
  });
});
