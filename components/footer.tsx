export function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            © 2025 Shibu Raj Singh. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/"
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors"
            >
              About
            </a>
            <a
              href="/projects"
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}