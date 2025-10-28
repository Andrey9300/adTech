type TArticle = {
  id: number
  title: string
  description: string
  href: string
}

const articles: TArticle[] = [
  {
    id: 1,
    title:
      'How Prebid.js Helps Websites Increase Ad Revenue Without Hurting User Experience',
    description:
      'Technical optimization meets business impact. In my article, I explain how Prebid.js improved ad efficiency, user experience, and revenue — all through smart frontend architecture.',
    href: 'https://medium.com/@andrey93077/how-prebid-js-helps-websites-increase-ad-revenue-without-hurting-user-experience-1e0c1adac0a4',
  },
]

function Article({ title, description, href }: TArticle) {
  return (
    <article className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={href}
          target="_blank"
          className="text-blue-600 font-medium hover:underline"
        >
          View on Medium →
        </a>
      </div>
    </article>
  )
}

export function FeaturesArticles() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </>
  )
}
