export const ArticlePagination = ({ prev, next }) => {
  return (
    <div className="flex justify-between items-center my-12 px-4 py-6 bg-gray-50 rounded-2xl shadow-md">
      {prev ? (
        <a
          href={prev.link}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className="text-sm">
            <span className="font-medium">{prev.title}</span>
          </div>
        </a>
      ) : (
        <div></div>
      )}

      {next && (
        <a
          href={next.link}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
        >
          <div className="text-sm text-right">
            <span className="font-medium">{next.title}</span>
          </div>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      )}
    </div>
  )
}
