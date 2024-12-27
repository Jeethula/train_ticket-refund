// export function CancellationRules() {
//   return (
//     <div className="max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-6">Indian Railways Ticket Cancellation Rules</h2>
//       <div className="space-y-6">

//     </div>
//   );
// }

export function CancellationRules() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Indian Railways Ticket Cancellation Rules</h2>
      <div className="space-y-4">
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
      {/* <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Important Notes:</strong>
          <ul className="mt-2 space-y-1">
            <li>• Refund processing time: 7-10 working days</li>
            <li>• E-tickets cannot be cancelled after chart preparation</li>
            <li>• Premium Special Trains may have different refund rules</li>
            <li>• Rules are subject to change - Please verify with official IRCTC website</li>
          </ul>
        </p>
      </div> */}
        {/* New sections added below */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 mt-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-yellow-700 dark:text-yellow-300">Special Trains (e.g., Gatimaan Express, Vande Bharat)</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>May have different cancellation and refund rules</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Typically non-refundable or have higher cancellation charges</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Specific terms applicable at the time of booking</span>
            </li>
          </ul>
        </div>
        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 mt-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-cyan-700 dark:text-cyan-300">Chart Preparation and Cancellation</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Cancellation not allowed after chart preparation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Chart preparation time varies by train</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Check train schedule for chart preparation timing</span>
            </li>
          </ul>
        </div>
        <div className="bg-pink-50 dark:bg-pink-900/20 p-4 mt-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-pink-700 dark:text-pink-300">Fare Types and Refund Policies</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Different fare types may have different refund rules</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Discounted fares might have restrictions on refunds</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Senior citizen and student tickets may have specific policies</span>
            </li>
          </ul>
        </div>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-4 mt-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-teal-700 dark:text-teal-300">Payment Methods and Refund Processing</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Refunds processed back to the original payment method</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Time taken for refunds may vary based on payment type</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Bank processing times can affect when refunds are received</span>
            </li>
          </ul>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 mt-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Special Circumstances</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>No-shows: No refund if not traveled, subject to cancellation charges</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Emergencies (e.g., COVID-19): Special refund policies may apply</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>System failures: Refunds processed as per railway guidelines</span>
            </li>
          </ul>
        </div>
        <div className="bg-red-50 mt-4 dark:bg-red-900/20 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-red-700 dark:text-red-300">Group Tickets</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Cancellation rules may differ for group bookings</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Additional fees or restrictions might apply</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 mt-4 dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Important Notes:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Refund processing time: 7-10 working days</li>
              <li>• E-tickets cannot be canceled after chart preparation</li>
              <li>• Premium Special Trains may have different refund rules</li>
              <li>• Rules are subject to change - Please verify with official IRCTC website</li>
            </ul>
          </p>
        </div>
      </div>
  );
}