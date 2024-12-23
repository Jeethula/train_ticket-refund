export function CancellationRules() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Indian Railways Ticket Cancellation Rules</h2>
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Confirmed (CNF) Tickets</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Cancellation allowed up to 4 hours before train departure</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>No refund if cancelled within 4 hours of departure</span>
            </li>
          </ul>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Waitlist (WL) & RAC Tickets</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Cancellation allowed up to 30 minutes before departure</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>No refund if cancelled within 30 minutes of departure</span>
            </li>
          </ul>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-300">Tatkal Tickets</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Confirmed Tatkal: No refund under any circumstances</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Waitlist/RAC Tatkal: Cancellation charges apply
                <ul className="ml-6 mt-1">
                  <li>AC Classes: ₹65</li>
                  <li>Sleeper Class: ₹60</li>
                </ul>
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-300">Special Situations - Full Refund Available</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Train cancelled by Railways</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Train delayed by more than 3 hours</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>AC failure (difference in fare for affected portion)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Downgraded accommodation (difference in fare)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Important Notes:</strong>
          <ul className="mt-2 space-y-1">
            <li>• Refund processing time: 7-10 working days</li>
            <li>• E-tickets cannot be cancelled after chart preparation</li>
            <li>• Premium Special Trains may have different refund rules</li>
            <li>• Rules are subject to change - Please verify with official IRCTC website</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
