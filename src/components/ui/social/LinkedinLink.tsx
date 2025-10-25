import { Linkedin } from 'lucide-react'

export default function LinkedinLink({ white }: { white?: boolean }) {
  const color = white
    ? 'inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-1 py-1 hover:bg-gray-100'
    : 'p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition'
  return (
    <a
      href="https://www.linkedin.com/in/andreylopatinyar/"
      target="_blank"
      rel="noopener noreferrer"
      className={color}
    >
      <Linkedin className="w-4 h-4" />
    </a>
  )
}
