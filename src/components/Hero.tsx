export default function Hero() {
  return (
    <section className="pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Stop chasing tenders.
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              Let the right ones find you.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
            We scan government portals daily and show you only the IT tenders
            you&apos;re eligible for—so you can decide bid or no-bid in minutes,
            not hours.
          </p>

          <a
            href="#early-access"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors"
          >
            Join Early Access
          </a>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Free during beta. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
