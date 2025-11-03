import { ArticlePagination } from '@/components/ui/pagination/ArticlePagination'
import { Article } from '@/components/layout/article/Article'

export default function Overview() {
  return (
    <Article
      title="Overview"
      description="Web Advertising Best Practices: GPT.js, Prebid and Amazon Ads in React app"
    >
      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3 className="mt-0 mb-4">Best Practices</h3>
        <p>
          This project demonstrates best practices for integrating advertising
          libraries such as GAM (GPT.js), Prebid.js, and Amazon Ads in a React
          application. It is designed as a practical guide for web developers
          who want to implement ads efficiently, while keeping performance, user
          experience, and privacy in mind.
        </p>
        <p>The main goals of this project are to:</p>

        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            Show how to make ad requests correctly: Learn how to initialize ad
            slots, request ads asynchronously, and ensure proper targeting using
            GPT.js, Prebid.js, and Amazon Ads.
          </li>
          <li>
            Implement lazy loading for ads: Load ads only when they are about to
            enter the viewport to improve page performance and reduce
            unnecessary network requests.
          </li>
          <li>
            Refresh ads properly: Understand when and how to refresh ad slots
            without disrupting user experience or violating ad network
            guidelines.
          </li>
          <li>
            Optimize performance: Apply techniques such as minimizing script
            blocking, batching requests, and reducing the impact on page load
            times.
          </li>
          <li>
            Handle GDPR and privacy compliance: Integrate consent management and
            respect user privacy when loading personalized ads, ensuring
            compliance with regulations like GDPR and CCPA.
          </li>
        </ol>
        <p>
          By following this project, developers will gain a clear understanding
          of how to integrate multiple ad platforms in a React environment while
          maintaining high performance, proper ad behavior and legal compliance.
        </p>
      </section>

      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3>Quick Overview</h3>
        <h4>1. Ad Slot Initialization & Requests</h4>
        <p>
          Use asynchronous loading: Always initialize GPT.js, Prebid, and Amazon
          Ads asynchronously to avoid blocking page rendering. Define ad slots
          declaratively: Keep ad slot definitions centralized, making it easier
          to manage sizes, targets, and ad unit paths. Request ads only once per
          slot: Avoid multiple unnecessary requests; use proper state management
          in React to ensure slots are initialized only once.
        </p>
        <h4>2. Lazy Loading Ads Intersection</h4>
        <p>
          Observer: Use IntersectionObserver to detect when an ad slot is in or
          near the viewport and load ads only at that point. React integration:
          Wrap ad components in a LazyAd component to handle visibility and ad
          requests automatically. Threshold tuning: Configure offsets for
          pre-loading ads slightly before they enter the viewport to prevent
          flickering.
        </p>
        <h4>3. Refreshing Ads</h4>
        <p>
          Controlled refresh: Refresh ads only when necessary (e.g., after user
          interactions or after a certain timeout) to avoid excessive network
          requests. Slot targeting: Ensure new targeting parameters are applied
          before refreshing. React state sync: Manage refresh triggers via React
          state or hooks to ensure predictable updates without breaking ad
          slots.
        </p>
        <h4>4. Performance Optimization</h4>
        <p>
          Script management: Load ad scripts via defer or dynamic imports to
          reduce initial render impact. Batched requests: Combine multiple ad
          requests when possible (Prebid + GPT) to reduce round trips. Avoid
          re-renders: Wrap ad components in React.memo to prevent unnecessary
          re-renders and reloads.
        </p>
        <h4>5. GDPR & Privacy Compliance</h4>
        <p>
          Consent management: Integrate with CMP (Consent Management Platform)
          and check user consent before requesting personalized ads.
          Non-personalized fallback: Serve non-personalized ads if the user opts
          out or consent is denied. Data handling: Do not store or send personal
          user data outside of the ad libraries without explicit consent.
        </p>
      </section>

      <ArticlePagination
        next={{
          link: '/guides/advanced-integration',
          title: 'Advanced integration',
        }}
      />
    </Article>
  )
}
