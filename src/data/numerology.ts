export interface LifePathMeaning {
  title: string;
  interpretation: string;
  compatibility: string;
}

export const lifePathMeanings: Record<number, LifePathMeaning> = {
  1: {
    title: 'The Leader',
    interpretation:
      'Independent, driven, pioneering. You are here to lead and create. Your challenge is avoiding stubbornness and learning to collaborate.',
    compatibility: 'Tends to pair well with Life Paths 3, 5, and 6 — their flexibility and warmth balance your drive.',
  },
  2: {
    title: 'The Peacemaker',
    interpretation:
      'Sensitive, cooperative, intuitive. You thrive in partnership and harmony. Your challenge is overcoming self-doubt and indecision.',
    compatibility: 'Tends to pair well with Life Paths 6, 8, and 9 — steady partners who value your sensitivity.',
  },
  3: {
    title: 'The Creative',
    interpretation:
      'Expressive, social, optimistic. You are here to communicate and inspire. Your challenge is staying focused and avoiding scattered energy.',
    compatibility: 'Tends to pair well with Life Paths 1, 5, and 9 — energetic partners who match your zest for life.',
  },
  4: {
    title: 'The Builder',
    interpretation:
      'Practical, disciplined, reliable. You are here to create stable foundations. Your challenge is embracing flexibility and avoiding rigidity.',
    compatibility: 'Tends to pair well with Life Paths 2, 7, and 8 — grounded partners who respect your need for order.',
  },
  5: {
    title: 'The Freedom Seeker',
    interpretation:
      'Adventurous, adaptable, curious. You thrive on change and variety. Your challenge is developing commitment and follow-through.',
    compatibility: 'Tends to pair well with Life Paths 1, 3, and 7 — partners who give you room to roam and keep things interesting.',
  },
  6: {
    title: 'The Nurturer',
    interpretation:
      'Caring, responsible, harmonious. You are here to serve and support. Your challenge is setting healthy boundaries and avoiding martyrdom.',
    compatibility: 'Tends to pair well with Life Paths 2, 8, and 9 — partners who appreciate your devotion and share your sense of responsibility.',
  },
  7: {
    title: 'The Seeker',
    interpretation:
      'Analytical, introspective, spiritual. You are here to seek deeper truth. Your challenge is opening up emotionally and trusting others.',
    compatibility: 'Tends to pair well with Life Paths 4, 5, and 7 — partners who respect your need for space and depth.',
  },
  8: {
    title: 'The Achiever',
    interpretation:
      'Ambitious, authoritative, material. You are here to master the material world. Your challenge is balancing power with compassion.',
    compatibility: 'Tends to pair well with Life Paths 2, 4, and 6 — partners who support your ambitions and offer emotional balance.',
  },
  9: {
    title: 'The Humanitarian',
    interpretation:
      'Compassionate, wise, generous. You are here to serve humanity. Your challenge is letting go of the past and embracing endings.',
    compatibility: 'Tends to pair well with Life Paths 2, 3, and 6 — expressive partners who share your humanitarian outlook.',
  },
  11: {
    title: 'The Intuitive (Master Number)',
    interpretation:
      'Highly sensitive, visionary, inspirational. You are here to uplift others through insight. Your challenge is managing anxiety and self-doubt.',
    compatibility: 'Tends to pair well with Life Paths 2, 6, and 9 — grounded, empathetic partners who help channel your sensitivity.',
  },
  22: {
    title: 'The Master Builder (Master Number)',
    interpretation:
      'Visionary, practical, powerful. You are here to build something that lasts for generations. Your challenge is not letting the weight of potential paralyse you.',
    compatibility: 'Tends to pair well with Life Paths 4, 8, and 11 — practical or visionary partners who help you build without burning out.',
  },
  33: {
    title: 'The Master Teacher (Master Number)',
    interpretation:
      'Compassionate, selfless, healing. You are here to guide and uplift at the highest level. Your challenge is grounding your idealism in practical action.',
    compatibility: 'Tends to pair well with Life Paths 6, 9, and 11 — nurturing, spiritually attuned partners who share your devotion to service.',
  },
};

export interface PersonalYearMeaning {
  theme: string;
  description: string;
  focus: string;
  avoid: string;
}

export const personalYearMeanings: Record<number, PersonalYearMeaning> = {
  1: {
    theme: 'New Beginnings',
    description:
      'This is your year to start fresh. Plant seeds, launch projects, and take bold action. Avoid hesitation — momentum built now carries through the next 9 years.',
    focus: 'Starting fresh: plant seeds, launch projects, and take bold action.',
    avoid: 'Hesitation — momentum built now carries through the next 9 years.',
  },
  2: {
    theme: 'Partnership & Patience',
    description:
      "A year for relationships, collaboration, and waiting. Don't force outcomes. Focus on nurturing connections and building trust.",
    focus: 'Nurturing connections, collaboration, and building trust.',
    avoid: 'Forcing outcomes before their time.',
  },
  3: {
    theme: 'Expression & Joy',
    description:
      'A creative, social, abundant year. Express yourself, expand your network, and enjoy life. Avoid overcommitting or scattering energy.',
    focus: 'Self-expression, expanding your network, and enjoying life.',
    avoid: 'Overcommitting or scattering your energy across too much at once.',
  },
  4: {
    theme: 'Foundation & Work',
    description:
      'A year to build, organise, and put in the effort. Hard work now creates lasting results. Avoid cutting corners or resisting structure.',
    focus: 'Building, organising, and putting in steady effort.',
    avoid: 'Cutting corners or resisting the structure this year asks for.',
  },
  5: {
    theme: 'Change & Freedom',
    description:
      'Expect the unexpected. This is a year of movement, travel, and transformation. Embrace change rather than resisting it.',
    focus: 'Movement, travel, and transformation — embracing change as it comes.',
    avoid: 'Clinging to plans that no longer fit; resistance only makes change harder.',
  },
  6: {
    theme: 'Home & Responsibility',
    description:
      'Focus on family, relationships, health, and service. A year of deepening commitments. Avoid taking on more than you can carry.',
    focus: 'Family, relationships, health, and deepening commitments.',
    avoid: 'Taking on more responsibility than you can actually carry.',
  },
  7: {
    theme: 'Reflection & Inner Growth',
    description:
      'A year to go inward. Study, rest, meditate, and seek truth. Avoid major external pushes — this is a year of inner work.',
    focus: 'Study, rest, meditation, and seeking deeper truth.',
    avoid: 'Forcing major external pushes — this is a year of inner work.',
  },
  8: {
    theme: 'Power & Achievement',
    description:
      'Your biggest opportunity year for material success. Step into leadership, make bold business moves, and claim your power.',
    focus: 'Leadership, bold business moves, and claiming your power.',
    avoid: 'Playing small or shying away from the responsibility that comes with opportunity.',
  },
  9: {
    theme: 'Completion & Release',
    description:
      'A year to end cycles, let go, and forgive. Release what no longer serves you to make space for the new cycle ahead.',
    focus: 'Ending cycles, letting go, and forgiving.',
    avoid: "Starting major new ventures — finish what's unresolved before you begin again.",
  },
  11: {
    theme: 'Illumination (Master Year)',
    description:
      'Heightened intuition and spiritual awareness. A year of insights and inspiration — trust your inner guidance.',
    focus: 'Insight, inspiration, and trusting your inner guidance.',
    avoid: "Ignoring the nudges you receive, even when they don't make logical sense yet.",
  },
  22: {
    theme: 'Mastery (Master Year)',
    description:
      'A year of extraordinary potential to build something meaningful. Take on significant, lasting projects.',
    focus: 'Significant, lasting projects worthy of your extraordinary potential.',
    avoid: "Letting the scale of what's possible overwhelm you into inaction.",
  },
};

export interface KarmicDebtMeaning {
  label: string;
  interpretation: string;
}

export const karmicDebtMeanings: Record<number, KarmicDebtMeaning> = {
  13: {
    label: '13/4',
    interpretation:
      "The karmic debt of laziness and negativity in a past life. This life asks you to work hard, stay disciplined, and maintain a positive mindset even when it's difficult.",
  },
  14: {
    label: '14/5',
    interpretation:
      'The karmic debt of overindulgence and misuse of freedom in a past life. This life asks you to develop self-control, moderation, and commitment.',
  },
  16: {
    label: '16/7',
    interpretation:
      'The karmic debt of ego and the fall of the self. Past life involved putting self above love and truth. This life asks you to dissolve the ego and seek genuine spiritual growth.',
  },
  19: {
    label: '19/1',
    interpretation:
      'The karmic debt of selfishness and abuse of power. Past life involved using strength at the expense of others. This life asks you to develop independence while remaining compassionate and open to help.',
  },
};

export interface SoulUrgeMeaning {
  title: string;
  interpretation: string;
}

export const soulUrgeMeanings: Record<number, SoulUrgeMeaning> = {
  1: {
    title: 'Independence & Leadership',
    interpretation:
      'You desire independence, leadership, and achievement. At your core you want to be first, original, and self-reliant.',
  },
  2: {
    title: 'Harmony & Partnership',
    interpretation:
      'You desire harmony, love, and partnership. At your core you want peace, connection, and to feel truly understood.',
  },
  3: {
    title: 'Creative Expression',
    interpretation:
      'You desire creative expression, joy, and admiration. At your core you want to be seen, heard, and to bring beauty into the world.',
  },
  4: {
    title: 'Security & Order',
    interpretation:
      'You desire security, order, and solid foundations. At your core you want stability, honesty, and a life built to last.',
  },
  5: {
    title: 'Freedom & Adventure',
    interpretation:
      'You desire freedom, adventure, and variety. At your core you want to experience everything life has to offer without restriction.',
  },
  6: {
    title: 'Love & Nurturing',
    interpretation:
      'You desire love, family, and to nurture others. At your core you want to create a warm, harmonious home and be truly needed.',
  },
  7: {
    title: 'Truth & Solitude',
    interpretation:
      'You desire knowledge, truth, and solitude. At your core you want to understand the deeper mysteries of existence.',
  },
  8: {
    title: 'Power & Achievement',
    interpretation:
      'You desire power, success, and abundance. At your core you want to achieve mastery in the material world and be respected for it.',
  },
  9: {
    title: 'Service & Legacy',
    interpretation:
      'You desire to serve, inspire, and make the world better. At your core you want to love unconditionally and leave a meaningful legacy.',
  },
  11: {
    title: 'Spiritual Inspiration',
    interpretation:
      'You desire spiritual connection and to inspire others. At your core you want to be a channel for higher wisdom and uplift those around you.',
  },
  22: {
    title: 'Visionary Building',
    interpretation:
      'You desire to build something extraordinary. At your core you want to leave a lasting, transformational legacy in the world.',
  },
};
