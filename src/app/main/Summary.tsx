export function Summary() {
  return (
    <div className="px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        Hi, I’m Andrei — Senior Frontend Engineer focused on AdTech &
        high-performance web apps.
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        I write practical guides about ad technologies (GAM, GPT, Prebid),
        performance optimization, and frontend architecture using React and
        Next.js.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/guides"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition"
        >
          Read Guides
        </a>
        <a
          href="/about"
          className="inline-block px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          About me
        </a>
      </div>
    </div>
  )
}
