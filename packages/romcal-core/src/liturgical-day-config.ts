/**
 * Per-year runtime context shared by every rite. Generic over the
 * rite-specific config type (1969's `RomcalConfig`, 1962's
 * `Romcal1962Config`) so implementations can expose their own
 * config surface while still satisfying the shared contract.
 *
 * @template TConfig - rite-specific config class type
 */
export interface ILiturgicalDayConfigRoot<TConfig> {
  readonly config: TConfig;
  readonly year: number;
}
