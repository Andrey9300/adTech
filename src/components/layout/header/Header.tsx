import { SocialLinksWhite } from '@/components/ui/social/SocialLinks'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <a href="/" className="text-lg font-semibold">
          Andrei
          <span className="md:inline text-sm pl-2 text-gray-500">
            Frontend & AdTech
          </span>
        </a>
      </div>
      <nav className="ml-auto space-x-4 text-sm text-secondary">
        <a href="/about">About</a>
        <a href="/guides">Guides</a>
        <a href="https://medium.com/@andrey93077" target="_blank">
          Articles
        </a>
        <SocialLinksWhite />
      </nav>
    </header>
  )
}
