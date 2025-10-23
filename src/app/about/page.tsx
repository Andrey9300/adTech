import { Article } from "@/components/layout/article/Article";

export default function About() {
  return (
    <Article
      title="About me"
      description="Lopatin Andrei, Senior Frontend Developer"
    >
      <p>
        Hi there! I'm <strong>Andrei</strong>, a{" "}
        <strong>Senior Frontend Engineer</strong> with over{" "}
        <strong>10 years</strong> of experience in front-end development. I
        specialize in building <strong>scalable cloud-based products</strong>{" "}
        and crafting <strong>high-performance web applications</strong> —
        including large-scale systems like <em>cloud storage platforms</em>{" "}
        (competitors to Google Drive) and <em>online cinemas</em> (competitors
        to Netflix). 🚀
      </p>

      <p>
        I hold a <strong>work permit</strong> and live as a{" "}
        <strong>digital nomad</strong>, open to <strong>remote</strong>,{" "}
        <strong>contract</strong>, or <strong>on-site</strong> opportunities. I
        enjoy collaborating closely with backend engineers, working effectively
        both in teams and independently, and making fast, thoughtful decisions
        to deliver results.
      </p>

      <p>
        My workflow follows <strong>Agile methodologies</strong> — emphasizing
        clear communication, iterative improvement, and consistent delivery.
      </p>

      <h2>Achievements</h2>
      <ul>
        <li>
          💵 Improved revenue by <strong>10%</strong> through ad performance
          optimization.
        </li>
        <li>
          ☁️ Boosted a key performance metric by <strong>4%</strong> in a cloud
          storage platform.
        </li>
        <li>
          📱 Increased ad revenue by <strong>4%</strong> via rolling out a video
          player for mobile web.
        </li>
        <li>
          🎨 Enhanced system efficiency by developing{" "}
          <strong>high-performance UI/UX</strong> components.
        </li>
      </ul>

      <h2>Core Skills</h2>
      <ul>
        <li>
          <strong>Languages & Frameworks:</strong> TypeScript, JavaScript,
          React.js, Redux
        </li>
        <li>
          <strong>Expertise:</strong> Advertising, Web technologies, System
          design
        </li>
        <li>
          <strong>Strengths:</strong> Building and maintaining{" "}
          <em>large-scale products</em> with millions of users
        </li>
      </ul>

      <blockquote>
        “Frontend engineering is not just about pixels — it’s about performance,
        structure, and creating meaningful user experiences.”
      </blockquote>

      <footer className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Feel free to reach out via{" "}
          <a
            href="https://www.linkedin.com/in/andreylopatinyar/"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          or drop me an email at{" "}
          <a
            href="mailto:andrey93077@gmail.com"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            andrey93077@gmail.com
          </a>
          .
        </p>
      </footer>
    </Article>
  );
}
