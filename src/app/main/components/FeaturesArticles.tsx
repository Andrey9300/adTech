import { ARTICLES } from '../constants/articles'

export type TArticle = {
  id: number
  title: string
  description: string
  imageUrl: string
  href: string
}

const Article = ({ title, description, href, imageUrl }: TArticle) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white dark:bg-gray-900 dark:border-gray-800"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="p-5">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex items-center text-blue-600 font-medium hover:underline">
        View on Medium →
      </div>
    </div>
  </a>
)

export function FeaturesArticles() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.sort((a, b) => b.id - a.id).map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </>
  )
}
