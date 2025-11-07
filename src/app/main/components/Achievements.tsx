import LeetCodeLink from '@/components/ui/social/LeetCodeLink'
import Link from 'next/link'
import { ExternalLink, ShieldCheck } from 'lucide-react'

export function Achievements() {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">🏆 Achievements</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <LeetCodeLink />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                LeetCode Progress
              </h3>
            </div>
            <Link
              href="https://leetcode.com/u/andrey93077/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              <ExternalLink size={20} />
            </Link>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Practicing algorithmic problem solving and system design through
            regular coding challenges.
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            250+ problems solved
          </p>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <ShieldCheck color="white" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Certifications
              </h3>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <Link
                href="https://www.hackerrank.com/certificates/27cecf73c8be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>JavaScript (Intermediate)</strong>
              </Link>{' '}
              – HackerRank (2025)
            </li>
            <li>
              <Link
                href="https://www.hackerrank.com/certificates/8850755472aa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Problem Solving (Basic)</strong>
              </Link>{' '}
              – HackerRank (2020)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
