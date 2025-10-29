import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { TNavItem } from '@/components/layout/sidebarAccordion/types'
import { AccordionList } from '@/components/layout/sidebarAccordion/AccordionList'

export const AccordionItem = ({
  item,
  level,
  pathname,
}: {
  item: TNavItem
  level: number
  pathname: string
}) => {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.children?.length

  useEffect(() => {
    if (
      hasChildren &&
      item.children!.some((child) => isActive(pathname, child))
    )
      setOpen(true)
  }, [pathname])

  const active = item.href && pathname === item.href

  return (
    <li>
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${
          active
            ? 'bg-blue-50 text-blue-600 font-semibold'
            : hasChildren
              ? 'hover:bg-gray-100 text-gray-800 font-medium'
              : 'text-gray-700 hover:bg-gray-50'
        }`}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {item.href ? (
          <Link href={item.href} className="block flex-1">
            {item.label}
          </Link>
        ) : (
          <span className="flex-1">{item.label}</span>
        )}

        {hasChildren && (
          <ChevronRight
            className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
              open ? 'rotate-90 text-blue-600' : 'text-gray-400'
            }`}
          />
        )}
      </div>

      {/* Nested items */}
      {hasChildren && (
        <div
          className={`ml-4 border-l border-gray-200 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pl-3 mt-1 space-y-1">
            <AccordionList
              items={item.children!}
              level={level + 1}
              pathname={pathname}
            />
          </div>
        </div>
      )}
    </li>
  )
}

const isActive = (pathname: string, item: TNavItem): boolean => {
  if (item.href && pathname === item.href) return true
  if (item.children)
    return item.children.some((child) => isActive(pathname, child))
  return false
}
