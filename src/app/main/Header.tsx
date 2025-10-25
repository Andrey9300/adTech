import { SocialLinksWhite } from '@/components/ui/social/SocialLinks'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <a href="/public" className="text-lg font-semibold">
          Andrei
        </a>
        <span className="hidden md:inline text-sm text-gray-500">
          AdTech & Performance
        </span>
      </div>

      <div className="flex items-center gap-3">
        <SocialLinksWhite />
      </div>
    </header>
  )
}
