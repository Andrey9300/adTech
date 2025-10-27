import Link from 'next/link'

export default function About() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800 mb-8">
      <section className="relative max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Hi, I’m Andrei 👋
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Senior Frontend Engineer with 10+ years of experience crafting
          performant, scalable, and elegant web applications.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8 md:p-12 border border-gray-100">
        <p className="text-lg leading-relaxed mb-6">
          I’m passionate about building <strong>cloud-based products</strong>{' '}
          and designing <strong>high-performance web apps</strong> — from cloud
          storage platforms (competitors to Google Drive) to online cinemas
          (rivals of Netflix). 🚀
        </p>

        <p className="text-lg leading-relaxed mb-6">
          As a <strong>digital nomad</strong> with a valid work permit, I’m open
          to <strong>remote</strong>, <strong>contract</strong>, or{' '}
          <strong>on-site</strong> opportunities. I thrive in collaborative
          environments, working closely with backend engineers, while also being
          highly effective independently. My workflow is rooted in{' '}
          <strong>Agile methodologies</strong> and fast decision-making.
        </p>

        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Achievements & Impact 💼
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>
              💵 Improved revenue by 10% through ad performance optimization
            </li>
            <li>☁️ Increased key cloud storage metrics by 4%</li>
            <li>📱 Rolled out mobile video player — raised ad revenue by 4%</li>
            <li>⚡ Designed and implemented high-performance UI/UX systems</li>
          </ul>
        </div>

        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Tech Stack & Expertise 🧠
          </h2>
          <p className="text-gray-700 leading-relaxed">
            🤝 Skilled in TypeScript, Javascript, React.js, Redux, Advertising,
            Web technologies, System design.
            <br />
            🤝 Strong background in building and maintaining large-scale
            products with millions of users.
          </p>
        </div>

        <div className="mt-12 text-center border-t pt-8">
          <p className="text-gray-700 mb-6">
            Always open to interesting discussions, collaborations, or new
            opportunities.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:andrey93077@gmail.com"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
            <Link
              href="https://www.linkedin.com/in/andreylopatinyar/"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
