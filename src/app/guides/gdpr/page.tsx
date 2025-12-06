import { Article } from '@/components/layout/article/Article'
import { ArticlePagination } from '@/components/ui/pagination/ArticlePagination'
import { SourceCode } from '@/components/ui/sourceCode/SourceCode'

export default function Gdpr() {
  return (
    <Article
      title="How to work with GDPR and privacy setting"
      description="Learn how to GDPR"
    >
      <section className="mb-8 bg-white p-8 shadow-sm">
        <h3 className="mt-0 mb-4">Idea</h3>
        <p className="text-gray-700 mb-2">
          GDPR is an EU data-protection law that gives users control over
          personal data and requires websites to have a lawful basis (usually
          explicit consent) before processing data used for tracking or targeted
          advertising.
        </p>
        <p className="text-gray-700">Key things — how GDPR affects ads:</p>
        <ol className="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>
            Personal identifiers (cookies, IPs, device IDs, behavior) are
            treated as personal data.
          </li>
          <li>
            Consent must be informed, specific, freely given, and recorded
            before loading tracking/ad scripts.
          </li>
          <li>
            If consent is denied, fall back to non-personalized or contextual
            ads and avoid setting tracking cookies.
          </li>
          <li>
            Use a certified CMP and share a clear vendor/purpose list so ad
            networks can read the consent status (e.g., via TCF).
          </li>
        </ol>
        <p className="text-gray-700">
          Step-by-step logic (how to implement, at high level):
        </p>
        <ol>
          <li>
            Detect user location/scope — decide whether GDPR likely applies (EU
            users).
          </li>
          <li>
            Show CMP banner — explain purposes, list vendors, provide granular
            toggles.
          </li>
          <li>
            Block ad/tracking scripts by default — do not load them before
            consent.
          </li>
          <li>Read consent string (e.g., via __tcfapi) when the user acts.</li>
          <li>
            If consent granted → initialize ad services with personalized
            settings (update consent mode).
          </li>
          <li>
            If consent denied or partial → load non-personalized/contextual ads
            and disable trackers.
          </li>
          <li>
            Store & expose withdrawal — let users change settings easily and
            propagate updates to ad vendors.
          </li>
          <li>
            Document & maintain — log consents, keep vendor lists up to date,
            and review periodically.
          </li>
        </ol>
        <p className="text-gray-700">
          Short disclaimer: Not legal advice — verify your implementation for
          your site and jurisdictions.
        </p>
      </section>

      <SourceCode githubUrl="gdpr" demoUrl="gdpr" />

      <ArticlePagination
        prev={{
          link: '/guides/refresh',
          title: 'Refresh strategy',
        }}
      />
    </Article>
  )
}
