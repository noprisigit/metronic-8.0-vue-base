interface ItemType {
  sectionTitle?: string;
  heading: string;
  route: string;
  svgIcon?: string;
  fontIcon?: string;
  sub?: Array<ItemType> | [];
}

interface PageType {
  sectionTitle?: string;
  heading: string;
  route: string;
  svgIcon: string;
  fontIcon: string;
  sub?: Array<ItemType> | [];
}

export interface MainMenuType {
  heading?: string;
  route?: string;
  pages: Array<PageType>;
}
