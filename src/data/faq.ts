export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: '¿Qué es la Matriz del Destino?',
    answer:
      'Es un sistema de autoconocimiento creado por la numeróloga Natalia Ladini en 2006, que combina numerología, los 22 arcanos mayores del tarot y la energía de los chakras. A partir de tu fecha de nacimiento, construye un mapa —el octagrama— que describe tu personalidad, tus talentos, tus relaciones y tu propósito de vida.',
  },
  {
    question: '¿Cómo se calcula mi Matriz del Destino?',
    answer:
      'Reducimos el día, el mes y el año de tu nacimiento a números del 1 al 22 (si el resultado supera 22, sumamos sus dígitos). Con esos tres valores construimos el resto de las posiciones del octagrama: tu punto central, tus líneas y tus propósitos. Todo el cálculo ocurre en tu navegador; no enviamos tu fecha a ningún servidor.',
  },
  {
    question: '¿Necesito pagar para ver mi resultado?',
    answer:
      'No. El cálculo completo —octagrama, líneas, propósitos e interpretación de cada posición— es 100% gratis y no requiere registro. Ofrecemos un informe descargable en PDF como opción adicional para quien quiera profundizar todavía más.',
  },
  {
    question: '¿Es lo mismo que el tarot o la numerología tradicional?',
    answer:
      'Comparte elementos con ambos —usa los 22 arcanos mayores y una lógica de reducción numerológica—, pero es un sistema propio con su propia estructura (el octagrama) y su propio método de cálculo, distinto de una tirada de tarot o de una carta numerológica clásica.',
  },
  {
    question: '¿Qué tan preciso es este cálculo?',
    answer:
      'La fórmula que usamos reproduce el modelo estándar de puntos y propósitos de la Matriz del Destino, para que tu resultado coincida con el que verías en otras calculadoras reconocidas. Como toda herramienta de autoconocimiento, ofrece una interpretación simbólica, no una medición científica.',
  },
  {
    question: '¿Puedo calcular la matriz de otra persona?',
    answer:
      'Sí. Solo necesitas su fecha de nacimiento (el nombre es opcional, solo se usa para personalizar el resultado en pantalla). También tenemos una calculadora específica de compatibilidad de pareja y una versión pensada para niños y niñas.',
  },
  {
    question: '¿Qué significa el arcano central o punto E?',
    answer:
      'Es la síntesis de tu día, mes y año de nacimiento, y representa tu zona de confort: la energía en la que te sientes más a gusto y hacia la que tiendes a volver una y otra vez a lo largo de la vida.',
  },
  {
    question: '¿Mis datos quedan guardados o son públicos?',
    answer:
      'No. El cálculo se hace por completo en tu dispositivo y no guardamos tu fecha de nacimiento en ningún servidor. Si decides descargar el informe en PDF, solo pedimos tu correo para enviártelo.',
  },
  {
    question: '¿Funciona la calculadora en España, México y Argentina?',
    answer:
      'Sí. La Matriz del Destino se calcula igual en cualquier país: solo depende de tu fecha de nacimiento, no de tu ubicación. Escribimos todo el contenido en español neutro para que se entienda con claridad en España, México, Argentina, Colombia, Chile, Perú y el resto de la comunidad hispanohablante.',
  },
];

export const calculatorFaq: FaqItem[] = [
  {
    question: '¿Qué información necesito para calcular mi matriz?',
    answer:
      'Únicamente tu fecha de nacimiento completa (día, mes y año). El nombre es opcional y solo se usa para personalizar el resultado que ves en pantalla; no forma parte del cálculo.',
  },
  {
    question: '¿Por qué se usan 22 arcanos y no otro número?',
    answer:
      'La Matriz del Destino toma los 22 arcanos mayores del tarot —de El Loco a El Mundo— como su alfabeto simbólico. Por eso cada posición del octagrama siempre se reduce a un número entre 1 y 22: cada valor corresponde a la energía de un arcano específico.',
  },
  {
    question: '¿Qué es la cola kármica?',
    answer:
      'Es una secuencia de tres arcanos, ubicada en la parte inferior de tu matriz, que describe patrones que se repiten de forma casi automática en tu vida —a veces heredados de tu historia familiar— y que esta herramienta te ayuda a identificar para poder trabajarlos conscientemente.',
  },
  {
    question: '¿Qué es el punto E o zona de confort?',
    answer:
      'Es el arcano central de tu matriz, resultado de sumar tu día, mes, año y su propia síntesis. Representa la energía en la que te sientes más cómodo y a la que regresas naturalmente, incluso cuando la vida te empuja hacia otros retos.',
  },
  {
    question: '¿Qué es la línea del dinero?',
    answer:
      'Es la posición que describe tu relación con la prosperidad: cómo tiendes a generar, recibir y administrar recursos, y qué bloqueos energéticos conviene que tengas presentes en tu vida profesional y financiera.',
  },
  {
    question: '¿Puedo interpretar mi matriz sin ayuda de un experto?',
    answer:
      'Sí. Diseñamos cada posición para que se explique por sí misma: combinamos el significado de esa posición con el del arcano que te tocó ahí, en lenguaje claro y sin tecnicismos. Si quieres profundizar más, el informe completo en PDF amplía cada interpretación.',
  },
  {
    question: '¿La Matriz del Destino cambia con el tiempo?',
    answer:
      'Tu matriz personal —la que se calcula con tu fecha de nacimiento— es fija y no cambia. Lo que sí evoluciona es tu forma de relacionarte con esas energías a medida que las trabajas conscientemente a lo largo de la vida.',
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
      'Calculamos la Matriz del Destino de cada persona por separado, a partir de sus fechas de nacimiento, y luego comparamos sus arcanos centrales y sus posiciones principales para identificar energías compartidas y energías complementarias entre ambos.',
  },
  {
    question: '¿Qué significa que compartamos un arcano?',
    answer:
      'Cuando dos personas tienen el mismo arcano en una posición clave —por ejemplo, el mismo punto central— suele indicar una afinidad natural en esa área de la vida: se reconocen fácilmente en esa energía compartida.',
  },
  {
    question: '¿Un arcano distinto en el centro significa que no somos compatibles?',
    answer:
      'No. Energías distintas no significan incompatibilidad, sino complementariedad: cada persona aporta algo que la otra no tiene, lo cual también puede ser una base sólida para la relación si ambos aprenden a valorar esa diferencia.',
  },
  {
    question: '¿Necesito el consentimiento de la otra persona?',
    answer:
      'Solo necesitas su fecha de nacimiento para calcular su matriz. Como con cualquier información personal, te recomendamos usar esta herramienta con el conocimiento y el consentimiento de la otra persona.',
  },
  {
    question: '¿Sirve para amistades o solo para parejas románticas?',
    answer:
      'Sirve para cualquier vínculo entre dos personas —pareja, amistad, sociedad de negocios o familia—. La comparación de energías es la misma; lo que cambia es el contexto en el que decidas interpretarla.',
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
