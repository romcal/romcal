# Lunar New Year Date Calculator

This package provides a utility to calculate the date of Lunar New Year using Jean Meeus's astronomical algorithms (winter solstice + new moon phases).

## Usage

```ts
import { calculateLunarNewYear } from '@internal/lunar-new-year';

// UTC+8 for China/Hong Kong/Taiwan
const date = calculateLunarNewYear(2025, 8);
// { year: 2025, month: 1, day: 29 }

// UTC+7 for Vietnam
const dateVietnam = calculateLunarNewYear(2025, 7);

// UTC+9 for Korea/Japan
const dateKorea = calculateLunarNewYear(2025, 9);
```
