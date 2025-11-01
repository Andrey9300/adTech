import { Article } from '@/components/layout/article/Article'

export default function AdvancedIntegration() {
  return (
    <Article
      title="Integrating Google, Prebid & Amazon APS"
      description="A practical guide showing how to run prebid.js and apstag.js in parallel, synchronize targeting, and fire gpt.js"
    >
      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3>Idea</h3>
        <div>
          This project demonstrates how to integrate Google GPT.js, Prebid.js,
          and Amazon APS (apstag) together in a unified header bidding setup. It
          initializes all three libraries in sequence, manages async bid
          responses, and syncs targeting to GPT for ad rendering — providing a
          clean, production-ready example of multi-source ad monetization with
          full debugging support.
        </div>
      </section>

      <section className="mb-8 bg-white p-8 shadow-sm">
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

      <section className="text-center mb-8 bg-white p-8 shadow-sm">
        <h3>Sample implementation</h3>
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/Andrey9300/adTech/tree/master/src/app/demo/advanced-integration"
              target="_blank"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              View Source Code
            </a>
            <a
              href="/demo/advanced-integration"
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              See Live Demo
            </a>
          </div>
        </div>
      </section>

      <iframe src="/demo/advanced-integration" width="100%" height="300px" />
    </Article>
  )
}
