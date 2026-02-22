export function Summary() {
  return (
    <div className="px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        Hi, I’m Andrei — Senior Frontend Engineer focused on high-performance
        web apps.
      </h1>
      <p className="mt-4 text-gray-600">
        Building scalable cloud-based products and designing high-performance
        web apps, such as cloud storage or online cinema.
      </p>
      <p className="mt-4 text-gray-600">
        Specialize in performance, monetization, and scalable React/TypeScript
        architectures. My work focuses on revenue-critical systems — optimizing
        ad delivery, improving load speed, and designing frontend architectures
        that directly impact business metrics.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/about"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition"
        >
          About me
        </a>
        <a
          href="https://medium.com/@andrey93077"
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
          target="_blank"
        >
          Articles
        </a>
        <a
          href="/guides"
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
        >
          Guides
        </a>
      </div>
    </div>
  )
}
