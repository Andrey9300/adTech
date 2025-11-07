import { GUIDES } from '../constants/guides'

export function FeaturedGuides() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Featured Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GUIDES.map((g) => (
          <article
            key={g.href}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">
                  <a href={g.href} className="hover:underline">
                    {g.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">{g.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
