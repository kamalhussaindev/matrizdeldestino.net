import type { IconName } from '../components/ui/icon-names';

export interface CalculatorMeta {
  slug: string;
  label: string;
  description: string;
  href: string;
  icon: IconName;
}

// Single source of truth for every calculator on the site — adding a new
// calculator later is just adding an entry here. Consumed by
// /calculadoras/ (full list) and by each calculator page's "Calculadoras
// relacionadas" rail (filtered to exclude itself).
export const calculators: CalculatorMeta[] = [
  {
    slug: 'matriz-del-destino',
    label: 'Main Calculator',
    description: 'Calculate your complete personal Matriz del Destino.',
    href: '/matriz-del-destino/',
    icon: 'sparkle',
  },
  {
    slug: 'compatibilidad',
    label: 'Compatibility Calculator',
    description: "Compare your matrix with your partner's and discover shared energies.",
    href: '/matriz-del-destino/compatibilidad/',
    icon: 'users',
  },
  {
    slug: 'matriz-infantil',
    label: 'Child Matrix',
    description: "Discover your child's talents and purpose from an early age.",
    href: '/matriz-del-destino/matriz-infantil/',
    icon: 'child',
  },
];
