import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function LinkedInButton() {
  return (
    <Link
      href="https://www.linkedin.com/in/andreylopatinyar/"
      target="_blank"
      className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
    >
      <div className="flex items-center justify-center">
        <Linkedin className="w-4 h-4" />
        <span className="pl-2">LinkedIn</span>
      </div>
    </Link>
  )
}
