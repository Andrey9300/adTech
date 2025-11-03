import { Article } from '@/components/layout/article/Article'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { ArticlePagination } from '@/components/ui/pagination/ArticlePagination'

export default function AdvancedIntegration() {
  return (
    <Article
      title="Integrating Google, Prebid & Amazon APS"
      description="A practical guide showing how to run prebid.js and apstag.js in parallel, synchronize targeting, and fire gpt.js"
    >
      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3 className="mt-0 mb-4">Idea</h3>
        <div>
          This project demonstrates how to integrate Google GPT.js, Prebid.js,
          and Amazon APS (apstag) together in a unified header bidding setup. It
          initializes all three libraries in sequence, manages async bid
          responses, and syncs targeting to GPT for ad rendering — providing a
          clean, production-ready example of multi-source ad monetization with
          full debugging support.
        </div>

        <h3>Recommended pattern</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            Define GPT slots early (so the DOM and GPT slot objects exist).
          </li>
          <li>Start Prebid and apstag auctions in parallel.</li>
          <li>Wait for both to finish (or for a timeout).</li>
          <li>Apply Prebid and apstag targeting to GPT.</li>
          <li>
            Call{' '}
            <code className="bg-gray-100 px-1 rounded">
              googletag.display()
            </code>{' '}
            (first render) or{' '}
            <code className="bg-gray-100 px-1 rounded">
              googletag.pubads().refresh()
            </code>{' '}
            for subsequent refreshes.
          </li>
        </ol>
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
        <iframe src="/demo/advanced-integration" width="100%" height="300px" />
      </section>

      <ArticlePagination
        prev={{
          link: '/guides',
          title: 'Overview',
        }}
      />
    </Article>
  )
}
