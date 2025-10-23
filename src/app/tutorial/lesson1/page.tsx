import { Article } from "@/components/layout/article/Article";

export default function Lesson1() {
  return (
    <Article
      title="Understanding State Management in React"
      description="A complete guide to managing local and global state effectively."
    >
      <p>State management is one of the most important topics in React...</p>

      <h2>Local vs Global State</h2>
      <p>
        Local state lives within a component, while global state is shared
        across the app...
      </p>

      <ul>
        <li>useState for local state</li>
        <li>Context or Zustand for global state</li>
        <li>Redux for complex applications</li>
      </ul>

      <blockquote>
        “Keep state as close as possible to where it’s used.” — React Docs
      </blockquote>
    </Article>
  );
}
