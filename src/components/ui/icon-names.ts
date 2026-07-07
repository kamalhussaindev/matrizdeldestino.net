// Plain .ts source of truth for the icon name union — kept separate from
// Icon.astro because plain .ts files (e.g. src/data/calculators.ts) can't
// reliably import types from a .astro file: Astro's own checker
// (astro check) resolves that fine, but vanilla `tsc` cannot, which
// surfaces as a phantom tsconfig/type error outside the Astro tooling.
export type IconName =
  | 'chevron-down'
  | 'check'
  | 'sparkle'
  | 'share'
  | 'menu'
  | 'close'
  | 'compass'
  | 'heart'
  | 'coins'
  | 'infinity'
  | 'users'
  | 'child';
