export default function Problem() {
  const quotes = [
    {
      quote: "Tenders are everywhere. CPPP, GeM, department websites... I can't track them all.",
      context: "Solo IT consultant, Delhi",
    },
    {
      quote: "By the time I find a good tender, the deadline is already gone.",
      context: "Small software company, Pune",
    },
    {
      quote: "Eligibility rules are buried in 50-page PDFs. I waste hours just to find out I don't qualify.",
      context: "IT services firm, Bangalore",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
          Sound familiar?
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {quotes.map((item, index) => (
            <blockquote
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 border-l-4 border-blue-600 shadow-sm"
            >
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 italic mb-4">
                &ldquo;{item.quote}&rdquo;
              </p>
              <cite className="text-sm text-gray-500 dark:text-gray-400 not-italic">
                — {item.context}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
