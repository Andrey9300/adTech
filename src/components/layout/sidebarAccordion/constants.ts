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
      { label: "Lesson 1", href: "/tutorial/lesson1" },
      { label: "Lesson 2", href: "/tutorial/lesson2" },
    ],
  },
];
