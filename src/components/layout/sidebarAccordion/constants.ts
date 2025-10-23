import { TNavItem } from "@/components/layout/sidebarAccordion/types";

export const NAV_ITEMS: TNavItem[] = [
  {
    label: "Tutorial",
    href: "/tutorial",
    children: [
      { label: "Basic integration", href: "/tutorial/basic-integration" },
      { label: "Lazy loading", href: "/tutorial/lesson2" },
      { label: "Ad loading and Refresh", href: "/tutorial/lesson3" },
    ],
  },
];
