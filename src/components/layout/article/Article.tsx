import React from "react";

type ArticleProps = {
  title: string;
  description?: string;
  date?: string;
  children: React.ReactNode;
};

export const Article = ({
  title,
  description,
  date,
  children,
}: ArticleProps) => {
  return (
    <article className="mx-auto px-4 py-4">
      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-600 mb-4">{description}</p>
        )}

        <div className="text-sm text-gray-500 flex items-center gap-2">
          {date && (
            <>
              <span>•</span>
              <time dateTime={date}>{formatDate(date)}</time>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-gray max-w-none">{children}</div>
    </article>
  );
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
