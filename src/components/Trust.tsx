export default function Trust() {
  const points = [
    {
      title: "Problem-first approach",
      description:
        "We talked to dozens of IT vendors before writing a line of code. This tool solves real problems, not imagined ones.",
    },
    {
      title: "Transparent scope",
      description:
        "We're starting with central government portals (CPPP, GeM) and IT tenders only. State portals and other sectors come later.",
    },
    {
      title: "Time is money",
      description:
        "Our goal is simple: help you spend less time searching and more time winning. If we save you 5 hours a week, we've done our job.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
          Built for clarity, not hype
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div key={index} className="text-center sm:text-left">
              <div className="inline-flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                {point.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
