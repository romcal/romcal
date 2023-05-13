import path from 'node:path';

import { yamlImports } from './yaml.helpers';

const fixturesDir = path.join(__dirname, '..', '..', '__tests__', 'fixtures');

describe('yamlImports', () => {
  it('should load a single YAML file', () => {
    const singleFilePath = path.join(fixturesDir, 'martyrology_file-1.yaml');
    const result = yamlImports({ entryPoints: singleFilePath });
    expect(result).toMatchObject({
      [singleFilePath]: [
        { id: 'basil_the_great_bishop', canonizationLevel: 'saint' },
        { id: 'gregory_nazianzen_bishop', canonizationLevel: 'saint' },
      ],
    });
  });

  it('should load multiple YAML files', () => {
    const entryPoints = path.join(fixturesDir, 'martyrology_file-*.yaml');
    const result = yamlImports({ entryPoints });

    expect(result).toEqual({
      [path.join(fixturesDir, 'martyrology_file-1.yaml')]: [
        { id: 'basil_the_great_bishop', canonizationLevel: 'saint' },
        { id: 'gregory_nazianzen_bishop', canonizationLevel: 'saint' },
      ],
      [path.join(fixturesDir, 'martyrology_file-2.yaml')]: [
        { id: 'john_bosco_priest', canonizationLevel: 'saint' },
        { id: 'peter_damian_bishop', canonizationLevel: 'saint' },
      ],
    });
  });

  it('should support custom ID function', () => {
    const ids: string[] = [];
    const entryPoints = path.join(fixturesDir, 'locale_*.yaml');
    yamlImports({ entryPoints });

    yamlImports({
      entryPoints,
      getId: (locale: { localeCode: string }) => {
        ids.push(locale.localeCode);
        return locale.localeCode;
      },
    });
    expect(ids.sort()).toEqual(['en', 'en-IE', 'fr']);
  });

  it('should call onFindDuplicates if there are duplicated IDs', () => {
    const mockOnFindDuplicates = jest.fn();
    const entryPoints = path.join(fixturesDir, '{locale_en,duplicated-locale_en}.yaml');

    yamlImports({
      entryPoints,
      getId: (locale: { localeCode: string }) => locale.localeCode,
      onFindDuplicates: mockOnFindDuplicates,
    });

    expect(mockOnFindDuplicates).toHaveBeenCalledTimes(1);
    expect(mockOnFindDuplicates).toHaveBeenCalledWith(['en']);
  });
});
