import { TNavItem } from "@/components/layout/sidebarAccordion/types";
import { AccordionItem } from "@/components/layout/sidebarAccordion/AccordionItem";

export const AccordionList = ({
  items,
  level,
  pathname,
}: {
  items: TNavItem[];
  level: number;
  pathname: string;
}) => (
  <ul className="space-y-1">
    {items.map((item) => (
      <AccordionItem
        key={item.label}
        item={item}
        level={level}
        pathname={pathname}
      />
    ))}
  </ul>
);
