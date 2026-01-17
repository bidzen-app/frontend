export default function WhySerious() {
  const points = [
    {
      title: "Lost tenders = lost revenue",
      description:
        "Every tender you miss is a contract going to someone else. The opportunity cost adds up fast.",
    },
    {
      title: "Missed deadlines = zero chance",
      description:
        "Government portals don't give extensions. If you're late by a day, you're out.",
    },
    {
      title: "Brokers add cost and dependency",
      description:
        "Relying on middlemen means paying commissions, losing visibility, and never building your own pipeline.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            This isn&apos;t just inconvenient.
            <br className="hidden sm:block" />
            <span className="sm:ml-0"> It&apos;s costing you money.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Most IT vendors we spoke to estimate they miss 3–5 relevant tenders
            every month.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 sm:p-8 border border-red-100 dark:border-red-800/30"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-4">
                <span className="text-red-600 dark:text-red-400 font-bold text-lg sm:text-xl">
                  {index + 1}
                </span>
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
