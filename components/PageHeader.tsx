import { Train } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function PageHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Train className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Train Ticket Refund Calculator
        </h1>
        <ThemeToggle />
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        Calculate your Indian Railways ticket refund amount instantly
      </p>
    </div>
  );
}
