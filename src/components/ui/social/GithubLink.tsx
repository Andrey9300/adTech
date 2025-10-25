export default function GithubLink({ white }: { white?: boolean }) {
  const color = white
    ? 'inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-1 py-1 hover:bg-gray-100'
    : 'p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition'
  return (
    <a
      href="https://github.com/Andrey9300/adTech"
      target="_blank"
      rel="noopener noreferrer"
      className={color}
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.04c-3.2.7-3.88-1.43-3.88-1.43-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.67 1.25 3.32.96.1-.76.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.3-.52-1.53.11-3.19 0 0 .97-.31 3.18 1.18a11.12 11.12 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.66.24 2.89.12 3.19.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.68.41.35.78 1.04.78 2.1v3.12c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    </a>
  )
}
