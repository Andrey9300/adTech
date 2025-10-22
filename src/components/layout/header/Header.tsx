import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-20">
      <div className="w-full flex items-center">
        <div className="text-2xl font-bold">
          <a href="/">Ad Tech</a>
        </div>
        <nav className="ml-auto space-x-4 text-sm text-secondary">
          <a href="/about">About</a>
          <a href="/tutorial">Tutorial</a>
          <a
            href="https://github.com/Andrey9300/adTech"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-1 py-1 hover:bg-gray-100"
          >
            <Github />
          </a>
        </nav>
      </div>
    </header>
  );
}
