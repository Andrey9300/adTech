export function AboutSnippet() {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-2">About Andrei</h3>
      <p className="text-gray-700">
        Senior Frontend Engineer with 10+ years building scalable cloud products
        and high-performance web apps — from cloud storage platforms to
        streaming video services.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>💼 Open to remote, contract, or on-site opportunities.</li>
        <li>🤝 Strong with TypeScript, React, Redux, and system design.</li>
        <li>
          📧{' '}
          <a
            href="mailto:andrey93077@gmail.com"
            className="text-blue-600 hover:underline"
          >
            andrey93077@gmail.com
          </a>
        </li>
        <li>
          🔗{' '}
          <a
            href="https://www.linkedin.com/in/andreylopatinyar/"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}
