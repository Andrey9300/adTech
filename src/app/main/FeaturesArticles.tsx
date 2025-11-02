type TArticle = {
  id: number
  title: string
  description: string
  imageUrl: string
  href: string
}

const articles: TArticle[] = [
  {
    id: 1,
    title:
      'How Prebid.js Helps Websites Increase Ad Revenue Without Hurting User Experience',
    description:
      'Technical optimization meets business impact. In my article, I explain how Prebid.js improved ad efficiency, user experience, and revenue — all through smart frontend architecture.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1400/1*FUnNm_Gu7cbhL4mYVJBSrA.png',
    href: 'https://medium.com/@andrey93077/how-prebid-js-helps-websites-increase-ad-revenue-without-hurting-user-experience-1e0c1adac0a4',
  },
  {
    id: 2,
    title:
      'How to Integrate Google, Prebid and (Amazon) — Complete Setup Guide',
    description:
      'Modern header bidding setups often combine Google Publisher Tag (GPT.js), Prebid.js and Amazon Publisher Services (APS / apstag). The goal: run all demand sources in parallel, merge their bids, and send the highest value into Google Ad Manager (GAM) — without breaking latency budgets.',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:0/1*RrImoz9zkXerSbJ7HRPFEA.png',
    href: 'https://medium.com/@andrey93077/how-to-integrate-gpt-js-prebid-js-and-apstag-js-amazon-complete-setup-guide-dd49a7ea1164',
  },
]

function Article({ title, description, href, imageUrl }: TArticle) {
  return (
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
