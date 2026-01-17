export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Set your vendor profile",
      description:
        "Tell us your turnover, certifications, categories, and locations. Takes 5 minutes.",
    },
    {
      step: "2",
      title: "We scan tenders daily",
      description:
        "Our system checks CPPP, GeM, and other central portals—filtering for IT tenders only.",
    },
    {
      step: "3",
      title: "You get what matters",
      description:
        "See matched tenders with eligibility status, fit score, and key details highlighted.",
    },
    {
      step: "4",
      title: "Decide bid or no-bid",
      description:
        "Make informed decisions quickly. No more hours lost on tenders you can't win.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
          How it works
        </h2>

        {/* Desktop: 4 columns with connecting lines */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          {/* Step circles with connecting lines */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((item, index) => (
              <div key={index} className="flex items-center flex-1 last:flex-none">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-600 mx-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Titles and descriptions */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet: 2x2 grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-8 max-w-2xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: single column */}
        <div className="sm:hidden space-y-6">
          {steps.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <span className="text-white font-bold">{item.step}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-base">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
