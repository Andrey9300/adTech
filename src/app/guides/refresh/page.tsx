import { Article } from '@/components/layout/article/Article'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { ArticlePagination } from '@/components/ui/pagination/ArticlePagination'

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

      <section className="mb-8 bg-white p-8 shadow-sm w-sm">
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <Link
            href="https://github.com/Andrey9300/adTech/tree/master/src/app/demo/refresh"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center inline-flex items-center no-underline gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Source Code
          </Link>
          <Link
            href="/demo/refresh"
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
        <iframe src="/demo/refresh" width="100%" height="350px" />
      </section>

      <ArticlePagination
        prev={{
          link: '/guides/lazy-loading',
          title: 'Lazy loading',
        }}
      />
    </Article>
  )
}
