export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">B</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
              BidZen
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <a
              href="#how-it-works"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              How it works
            </a>
            <a
              href="#early-access"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Early access
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} BidZen. All rights reserved.</p>
          <p>Made in India</p>
        </div>
      </div>
    </footer>
  );
}
