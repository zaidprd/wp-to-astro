interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'Studi Kelayakan',
    slug: 'studi-kelayakan',
    description: 'Artikel seputar feasibility study dan analisis kelayakan bisnis'
  },
  {
    name: 'Business Plan',
    slug: 'business-plan',
    description: 'Panduan menyusun rencana bisnis yang efektif'
  },
  {
    name: 'Riset Pasar',
    slug: 'riset-pasar',
    description: 'Tips dan strategi riset pasar untuk bisnis'
  },
  {
    name: 'Konsultasi Bisnis',
    slug: 'konsultasi-bisnis',
    description: 'Wawasan seputar strategi dan konsultasi bisnis'
  },
  {
    name: 'Investasi',
    slug: 'investasi',
    description: 'Panduan investasi dan analisis keuangan'
  },
  {
    name: 'UMKM',
    slug: 'umkm',
    description: 'Artikel khusus untuk pelaku usaha kecil dan menengah'
  },
  {
    name: 'Artikel',
    slug: 'artikel',
    description: 'Artikel umum seputar dunia bisnis dan ekonomi'
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
