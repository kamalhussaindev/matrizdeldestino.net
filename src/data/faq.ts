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

export const calculatorFaq: FaqItem[] = [
  {
    question: '¿Qué datos necesito para calcular mi matriz?',
    answer:
      'Solo tu fecha de nacimiento completa (día, mes y año). Tu nombre es opcional y únicamente sirve para personalizar el resultado que ves en pantalla — no forma parte del cálculo.',
  },
  {
    question: '¿Por qué son 22 arcanos y no otra cantidad?',
    answer:
      'La Matriz del Destino toma los 22 arcanos mayores del tarot — de El Mago a El Loco — como su alfabeto simbólico. Por eso cada posición del octagrama siempre se reduce a un número entre 1 y 22: cada valor corresponde a la energía de un arcano específico.',
  },
  {
    question: '¿Qué es la cola kármica?',
    answer:
      'Es una secuencia de tres arcanos, ubicada en la parte inferior de tu matriz, que describe patrones que se repiten casi de forma automática en tu vida — muchas veces heredados de tu historia familiar — y que esta herramienta te ayuda a identificar para trabajarlos de forma consciente.',
  },
  {
    question: '¿Qué es el punto E o zona de confort?',
    answer:
      'Es el arcano central de tu matriz, resultado de sumar tu día, mes, año y su propia síntesis. Representa la energía en la que te sientes más cómodo y a la que vuelves de forma natural, incluso cuando la vida te empuja hacia otros desafíos.',
  },
  {
    question: '¿Qué es la línea del dinero?',
    answer:
      'Es la posición que describe tu relación con la prosperidad: cómo sueles generar, recibir y administrar recursos, y qué bloqueos energéticos conviene tener presentes en tu vida profesional y financiera.',
  },
  {
    question: '¿Puedo interpretar mi matriz sin ayuda de un experto?',
    answer:
      'Sí. Diseñamos cada posición para que se explique a sí misma: combinamos el significado de esa posición con el arcano que cayó ahí, en lenguaje claro y sin jerga.',
  },
  {
    question: '¿La Matriz del Destino cambia con el tiempo?',
    answer:
      'Tu matriz personal — la que se calcula desde tu fecha de nacimiento — es fija y no cambia. Lo que sí evoluciona es tu forma de relacionarte con esas energías a medida que las trabajas conscientemente a lo largo de la vida.',
  },
  {
    question: '¿De dónde viene este método?',
    answer:
      'Fue desarrollado por la numeróloga rusa Natalia Ladini en 2006, integrando numerología, los arcanos mayores del tarot y la tradición de los chakras. En nuestra página de método explicamos con transparencia cómo replicamos ese cálculo.',
  },
];

export const compatibilityFaq: FaqItem[] = [
  {
    question: '¿Cómo se calcula la compatibilidad de pareja?',
    answer:
      'Calculamos por separado la Matriz del Destino de cada persona, a partir de sus fechas de nacimiento, y luego comparamos sus arcanos centrales y sus posiciones principales para identificar energías compartidas y complementarias entre ambos.',
  },
  {
    question: '¿Qué significa que compartamos un arcano?',
    answer:
      'Cuando dos personas tienen el mismo arcano en una posición clave — por ejemplo, el mismo punto central — suele indicar una afinidad natural en esa área de la vida: se reconocen con facilidad en esa energía compartida.',
  },
  {
    question: '¿Un arcano distinto en el centro significa que no somos compatibles?',
    answer:
      'No. Las energías distintas no significan incompatibilidad, sino complementariedad: cada persona aporta algo que la otra no tiene, y eso también puede ser una base sólida para la relación si ambos aprenden a valorar esa diferencia.',
  },
  {
    question: '¿Necesito el consentimiento de la otra persona?',
    answer:
      'Solo necesitas su fecha de nacimiento para calcular su matriz. Como con cualquier dato personal, recomendamos usar esta herramienta con el conocimiento y consentimiento de la otra persona.',
  },
  {
    question: '¿Funciona para amistades o solo para parejas románticas?',
    answer:
      'Funciona para cualquier vínculo entre dos personas — parejas románticas, amistades, socios de negocio o familia. La comparación de energías es la misma; lo que cambia es el contexto en el que eliges interpretarla.',
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
