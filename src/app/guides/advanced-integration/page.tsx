import { Article } from '@/components/layout/article/Article'
import { ArticlePagination } from '@/components/ui/pagination/ArticlePagination'
import { SourceCode } from '@/components/ui/sourceCode/SourceCode'

export default function AdvancedIntegration() {
  return (
    <Article
      title="Integrating Google, Prebid & Amazon APS"
      description="A practical guide showing how to run prebid.js and apstag.js in parallel, synchronize targeting, and fire gpt.js"
    >
      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3 className="mt-0 mb-4">Idea</h3>
        <p>
          This project demonstrates how to integrate Google GPT.js, Prebid.js,
          and Amazon APS (apstag) together in a unified header bidding setup. It
          initializes all three libraries in sequence, manages async bid
          responses, and syncs targeting to GPT for ad rendering — providing a
          clean, production-ready example of multi-source ad monetization with
          full debugging support.
        </p>

        <h3>Recommended pattern</h3>
        <ol>
          <li>
            Define GPT slots early (so the DOM and GPT slot objects exist).
          </li>
          <li>Start Prebid and apstag auctions in parallel.</li>
          <li>Wait for both to finish (or for a timeout).</li>
          <li>Apply Prebid and apstag targeting to GPT.</li>
          <li>
            Call googletag.display() (first render) or
            googletag.pubads().refresh() for subsequent refreshes.
          </li>
        </ol>
      </section>

      <SourceCode
        githubUrl="advanced-integration"
        demoUrl="advanced-integration"
      />

      <section className="pt-8 bg-white p-6 shadow-sm">
        <h3 className="mt-0 mb-4">Sample implementation</h3>
        <iframe src="/demo/advanced-integration" width="100%" height="350px" />
      </section>

      <ArticlePagination
        prev={{
          link: '/guides',
          title: 'Overview',
        }}
        next={{
          link: '/guides/lazy-loading',
          title: 'Lazy loading',
        }}
      />
    </Article>
  )
}
