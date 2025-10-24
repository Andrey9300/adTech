import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="w-full mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Andrei. All rights reserved.
        </p>

        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="/"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            About
          </a>
          <a
            href="/guides"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Guides
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Andrey9300/adTech"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/andreylopatinyar/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
