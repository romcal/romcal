import { Title } from '../constants';
import { isMartyrologyItemRedefined } from './isMartyrologyItemRedefined.util';

describe('isMartyrologyItemRedefined', () => {
  it('should return true if the input is a valid MartyrologyItemRedefined', () => {
    const input = {
      id: 'martyr_john_doe',
      titles: { prepend: [Title.Martyr] },
      hideTitles: true,
      count: 3,
    };
    expect(isMartyrologyItemRedefined(input)).toBe(true);
  });

  it('should return false if the input is null or not an object', () => {
    expect(isMartyrologyItemRedefined(null)).toBe(false);
    expect(isMartyrologyItemRedefined('string')).toBe(false);
    expect(isMartyrologyItemRedefined(123)).toBe(false);
  });

  it('should return false if the input object does not have an "id" property', () => {
    const input = {
      titles: { prepend: [Title.Martyr] },
    };
    expect(isMartyrologyItemRedefined(input)).toBe(false);
  });

  it('should return false if the "id" property of the input object is not a string', () => {
    const input = {
      id: 123,
      titles: { prepend: [Title.Martyr] },
    };
    expect(isMartyrologyItemRedefined(input)).toBe(false);
  });
});
