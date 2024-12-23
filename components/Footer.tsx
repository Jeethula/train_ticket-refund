export function Footer() {
  return (
    <footer className="mt-8 px-4 pb-5 text-center text-sm text-gray-500 dark:text-gray-400">
      <p className="mb-3">
        Built with ❤️ by{' '}
        <a
          href="https://jeethu.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Jeethu
        </a>
      </p>
      <p className="mx-auto max-w-[370px] sm:max-w-none">
        Based on IRCTC cancellation rules. For more details, please{' '}
        <a
          href="https://contents.irctc.co.in/en/CancellationRulesforIRCTCTrain.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
        >
          View official rules
        </a>
      </p>
      <p className="mt-3">Last updated: 23-Dec-2024</p>
    </footer>
  );
}
