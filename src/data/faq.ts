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

export const lifePathFaq: FaqItem[] = [
  {
    question: 'What is a life path number?',
    answer:
      'Your life path number is the most important number in numerology: it summarises the core lessons, talents, and challenges you came into this life to work with. It is calculated entirely from your date of birth.',
  },
  {
    question: 'How is the life path number calculated?',
    answer:
      'We add together every digit of your day, month, and year of birth, then reduce that total to a single digit by repeatedly summing its digits — unless the total lands on a master number (11, 22, or 33), in which case we stop there.',
  },
  {
    question: 'What are master numbers?',
    answer:
      "11, 22, and 33 are considered master numbers in numerology. They carry the same core meaning as their reduced form (11→2, 22→4, 33→6) but with heightened intensity and potential, along with heightened challenges — they are traditionally not reduced further.",
  },
  {
    question: 'Is my life path number the same as my Matriz del Destino arcana?',
    answer:
      'No. The life path number uses a different, simpler numerology tradition (reducing to 1–9 or a master number) than the Matriz del Destino, which reduces to one of 22 major arcana. They are complementary systems, not the same calculation.',
  },
];

export const personalYearFaq: FaqItem[] = [
  {
    question: 'What is a personal year number?',
    answer:
      'Your personal year number describes the overarching theme and energy of a specific calendar year for you personally. It changes every year, moving through a repeating 9-year cycle (1 through 9, with 11 and 22 appearing as master years).',
  },
  {
    question: 'How is my personal year number calculated?',
    answer:
      'We add together the digits of your birth day, birth month, and the calendar year in question, then reduce that total to a single digit — stopping early if the total lands on the master number 11 or 22.',
  },
  {
    question: 'Why does my personal year number change every year?',
    answer:
      "Because the year itself changes. Your birth day and month stay fixed, but adding a new calendar year to the sum shifts the total — which is what moves you through the 9-year cycle one step at a time.",
  },
  {
    question: 'What happens after personal year 9?',
    answer:
      'After a 9 (a year of completion and release), the cycle resets to 1 — a fresh new-beginnings year — and the 9-year pattern repeats throughout your life.',
  },
];

export const karmicDebtFaq: FaqItem[] = [
  {
    question: 'What is a karmic debt number?',
    answer:
      "A karmic debt number (13, 14, 16, or 19) is a pattern some numerologists believe points to a lesson carried over from a past life. It shows up when certain numbers in your chart total to one of these four values before their final reduction.",
  },
  {
    question: 'Is having a karmic debt number bad?',
    answer:
      "No. It simply highlights a specific area for conscious growth in this lifetime — not a punishment. Many people with karmic debt numbers channel that extra friction into real strength once they recognise the pattern.",
  },
  {
    question: 'Can I have more than one karmic debt number?',
    answer:
      'Yes. We check both your birth day and your life path calculation independently, so it is possible to have zero, one, or two karmic debt numbers.',
  },
  {
    question: "What if I don't have any karmic debt numbers?",
    answer:
      "That's common, and it's a good thing — it simply means your chart doesn't carry any of the four recognised karmic debt patterns. It doesn't mean you have no lessons to work on, just not this particular kind.",
  },
];

export const soulUrgeFaq: FaqItem[] = [
  {
    question: 'What is a soul urge number?',
    answer:
      "Your soul urge number — also called your heart's desire number — reveals your deepest inner motivation: what you truly want beneath your outward behaviour and habits.",
  },
  {
    question: 'How is the soul urge number calculated?',
    answer:
      'We take only the vowels (A, E, I, O, U, and Y) from your full birth name, convert each to its numerology value, add them together, and reduce the total to a single digit or master number (11 or 22).',
  },
  {
    question: 'Why does the calculation only use vowels?',
    answer:
      'In numerology, vowels are considered to represent your inner self and true desires, while consonants represent how others perceive you. The soul urge number focuses specifically on that inner layer.',
  },
  {
    question: 'Which name should I use — my legal name or my nickname?',
    answer:
      'For the most accurate reading, use your full name exactly as it appears on your birth certificate, including all middle names.',
  },
];

export const childFaq: FaqItem[] = [
  {
    question: "From what age can I calculate my child's matrix?",
    answer:
      'You can calculate it from birth. The matrix is built solely from the date of birth, so it is just as valid for a baby as for a teenager.',
  },
  {
    question: "What's the point of knowing a child's matrix?",
    answer:
      "It helps you understand your child's natural talents, dominant energies, and possible tendencies from an early age, so you can support them in a way that is more conscious of their particular way of being, without forcing comparisons with other children.",
  },
  {
    question: 'Should I share the result with my child?',
    answer:
      'It depends on their age and maturity. For young children, the result is usually more useful as guidance for parents; for teenagers, sharing it can open up a valuable conversation about their own talents and interests.',
  },
  {
    question: 'Does it replace a psychological or vocational assessment?',
    answer:
      "No. It is a self-knowledge and support tool, not a clinical diagnosis or a professional assessment. If you have concerns about your child's development, it is always best to consult a specialist.",
  },
  {
    question: 'Can I calculate the matrix for more than one child?',
    answer:
      'Yes, you can calculate the matrix for each of your children as many times as you like; the calculation is free and has no registration or usage limit.',
  },
];
