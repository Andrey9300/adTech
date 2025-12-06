import { Article } from '@/components/layout/article/Article'
import { ArticlePagination } from '@/components/ui/pagination/ArticlePagination'
import { SourceCode } from '@/components/ui/sourceCode/SourceCode'

export default function Refresh() {
  return (
    <Article
      title="Smart Ad Refresh Strategy to Boost Revenue"
      description="Learn how to refresh efficiently"
    >
      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3 className="mt-0 mb-4">Idea</h3>
        <p className="text-lg mb-4 leading-relaxed">
          Refreshing ads intelligently is one of the simplest yet most effective
          ways to
          <span className="font-semibold"> increase your ad revenue</span>. Many
          publishers overlook how refresh logic impacts both CPM and user
          experience. A smart refresh strategy ensures you show new ads without
          annoying users or breaking advertiser viewability rules.
        </p>

        <h3>Why Ad Refreshing Matters</h3>
        <p className="mb-4 leading-relaxed">
          When ads are refreshed properly, they increase the number of viewable
          impressions, leading to higher fill rates and CPMs. However,
          refreshing too often can result in lower-quality impressions and even
          violate ad policies.
        </p>

        <p className="text-sm sm:text-base">
          <strong>Key principle:</strong> Only refresh ads that were visible to
          the user for at least <strong>30 seconds</strong>.
        </p>

        <h3>Recommended Refresh Interval</h3>
        <p>
          Never refresh your ads more frequently than every{' '}
          <strong>30 seconds</strong>. This ensures advertisers receive proper
          viewability metrics and helps you maintain compliance with major ad
          networks like Google Ad Manager and Prebid.
        </p>
        <p>
          By combining visibility tracking and refresh timing, you ensure each
          ad has a meaningful chance to be viewed and monetized. This balanced
          approach
          <span>
            {' '}
            improves CPM, user satisfaction, and long-term revenue stability.
          </span>
        </p>
      </section>

      <SourceCode githubUrl="refresh" demoUrl="refresh" />

      <section className="pt-8 bg-white p-6 shadow-sm">
        <h3 className="mt-0 mb-4">Sample implementation</h3>
        <iframe src="/demo/refresh" width="100%" height="350px" />
      </section>

      <ArticlePagination
        prev={{
          link: '/guides/lazy-loading',
          title: 'Lazy loading',
        }}
        next={{
          link: '/guides/gdpr',
          title: 'GDPR and privacy settings',
        }}
      />
    </Article>
  )
}
