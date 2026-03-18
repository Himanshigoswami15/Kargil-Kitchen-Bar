import { MenuSection } from './types';

export const RESTAURANT_MENU: MenuSection[] = [
  {
    title: "Beer Selection",
    items: [
      {
        id: "b1",
        name: "Tuborg Strong",
        category: "Premium",
        type: "Strong Lager",
        tag: "Popular",
        description: "A bold, full-bodied lager with a crisp finish.",
        singlePrice: "250",
        towerPrice: "720"
      },
      {
        id: "b2",
        name: "Tuborg Classic",
        category: "Premium",
        type: "Malt Lager",
        tag: "Smooth",
        description: "Rich malt character with a balanced hop bitterness.",
        singlePrice: "350",
        towerPrice: "930"
      },
      {
        id: "b3",
        name: "Kingfisher Strong",
        category: "Classic",
        type: "Strong Lager",
        tag: "Iconic",
        description: "India's favorite strong beer, known for its punchy flavor.",
        singlePrice: "250",
        towerPrice: "720"
      },
      {
        id: "b4",
        name: "Kingfisher Ultra Max",
        category: "Ultra",
        type: "Premium Lager",
        tag: "Bold",
        description: "A high-gravity beer with a smooth, refreshing taste.",
        singlePrice: "350",
        towerPrice: "1000"
      },
      {
        id: "b5",
        name: "Kingfisher Ultra Premium",
        category: "Ultra",
        type: "Super Premium",
        tag: "Refined",
        description: "Crafted for those who appreciate the finer things.",
        singlePrice: "350",
        towerPrice: "1000"
      },
      {
        id: "b6",
        name: "Kingfisher Lager",
        category: "Classic",
        type: "Mild Lager",
        tag: "Crisp",
        description: "The original Kingfisher experience, light and refreshing.",
        singlePrice: "350",
        towerPrice: "1000"
      },
      {
        id: "b7",
        name: "Calsberg Elephant Strong",
        category: "Imported Heritage",
        type: "Extra Strong",
        tag: "Powerful",
        description: "A legendary strong beer with a rich, malty profile.",
        singlePrice: "350",
        towerPrice: "1000"
      },
      {
        id: "b8",
        name: "Budweiser",
        category: "Global",
        type: "American Lager",
        tag: "King of Beers",
        description: "The world-renowned lager, clean and crisp.",
        singlePrice: "380",
        towerPrice: "1100"
      },
      {
        id: "b9",
        name: "Bacardi Cranberry/Orange",
        category: "Breezer",
        type: "Fruit Mix",
        tag: "Fruity",
        description: "A refreshing blend of Bacardi rum and tropical fruit flavors.",
        singlePrice: "220"
      },
      {
        id: "b10",
        name: "Corona 330ml",
        category: "Imported",
        type: "Mexican Lager",
        tag: "Premium",
        description: "Best served with a slice of lime for that perfect beach vibe.",
        singlePrice: "300"
      }
    ]
  }
];
