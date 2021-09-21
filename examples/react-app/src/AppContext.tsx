import * as React from 'react';
import { RomcalStore } from './stores';

export function createStores() {
  return { romcalStore: new RomcalStore() };
}

export const stores = createStores();

export const AppContext = React.createContext(stores);
