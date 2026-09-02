export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: 'What is the Matriz del Destino?',
    answer:
      'A self-knowledge system created by numerologist Natalia Ladini in 2006 that combines numerology, the 22 major arcana of the tarot, and chakra energy. From your date of birth it builds a map — the octagram — describing your personality, talents, relationships, and life purpose.',
  },
  {
    question: 'How is my Matriz del Destino calculated?',
    answer:
      'We reduce your day, month, and year of birth to numbers from 1 to 22 (if the result exceeds 22, we add its digits). From those three values we build the remaining octagram positions: your central point, your lines, and your purposes. All calculation happens in your browser — your date is never sent to any server.',
  },
  {
    question: 'Do I need to pay to see my result?',
    answer:
      'No. The complete calculation — octagram, lines, purposes, and interpretation of every position — is 100% free and requires no registration.',
  },
  {
    question: 'Is it the same as tarot or traditional numerology?',
    answer:
      'It shares elements with both — it uses the 22 major arcana and a numerological reduction logic — but it is its own system with its own structure (the octagram) and its own calculation method, distinct from a tarot spread or a classic numerology chart.',
  },
  {
    question: 'How accurate is the calculation?',
    answer:
      "The formula we use reproduces the standard model of points and purposes of the Matriz del Destino so your result matches what you'd see in other recognised calculators. Like all self-knowledge tools, it offers a symbolic interpretation, not a scientific measurement.",
  },
  {
    question: "Can I calculate someone else's matrix?",
    answer:
      'Yes. You only need their date of birth (the name is optional). We also have a dedicated compatibility calculator for couples and a version designed for children.',
  },
  {
    question: 'What does the central arcana or point E mean?',
    answer:
      'It is the synthesis of your day, month, and year of birth and represents your comfort zone — the energy you feel most at home in and return to again and again throughout life.',
  },
  {
    question: 'Is my data stored or public?',
    answer:
      'No. The calculation happens entirely on your device and we never store your date of birth on any server.',
  },
  {
    question: 'Does the calculator work worldwide?',
    answer:
      'Yes. The Matriz del Destino is calculated the same way in any country — it depends only on your date of birth, not your location.',
  },
];

export const calculatorFaq: FaqItem[] = [
  {
    question: 'What information do I need to calculate my matrix?',
    answer:
      "Just your full date of birth (day, month, and year). Your name is optional and is only used to personalise the result you see on screen — it isn't part of the calculation.",
  },
  {
    question: 'Why are there 22 arcana and not some other number?',
    answer:
      'The Matriz del Destino takes the 22 major arcana of the tarot — from The Fool to The World — as its symbolic alphabet. That is why every position in the octagram always reduces to a number between 1 and 22: each value corresponds to the energy of a specific arcana.',
  },
  {
    question: 'What is the karmic tail?',
    answer:
      'It is a sequence of three arcana, located at the bottom of your matrix, that describes patterns which repeat almost automatically in your life — sometimes inherited from your family history — which this tool helps you identify so you can work on them consciously.',
  },
  {
    question: 'What is point E, or the comfort zone?',
    answer:
      'It is the central arcana of your matrix, the result of adding your day, month, year, and their own synthesis. It represents the energy you feel most comfortable in and naturally return to, even when life pushes you toward other challenges.',
  },
  {
    question: 'What is the money line?',
    answer:
      'It is the position that describes your relationship with prosperity: how you tend to generate, receive, and manage resources, and which energetic blocks are worth keeping in mind in your professional and financial life.',
  },
  {
    question: "Can I interpret my matrix without an expert's help?",
    answer:
      'Yes. We designed every position to explain itself: we combine the meaning of that position with the arcana that landed there, in clear language with no jargon.',
  },
  {
    question: 'Does the Matriz del Destino change over time?',
    answer:
      "Your personal matrix — the one calculated from your date of birth — is fixed and does not change. What does evolve is how you relate to those energies as you work with them consciously throughout your life.",
  },
  {
    question: 'Where does this method come from?',
    answer:
      'It was developed by Russian numerologist Natalia Ladini in 2006, integrating numerology, the major arcana of the tarot, and the chakra tradition. On our method page we explain transparently how we replicate that calculation.',
  },
];

export const compatibilityFaq: FaqItem[] = [
  {
    question: 'How is couple compatibility calculated?',
    answer:
      "We calculate each person's Matriz del Destino separately, from their dates of birth, then compare their central arcana and main positions to identify shared and complementary energies between the two of you.",
  },
  {
    question: 'What does it mean if we share an arcana?',
    answer:
      'When two people have the same arcana in a key position — for example, the same central point — it usually indicates a natural affinity in that area of life: you recognise each other easily in that shared energy.',
  },
  {
    question: "Does a different arcana at the centre mean we aren't compatible?",
    answer:
      'No. Different energies do not mean incompatibility — they mean complementarity: each person brings something the other does not have, which can also be a solid foundation for the relationship if you both learn to value that difference.',
  },
  {
    question: "Do I need the other person's consent?",
    answer:
      "You only need their date of birth to calculate their matrix. As with any personal information, we recommend using this tool with the other person's knowledge and consent.",
  },
  {
    question: 'Does it work for friendships, or only romantic couples?',
    answer:
      'It works for any bond between two people — romantic partners, friendships, business partnerships, or family. The energy comparison is the same; what changes is the context you choose to interpret it in.',
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
