const guides = [
  {
    title: 'How Google Publisher Tag (GPT) Works',
    desc: 'Deep dive into GPT lifecycle, slot definition, and best practices to reduce CLS.',
    href: '/guides/gpt',
    tag: 'GAM',
  },
  {
    title: 'Prebid.js Integration with Next.js',
    desc: 'Step-by-step guide to integrate header bidding using Prebid and modern bundlers.',
    href: '/guides/prebid',
    tag: 'Header Bidding',
  },
  {
    title: 'Lazy-loading Ads Without Killing Revenue',
    desc: 'Strategies to lazy-load ad slots while maintaining ad viewability and revenue.',
    href: '/guides/perf/lazy-ads',
    tag: 'Performance',
  },
]

export function FeaturedGuides() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Featured Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guides.map((g) => (
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
              <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-700">
                {g.tag}
              </span>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
