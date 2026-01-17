export default function Solution() {
  const features = [
    {
      title: "Single-window discovery",
      description: "CPPP, GeM, and more—scanned daily. No more tab-hopping.",
    },
    {
      title: "Eligibility matching",
      description: "Know instantly if you qualify based on turnover, certs, and category.",
    },
    {
      title: "Fit score",
      description: "See how well each tender matches your profile before you invest time.",
    },
    {
      title: "Deadline alerts",
      description: "Get notified before submission windows close. Never miss a deadline.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            What if you could see only the tenders that matter?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            BidZen brings all IT tenders to one place, matches them to your
            company profile, and tells you exactly what you need to know—so you
            can make a decision in minutes instead of hours.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
