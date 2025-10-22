"use client";
import { useState } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "Overview",
    href: "/",
  },
  {
    label: "Tutorial",
    children: [
      { label: "Lesson 1", href: "/tutorial/lesson1" },
      { label: "Lesson 2", href: "/tutorial/lesson2" },
    ],
  },
];

export const SidebarAccordion = () => (
  <AccordionList items={navItems} level={0} />
);

const AccordionList = ({
  items,
  level,
}: {
  items: NavItem[];
  level: number;
}) => (
  <ul className="space-y-1">
    {items.map((item) => (
      <AccordionItem key={item.label} item={item} level={level} />
    ))}
  </ul>
);

const AccordionItem = ({ item, level }: { item: NavItem; level: number }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <li>
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${
          hasChildren
            ? "hover:bg-gray-100 text-gray-800 font-medium"
            : "text-gray-700 hover:bg-gray-50"
        }`}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {item.href ? (
          <Link
            href={item.href}
            className={`block flex-1 ${
              hasChildren ? "font-normal" : "font-medium"
            }`}
          >
            {item.label}
          </Link>
        ) : (
          <span className="flex-1">{item.label}</span>
        )}

        {hasChildren && (
          <div
            className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
              open ? "rotate-90 text-blue-600" : "text-gray-400"
            }`}
          />
        )}
      </div>

      {/* Nested content */}
      {hasChildren && (
        <div
          className={`ml-4 border-l border-gray-200 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-3 mt-1 space-y-1">
            <AccordionList items={item.children!} level={level + 1} />
          </div>
        </div>
      )}
    </li>
  );
};
