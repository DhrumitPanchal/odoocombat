interface IMainNavItem {
  name: string;
  path: string;
}

export const mainNavItems: IMainNavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Explore",
    path: "/explore",
  },
  {
    name: "Music",
    path: "/music",
  },
  {
    name: "Video",
    path: "/video",
  },
];
