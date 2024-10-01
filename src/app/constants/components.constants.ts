export interface DocumentData {
  title: string;
  route?: string;
  items?: DocumentData[];
  id?: string;
}

export const DOCS_SEARCH: DocumentData[] = [
  {
    title: 'Rascador Horizontal - Modelo Lola',
    route: '/products/scratcher/horizontal',
  },
  {
    title: 'Rascador Horizontal - Modelo Marcia',
    route: '/products/scratcher/horizontal',
  },
  {
    title: 'Rascador Horizontal - Modelo Mora',
    route: '/products/scratcher/horizontal',
  },
  {
    title: 'Rascador Horizontal - Modelo Fresa',
    route: '/products/scratcher/horizontal',
  },
  {
    title: 'Rascador Vertical - Modelo Green',
    route: '/products/scratcher/vertical',
  },
  {
    title: 'Rascador Vertical - Modelo Blue',
    route: '/products/scratcher/vertical',
  },
  {
    title: 'Rascador Vertical - Modelo Orange',
    route: '/products/scratcher/vertical',
  },
  {
    title: 'Rascador Vertical - Modelo Pink',
    route: '/products/scratcher/vertical',
  },
  { title: 'Gimnasio - Modelo Grecia', route: '/products/gym/level-two' },
  { title: 'Gimnasio - Modelo Italia', route: '/products/gym/level-two' },
  { title: 'Gimnasio - Modelo España', route: '/products/gym/level-three' },
  { title: 'Gimnasio - Modelo Portugal', route: '/products/gym/level-three' },
  { title: 'Comedero - Rose', route: '/products/accessories/food' },
  { title: 'Comedero - Black', route: '/products/accessories/food' },
  { title: 'Bebedero - Flor', route: '/products/accessories/waterer' },
  { title: 'Cama - Gray', route: '/products/accessories/bed' },
  { title: 'Cama - Cream', route: '/products/accessories/bed' },
  { title: 'Cama - Ocean', route: '/products/accessories/bed' },
  { title: 'Bandeja - Trebol', route: '/products/accessories/box' },
  { title: 'Bandeja - Pino', route: '/products/accessories/box' },
  { title: 'Juguete - Palta', route: '/products/accessories/toy' },
  { title: 'Juguete - Pelota', route: '/products/accessories/toy' },
  { title: 'Juguete - Tunel', route: '/products/accessories/toy' },
];

export const NAVIGATION_PRODUCTS: DocumentData[] = [
  {
    title: 'Rascadores',
    route: '/products/scratcher',
    id: 'collapseRascadores',
    items: [
      { title: 'Horizontales', route: '/products/scratcher/horizontal' },
      { title: 'Verticales', route: '/products/scratcher/vertical' },
    ],
  },
  {
    title: 'Gimnasio',
    route: '/products/gym',
    id: 'collapseGym',
    items: [
      { title: 'Dos niveles', route: '/products/gym/level-two' },
      { title: 'Tres niveles', route: '/products/gym/level-three' },
    ],
  },
  {
    title: 'Accesorios',
    route: '/products/accessories',
    id: 'collapseAccessories',
    items: [
      { title: 'Comederos', route: '/products/accessories/food' },
      { title: 'Bebederos', route: '/products/accessories/waterer' },
      { title: 'Camas', route: '/products/accessories/bed' },
      { title: 'Bandejas sanitarias', route: '/products/accessories/box' },
      { title: 'Juguetes', route: '/products/accessories/toy' },
    ],
  },
];
