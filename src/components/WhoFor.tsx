export default function WhoFor() {
  const forYou = [
    "You're a solo IT vendor or freelance consultant",
    "You run a small IT company (10–50 people)",
    "You bid on government IT projects in India",
    "You want to reduce time spent searching and filtering",
  ];

  const notForYou = [
    "You work in non-IT sectors (construction, medical, etc.)",
    "You need help writing proposals or submitting bids",
    "You're looking for state-level tender coverage (coming later)",
    "You need a mobile app (web-first for now)",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
          Who is BidZen for?
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 sm:p-8 border border-green-100 dark:border-green-800/30">
            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              This is for you if:
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {forYou.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                >
                  <span className="text-green-500 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              This is NOT for you if:
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {notForYou.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base"
                >
                  <span className="mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
