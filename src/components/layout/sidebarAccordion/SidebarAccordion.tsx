"use client";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./constants";
import { AccordionList } from "@/components/layout/sidebarAccordion/AccordionList";

export const SidebarAccordion = () => {
  const pathname = usePathname();
  return <AccordionList items={NAV_ITEMS} level={0} pathname={pathname} />;
};
