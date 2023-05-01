import { paschalTriduum } from './paschalTriduum';

describe('paschalTriduum', () => {
  it('should match snapshot', () => {
    expect(paschalTriduum()).toMatchSnapshot();
  });

  it('should match snapshot with year offset to +1', () => {
    expect(paschalTriduum(+1)).toMatchSnapshot();
  });
});
