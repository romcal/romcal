import type { Celebration1962 } from './types';

export interface PendingTransfer {
  originalDate: string;
  feast: Celebration1962;
}

/**
 * A day is a valid transfer target if its current primary is NOT
 * Class I or II — i.e. a Class III Sancti or any Class IV. The
 * transferred feast (Class I) displaces the current primary, which
 * then becomes a commemoration (if eligible).
 */
export function isTransferTarget(primary: Celebration1962): boolean {
  return primary.classOf1962 >= 3;
}

/**
 * Pop the earliest pending feast from the queue. Mutates the queue.
 */
export function popEarliest(queue: PendingTransfer[]): PendingTransfer | undefined {
  return queue.shift();
}
