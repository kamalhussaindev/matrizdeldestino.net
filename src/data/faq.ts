export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: '¿Qué es la Matriz del Destino?',
    answer:
      'Un sistema de autoconocimiento creado por la numeróloga Natalia Ladini en 2006. Combina numerología, los 22 arcanos mayores del tarot y energía de los chakras. A partir de tu fecha de nacimiento construye un mapa — el octagrama — que describe tu personalidad, talentos, relaciones y propósito de vida.',
  },
  {
    question: '¿Cómo se calcula mi Matriz del Destino?',
    answer:
      'Reducimos tu día, mes y año de nacimiento a números del 1 al 22 (si el resultado supera 22, sumamos sus dígitos). Con esos tres valores construimos las posiciones restantes del octagrama: tu punto central, tus líneas y tus propósitos. Todo el cálculo ocurre en tu navegador — tu fecha nunca se envía a ningún servidor.',
  },
  {
    question: '¿Necesito pagar para ver mi resultado?',
    answer:
      'No. El cálculo completo — octagrama, líneas, propósitos e interpretación de cada posición — es 100% gratis y no requiere registro.',
  },
  {
    question: '¿Es lo mismo que el tarot o la numerología tradicional?',
    answer:
      'Comparte elementos con ambos — usa los 22 arcanos mayores y una lógica de reducción numerológica — pero es un sistema propio con su propia estructura (el octagrama) y su propio método de cálculo, distinto de una tirada de tarot o una carta numerológica clásica.',
  },
  {
    question: '¿Qué tan preciso es el cálculo?',
    answer:
      'La fórmula que usamos reproduce el modelo estándar de puntos y propósitos de la Matriz del Destino, así que tu resultado coincide con el de otras calculadoras reconocidas. Como toda herramienta de autoconocimiento, ofrece una interpretación simbólica, no una medición científica.',
  },
  {
    question: '¿Puedo calcular la matriz de otra persona?',
    answer:
      'Sí. Solo necesitas su fecha de nacimiento (el nombre es opcional). También tenemos una calculadora de compatibilidad de pareja dedicada.',
  },
  {
    question: '¿Qué significa el arcano central o punto E?',
    answer:
      'Es la síntesis de tu día, mes y año de nacimiento y representa tu zona de confort — la energía en la que te sientes más cómodo y a la que vuelves una y otra vez a lo largo de la vida.',
  },
  {
    question: '¿Se almacenan mis datos?',
    answer:
      'No. El cálculo ocurre completamente en tu dispositivo y jamás almacenamos tu fecha de nacimiento en ningún servidor.',
  },
];

export const childFaq: FaqItem[] = [
  {
    question: '¿A partir de qué edad puedo calcular la matriz de mi hijo/a?',
    answer:
      'Puedes calcularla desde el nacimiento. La matriz se construye únicamente con la fecha de nacimiento, así que es igual de válida para un bebé que para un adolescente.',
  },
  {
    question: '¿Para qué sirve conocer la matriz infantil?',
    answer:
      'Te ayuda a entender los talentos naturales, las energías dominantes y las posibles tendencias de tu hijo/a desde una edad temprana, para acompañarlo de una manera más consciente de su forma particular de ser, sin forzar comparaciones con otros niños.',
  },
  {
    question: '¿Debo compartir el resultado con mi hijo/a?',
    answer:
      'Depende de su edad y madurez. Con niños pequeños, el resultado suele ser más útil como guía para los padres; con adolescentes, compartirlo puede abrir una conversación valiosa sobre sus propios talentos e intereses.',
  },
  {
    question: '¿Reemplaza una evaluación psicológica o vocacional?',
    answer:
      'No. Es una herramienta de autoconocimiento y acompañamiento, no un diagnóstico clínico ni una evaluación profesional. Si tienes dudas sobre el desarrollo de tu hijo/a, siempre es mejor consultar con un especialista.',
  },
  {
    question: '¿Puedo calcular la matriz de varios hijos?',
    answer:
      'Sí, puedes calcular la matriz de cada uno de tus hijos las veces que quieras; el cálculo es gratuito y no requiere registro ni límite de usos.',
  },
];
