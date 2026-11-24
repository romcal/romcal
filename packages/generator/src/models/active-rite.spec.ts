import { Rite } from '../types/rite';

type ActiveRite = typeof import('./active-rite');

// Each test loads a fresh copy of the module, because the registry is module state.
const load = (): ActiveRite => {
  let loaded: ActiveRite | undefined;
  jest.isolateModules(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    loaded = require('./active-rite') as ActiveRite;
  });
  return loaded as ActiveRite;
};

describe('active-rite.ts', () => {
  it('refuses to hand out a rite before one is registered', () => {
    expect(() => load().getRite()).toThrow('No rite has been registered');
  });

  it('hands out the rite that was registered', () => {
    const { getRite, registerRite } = load();
    const rite = { name: 'test-rite' } as unknown as Rite<never>;

    registerRite(rite);

    expect(getRite()).toBe(rite);
  });

  it('replaces the rite when another one is registered', () => {
    const { getRite, registerRite } = load();
    const first = { name: 'first' } as unknown as Rite<never>;
    const second = { name: 'second' } as unknown as Rite<never>;

    registerRite(first);
    registerRite(second);

    expect(getRite()).toBe(second);
  });
});
