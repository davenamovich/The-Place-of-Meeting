export interface Circuit {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  mantra: string;
  opposite: string;
}

export const CIRCUITS: Record<string, Circuit> = {
  riches: {
    id: 'riches',
    title: 'Prosperity Matrix',
    subtitle: 'Infinite Wealth Circuit',
    icon: 'banknote',
    mantra: 'I am one with infinite riches. Money flows to me freely, copiously, and ceaselessly. I am surrounded by the wealth of the universe. There is always a divine surplus in my life.',
    opposite: 'There is always a divine surplus in my life. I am one with infinite wealth.'
  },
  health: {
    id: 'health',
    title: 'Wholeness Circuit',
    subtitle: 'Biological Regeneration',
    icon: 'heart-pulse',
    mantra: 'I am whole, perfect, strong, powerful, loving, harmonious, and happy. The healing presence within me is restoring my body to perfect health. Every cell, every tissue, every organ functions in divine order.',
    opposite: 'The wholeness, beauty, and perfection of the infinite are flowing through every atom of my being.'
  },
  peace: {
    id: 'peace',
    title: 'Inner Sovereignty',
    subtitle: 'Central Nervous System Stillness',
    icon: 'wind',
    mantra: 'The peace of God fills my soul. I am calm, serene, poised, and balanced. I rest safely in the deep silence of the eternal.',
    opposite: 'The peace of God fills my soul. I am calm, serene, poised, and balanced.'
  },
  protection: {
    id: 'protection',
    title: 'Divine Protection',
    subtitle: 'Guidance & Guarding Shield',
    icon: 'shield',
    mantra: 'I am surrounded by the whole armor of God. Divine intelligence guides me. Divine love protects me. Divine wisdom counsels me. No weapon formed against me prospers.',
    opposite: 'Divine intelligence guides me. Divine love protects me. Divine wisdom counsels me.'
  }
};
