import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

type TSourceCode = {
  githubUrl: string
  demoUrl: string
}

export const SourceCode = ({ githubUrl, demoUrl }: TSourceCode) => (
  <section className="mb-8 bg-white p-6 shadow-sm rounded-xl md:p-8">
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
      <Link
        href={`https://github.com/Andrey9300/adTech/tree/master/src/app/demo/${githubUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Source Code
      </Link>

      <a
        href={`/demo/${demoUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Live Demo
        <ExternalLink size={20} />
      </a>
    </div>
  </section>
)
