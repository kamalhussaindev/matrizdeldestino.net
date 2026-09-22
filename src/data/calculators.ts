import type { IconName } from '../components/ui/icon-names';

export interface CalculatorMeta {
  slug: string;
  label: string;
  description: string;
  href: string;
  icon: IconName;
}

// Single source of truth for every calculator we actively promote. Kept
// deliberately lean: only the two indexable calculators appear here, so the
// "Calculadoras relacionadas" rail never points readers at a noindexed page.
export const calculators: CalculatorMeta[] = [
  {
    slug: 'matriz-del-destino',
    label: 'Calculadora Principal',
    description: 'Calcula tu Matriz del Destino personal completa.',
    href: '/matriz-del-destino/',
    icon: 'sparkle',
  },
  {
    slug: 'compatibilidad',
    label: 'Compatibilidad de Pareja',
    description: 'Compara tu matriz con la de tu pareja y descubre las energías compartidas.',
    href: '/matriz-del-destino/compatibilidad/',
    icon: 'users',
  },
];
