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
    label: 'Calculadora principal',
    description: 'Calcula tu propia Matriz del Destino completa.',
    href: '/matriz-del-destino/',
    icon: 'sparkle',
  },
  {
    slug: 'compatibilidad',
    label: 'Compatibilidad de pareja',
    description: 'Compara tu matriz con la de tu pareja y descubre energías compartidas.',
    href: '/matriz-del-destino/compatibilidad/',
    icon: 'users',
  },
  {
    slug: 'matriz-infantil',
    label: 'Matriz infantil',
    description: 'Descubre los talentos y el propósito de tu hijo/a desde pequeño.',
    href: '/matriz-del-destino/matriz-infantil/',
    icon: 'child',
  },
];
