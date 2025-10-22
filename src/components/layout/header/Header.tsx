export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="text-2xl font-bold">
          <a href="/">Ad Tech</a>
        </div>
        <nav className="ml-auto space-x-4 text-sm text-secondary">
          <a href="/tutorial">Tutorial</a>
        </nav>
      </div>
    </header>
  );
}
