import { Article } from '@/components/layout/article/Article'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { ArticlePagination } from '@/components/ui/pagination/ArticlePagination'

export default function LazyLoading() {
  return (
    <Article
      title="Lazy loading for ads"
      description="A practical guide showing how to lazy load ads and earn more money"
    >
      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3 className="mt-0 mb-4">Idea</h3>
        <div>Description</div>

        <h3>Recommended pattern</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>...</li>
        </ol>

        <div>Loading ads libs</div>
        <div>Ads slot visible for 5% - make request</div>
        {/* показать визуально шаги выше  */}
      </section>

      <section className="mb-8 bg-white p-8 shadow-sm w-sm">
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <Link
            href="https://github.com/Andrey9300/adTech/tree/master/src/app/demo/advanced-integration"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center inline-flex items-center no-underline gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Source Code
          </Link>
          <Link
            href="/demo/advanced-integration"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center inline-flex items-center no-underline gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Live Demo
            <ExternalLink size={20} />
          </Link>
        </div>
      </section>

      <section className="pt-8 bg-white p-6 shadow-sm">
        <h3 className="mt-0 mb-4">Sample implementation</h3>
        <iframe src="/demo/lazy-loading" width="100%" height="350px" />
      </section>

      <ArticlePagination
        prev={{
          link: '/guides/advanced-integration',
          title: 'Advanced integration',
        }}
      />
    </Article>
  )
}
