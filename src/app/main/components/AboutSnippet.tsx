import EmailButton from '@/components/ui/social/EmailButton'
import LinkedInButton from '@/components/ui/social/LinkedInButton'

export function AboutSnippet() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-2">About Andrei</h3>
      <p className="text-gray-700">
        Senior Frontend Engineer with 10+ years building scalable cloud products
        and high-performance web apps — from cloud storage platforms to
        streaming video services.{' '}
        <a href="/about" className="text-blue-600 font-medium hover:underline">
          More
        </a>
        .
      </p>
      <div>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>💼 Open to remote, contract, or on-site opportunities.</li>
          <li>🤝 Strong with TypeScript, React, Redux, and system design.</li>
        </ul>
      </div>
      <div className="flex pt-4 pb-4">
        <div className="flex pr-4">
          <EmailButton />
        </div>
        <LinkedInButton />
      </div>
    </div>
  )
}
