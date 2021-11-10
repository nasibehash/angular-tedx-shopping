export interface NavItemContext {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  isStartup?: boolean;
  children?: NavItemContext[];
  group?: string;
}

export const MAIN_MENU: NavItemContext[] = [
  {
    displayName: 'صفحه اصلی',
    route: '/',
  },
  {
    displayName: 'تدتاک',
    route: '/tedx',
  },
  {
    displayName: 'پادکست',
    route: '/podcast',
  },
  {
    displayName: 'کتاب',
    route: 'book',
  },
  {
    displayName: 'رویداد',
    route: '',
  },

  {
    displayName: 'تصادفی',
    route: '',
  }
];

export interface PaginationContext {
  page: number;
  limit: number;
  filter?: any;
  total: number;
  sort?:any;
}