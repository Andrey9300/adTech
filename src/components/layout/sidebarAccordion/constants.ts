import { TNavItem } from "@/components/layout/sidebarAccordion/types";

export const NAV_ITEMS: TNavItem[] = [
  {
    label: "Overview",
    href: "/",
  },
  {
    label: "Tutorial",
    href: "/tutorial",
    children: [
      { label: "Basic integration", href: "/tutorial/lesson1" },
      { label: "Lazy loading", href: "/tutorial/lesson2" },
      { label: "Ad loading and Refresh", href: "/tutorial/lesson3" },
    ],
  },
];
