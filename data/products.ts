export interface Product {
  id: number
  name: string
  slug: string
  category: string
  categoryLabel: string
  price: number
  weight: string
  description: string
  longDescription: string
  image: string
  badge?: string
  featured?: boolean
}

export const categories = [
  { id: 'tablettes', label: 'Tablettes' },
  { id: 'barres', label: 'Barres' },
  { id: 'bonbons', label: 'Bonbons' },
  { id: 'confiseries', label: 'Confiseries' },
  { id: 'gateaux', label: 'Gâteaux de voyage' },
  { id: 'tartinades', label: 'Pâtes à tartiner' },
  { id: 'coffrets', label: 'Coffrets' },
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Tablette Lait Madagascar',
    slug: 'tablette-lait-madagascar',
    category: 'tablettes',
    categoryLabel: 'Tablettes',
    price: 14,
    weight: '75g',
    description: 'Chocolat au lait de Madagascar',
    longDescription: 'Issu des meilleures fèves de cacao de Madagascar, ce chocolat au lait révèle des notes de caramel, de vanille et une légère pointe fruitée. Une expérience gustative douce et complexe, travaillée avec le plus grand soin.',
    image: 'https://picsum.photos/seed/choc-tablette-lait/600/600',

  },
  {
    id: 2,
    name: 'Tablette Noir Pérou',
    slug: 'tablette-noir-perou',
    category: 'tablettes',
    categoryLabel: 'Tablettes',
    price: 16,
    weight: '75g',
    description: 'Grand cru 72% — Intensité et caractère',
    longDescription: 'Un grand cru du Pérou, ce chocolat noir 72% offre une intensité remarquable avec des arômes de fruits noirs, de cèdre et une finale légèrement acidulée. Pour les amateurs de caractère et de profondeur.',
    image: 'https://picsum.photos/seed/choc-tablette-noir/600/600',

  },
  {
    id: 3,
    name: 'Tablette Blanc Ganache Vanille',
    slug: 'tablette-blanc-ganache',
    category: 'tablettes',
    categoryLabel: 'Tablettes',
    price: 16,
    weight: '75g',
    description: 'Chocolat blanc, ganache vanille de Tahiti',
    longDescription: 'Une tablette de chocolat blanc enveloppant une ganache onctueuse à la vanille de Tahiti. La douceur à son summum, équilibrée par la subtilité florale de la vanille grand cru. Une création délicate et raffinée.',
    image: 'https://picsum.photos/seed/choc-tablette-blanc/600/600',
    badge: 'Nouveauté',

  },
  {
    id: 4,
    name: 'Barre Citron Blanc',
    slug: 'barre-citron-blanc',
    category: 'barres',
    categoryLabel: 'Barres',
    price: 18,
    weight: '65g',
    description: 'Chocolat blanc, zestes et ganache citron',
    longDescription: 'Une barre de chocolat blanc enrobant un cœur de zestes de citron confit et une ganache citronnée. Le mariage parfait entre la douceur du chocolat blanc et l\'acidité vive du citron de Menton.',
    image: 'https://picsum.photos/seed/choc-barre-citron/600/600',
    featured: true,

  },
  {
    id: 5,
    name: 'Barre Coco Lait',
    slug: 'barre-coco-lait',
    category: 'barres',
    categoryLabel: 'Barres',
    price: 18,
    weight: '65g',
    description: 'Chocolat au lait et noix de coco grillée',
    longDescription: 'Un voyage exotique avec cette barre associant chocolat au lait fondant et noix de coco grillée. Une texture croustillante enveloppant un cœur moelleux, pour une saveur tropicale irrésistible.',
    image: 'https://picsum.photos/seed/choc-barre-coco/600/600',

  },
  {
    id: 6,
    name: 'Barre Framboise Noir',
    slug: 'barre-framboise-noir',
    category: 'barres',
    categoryLabel: 'Barres',
    price: 18,
    weight: '65g',
    description: 'Chocolat noir 66% et coulis de framboise',
    longDescription: 'L\'acidité fruitée de la framboise rencontre l\'intensité du chocolat noir 66%. Un coulis coulant au cœur d\'une enveloppe craquante pour une explosion de saveurs aussi belle que délicieuse.',
    image: 'https://picsum.photos/seed/choc-barre-framboise/600/600',

  },
  {
    id: 7,
    name: 'Coffret Bonbons Assortis',
    slug: 'coffret-bonbons-assortis',
    category: 'bonbons',
    categoryLabel: 'Bonbons',
    price: 50,
    weight: '150g',
    description: 'Assortiment de 15 bonbons artisanaux',
    longDescription: 'Notre sélection de 15 bonbons de chocolat, chacun une création unique : ganaches aux grands crus, pralinés croquants, caramels coulants et bonbons fruités. Présentés dans un élégant coffret lacqué.',
    image: 'https://picsum.photos/seed/choc-bonbons/600/600',
    badge: 'Bestseller',
    featured: true,

  },
  {
    id: 8,
    name: 'Mendiant Noir',
    slug: 'mendiant-noir',
    category: 'bonbons',
    categoryLabel: 'Bonbons',
    price: 22,
    weight: '100g',
    description: 'Disques chocolat noir, fruits secs et noix',
    longDescription: 'De fins disques de chocolat noir 70% garnis à la main de pistaches de Sicile, noisettes du Piémont, amandes de Valence et raisins de Corinthe. Un classique revisité avec des produits d\'exception.',
    image: 'https://picsum.photos/seed/choc-mendiant/600/600',

  },
  {
    id: 9,
    name: 'Orangette',
    slug: 'orangette',
    category: 'confiseries',
    categoryLabel: 'Confiseries',
    price: 24,
    weight: '150g',
    description: 'Écorces d\'orange confites, enrobées de noir',
    longDescription: 'Des écorces d\'orange soigneusement confites pendant 72 heures dans un sirop vanillé, puis enrobées d\'un chocolat noir 66% intense. La rencontre entre l\'amertume de l\'écorce et la puissance du cacao.',
    image: 'https://picsum.photos/seed/choc-orangette/600/600',

  },
  {
    id: 10,
    name: 'Pâte de Fruits',
    slug: 'pate-de-fruits',
    category: 'confiseries',
    categoryLabel: 'Confiseries',
    price: 28,
    weight: '200g',
    description: 'Pâtes de fruits artisanales aux saveurs d\'été',
    longDescription: 'Des pâtes de fruits confectionnées à partir de fruits frais de saison : fraise de Carpentras, abricot du Roussillon, framboise de Corrèze, cassis de Bourgogne et mangue alphonso. Un concentré de saveurs naturelles.',
    image: 'https://picsum.photos/seed/choc-patefruit/600/600',

  },
  {
    id: 11,
    name: 'Guimauve Chocolat',
    slug: 'guimauve-chocolat',
    category: 'confiseries',
    categoryLabel: 'Confiseries',
    price: 20,
    weight: '120g',
    description: 'Guimauves aériennes enrobées de chocolat',
    longDescription: 'Des guimauves artisanales à la texture aérienne et fondante, délicatement enrobées d\'une fine couche de chocolat noir craquant. Un nuage de légèreté au cœur d\'une coque intense. Irrésistible.',
    image: 'https://picsum.photos/seed/choc-guimauve/600/600',
    badge: 'Coup de cœur',

  },
  {
    id: 12,
    name: 'Cake Chocolat Noisette',
    slug: 'cake-chocolat-noisette',
    category: 'gateaux',
    categoryLabel: 'Gâteaux de voyage',
    price: 35,
    weight: '400g',
    description: 'Cake moelleux, noisettes torréfiées et pépites',
    longDescription: 'Un cake généreux aux éclats de noisettes du Piémont torréfiées et pépites de chocolat noir fondantes, à la texture moelleuse et humide. Se conserve une semaine, s\'emporte partout pour un plaisir prolongé.',
    image: 'https://picsum.photos/seed/choc-cake/600/600',

  },
  {
    id: 13,
    name: 'Biscuits Assortis',
    slug: 'biscuits-assortis',
    category: 'gateaux',
    categoryLabel: 'Gâteaux de voyage',
    price: 50,
    weight: '10 pièces',
    description: 'Coffret de 10 biscuits fins au chocolat',
    longDescription: 'Une sélection de 10 biscuits artisanaux au chocolat : sablés Bretagne ganache, financiers praliné, langues de chat noir et tuiles caramel. Chaque biscuit est une invitation à la gourmandise.',
    image: 'https://picsum.photos/seed/choc-biscuits/600/600',
    badge: 'Idée Cadeau',

  },
  {
    id: 14,
    name: 'Pâte Noisette Noir',
    slug: 'pate-noisette-noir',
    category: 'tartinades',
    categoryLabel: 'Pâtes à tartiner',
    price: 18,
    weight: '220g',
    description: 'Noisettes grillées et chocolat noir, sans huile de palme',
    longDescription: 'Une pâte à tartiner 100% naturelle composée de noisettes du Piémont grillées à la flamme et de chocolat noir grand cru, sans huile de palme, sans arôme artificiel. Onctueuse et intense, elle révolutionne le petit-déjeuner.',
    image: 'https://picsum.photos/seed/choc-noisette/600/600',
    badge: 'Nouveauté',
    featured: true,

  },
  {
    id: 15,
    name: 'Pâte Amande Blanc',
    slug: 'pate-amande-blanc',
    category: 'tartinades',
    categoryLabel: 'Pâtes à tartiner',
    price: 18,
    weight: '220g',
    description: 'Amandes émondées et chocolat blanc crémeux',
    longDescription: 'Une pâte douce et crémeuse à base d\'amandes émondées de Valence et de chocolat blanc de qualité supérieure. Une alternative délicate et parfumée, légèrement vanillée pour les amateurs de saveurs douces.',
    image: 'https://picsum.photos/seed/choc-amande/600/600',

  },
  {
    id: 16,
    name: 'Coffret Découverte',
    slug: 'coffret-decouverte',
    category: 'coffrets',
    categoryLabel: 'Coffrets',
    price: 75,
    weight: 'Assorti',
    description: 'Notre sélection signature pour explorer notre univers',
    longDescription: 'Le coffret idéal pour s\'initier à l\'art de la chocolaterie : une tablette Lait Madagascar, une Barre Citron Blanc, 5 bonbons assortis, et notre Pâte Noisette Noir. Un voyage complet dans l\'univers Le Chocolat, joliment emballé.',
    image: 'https://picsum.photos/seed/choc-coffret-decouverte/600/600',
    badge: 'Idée Cadeau',
    featured: true,

  },
  {
    id: 17,
    name: 'Coffret Saint-Valentin',
    slug: 'coffret-saint-valentin',
    category: 'coffrets',
    categoryLabel: 'Coffrets',
    price: 95,
    weight: 'Assorti',
    description: 'Coffret romantique pour les amoureux du chocolat',
    longDescription: 'Une sélection romantique et généreuse : bonbons en forme de cœur en chocolat noir, tablette Blanc Ganache Vanille, et pralinés délicats. Emballage soigné avec ruban satiné, pour déclarer sa flamme avec élégance.',
    image: 'https://picsum.photos/seed/choc-coffret-saint-valentin/600/600',
    badge: 'Saint-Valentin',

  },
]
