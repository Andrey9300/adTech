type TArticle = {
  id: number
  title: string
  description: string
  href: string
}

const articles: TArticle[] = [
  {
    id: 1,
    title: 'How Google Publisher Tag Works',
    description:
      'A deep dive into GPT, ad slots, and how to optimize rendering for better CPMs and viewability.',
    href: '/guides/google-publisher-tag',
  },
  {
    id: 2,
    title: 'Prebid.js Integration with Next.js',
    description:
      'Step-by-step guide to integrate header bidding using Prebid and modern bundlers.',
    href: '/guides/prebid',
  },
  {
    id: 3,
    title: 'Lazy-loading Ads Without Killing Revenue',
    description:
      'Strategies to lazy-load ad slots while maintaining ad viewability and revenue.',
    href: '/guides/perf/lazy-ads',
  },
]

function Article({ title, description, href }: TArticle) {
  return (
    <article className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a href={href} className="text-blue-600 font-medium hover:underline">
          Read more →
        </a>
      </div>
    </article>
  )
}

export function FeaturesArticles() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </>
  )
}
