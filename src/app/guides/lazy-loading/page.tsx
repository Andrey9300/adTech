import { Article } from '@/components/layout/article/Article'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { ArticlePagination } from '@/components/ui/pagination/ArticlePagination'

export default function LazyLoading() {
  return (
    <Article
      title="Lazy-Loading Ads, Best Practices"
      description="Learn how to efficiently load ad units as they become visible to maximize ad performance and enhance user experience."
    >
      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3 className="mt-0 mb-4">Idea</h3>
        <p className="text-gray-700 mb-2">
          Loading ads immediately on page load can drain resources, delay core
          content rendering, and hurt user experience—especially on mobile or
          slow networks. Lazy-loading ad units means they only fetch and render
          when likely to be seen by the user.
        </p>
        <p className="text-gray-700">
          By deferring ad requests until the ad container is near the viewport
          (or visible at a threshold), you:
        </p>
        <ol className="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>Increase overall CPM revenue.</li>
          <li>Reduce unused ad loads (ads that never appear on screen).</li>
          <li>Improve page load speed and Core Web Vitals.</li>
          <li>
            Offer a better UX by avoiding delays and invisible network requests.
          </li>
        </ol>

        <h3>Visibility threshold: the key trigger</h3>
        <p className="text-gray-700 mb-3">
          A central question:{' '}
          <strong>when should you trigger the ad load?</strong> Many
          implementations wait until the ad container is fully visible; but
          waiting too long may risk missing the ad impression window or causing
          layout shifts. Buffering a bit earlier helps.
        </p>
        <p className="text-gray-700 mb-3">
          <strong>Recommended pattern:</strong> trigger when the ad unit element
          is around <em>10 % visible</em> in the viewport. This gives you a
          head-start—enough time to send the request, receive the bid, set
          targeting, and render the creative before the user scrolls past.
        </p>
        <p className="text-gray-700">
          However — every site is different. You may need to adjust the
          threshold (e.g., 20 %, 30 %, or even pre-load just above the fold)
          depending on ad latency, viewport height, and scroll speed.
        </p>

        <h3>Tuning & best practices</h3>
        <ol>
          <li>
            <strong>Pre-load above the fold:</strong> If your ad slot is visible
            on page load, trigger it earlier (e.g., threshold 0 or immediate
            load) to avoid delay.
          </li>
          <li>
            <strong>Monitor bid latency:</strong> Use console logs or
            performance traces to see how long bids take — if bids frequently
            arrive late, increase threshold or start loading earlier.
          </li>
          <li>
            <strong>Idle vs busy users:</strong> On slower devices or heavy
            pages, preload ads with a larger buffer (e.g., 20–30% visibility) so
            the ad request finishes in time.
          </li>
          <li>
            <strong>Cleanup observers:</strong> Always disconnect the
            IntersectionObserver once done to avoid memory overhead.
          </li>
          <li>
            <strong>Fallback logic:</strong> If the slot never becomes visible
            (e.g., user doesn’t scroll), either skip loading or load after a
            timeout to increase fill opportunity.
          </li>
        </ol>
      </section>

      <section className="mb-8 bg-white p-8 shadow-sm w-sm">
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <Link
            href="https://github.com/Andrey9300/adTech/tree/master/src/app/demo/lazy-loading"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center inline-flex items-center no-underline gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Source Code
          </Link>
          <Link
            href="/demo/lazy-loading"
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
