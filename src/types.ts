export interface MenuItem {
  id: string;
  name: string;
  category: string;
  type: string;
  tag: string;
  description: string;
  singlePrice: string;
  towerPrice?: string;
  origin?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
