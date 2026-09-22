import type { IconName } from '../components/ui/icon-names';

export interface CalculatorMeta {
  slug: string;
  label: string;
  description: string;
  href: string;
  icon: IconName;
}

// Single source of truth for the calculators we promote. Both now live on
// the homepage — the old /matriz-del-destino/ URLs 301 to it (public/_redirects)
// — so these link straight to the live destination rather than through a hop.
export const calculators: CalculatorMeta[] = [
  {
    slug: 'matriz-del-destino',
    label: 'Calculadora Principal',
    description: 'Calcula tu Matriz del Destino personal completa.',
    href: '/',
    icon: 'sparkle',
  },
  {
    slug: 'compatibilidad',
    label: 'Compatibilidad de Pareja',
    description: 'Compara tu matriz con la de tu pareja y descubre las energías compartidas.',
    href: '/?tab=compatibilidad',
    icon: 'users',
  },
];
