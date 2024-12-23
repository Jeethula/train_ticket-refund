import { Button } from '@/components/ui/button';

interface MenuToggleProps {
  selectedMenu: 'calculator' | 'rules';
  setSelectedMenu: (menu: 'calculator' | 'rules') => void;
}

export function MenuToggle({ selectedMenu, setSelectedMenu }: MenuToggleProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center mb-8 dark:bg-gray-800 p-2 rounded-lg shadow-md inline-flex mx-auto">
        <Button
          onClick={() => setSelectedMenu('calculator')}
          className={`
            ${selectedMenu === 'calculator' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white hover:bg-gray-100'} 
            text-${selectedMenu === 'calculator' ? 'white' : 'blue-600'}
            rounded-r-none
          `}
        >
          Calculator
        </Button>
        <Button
          onClick={() => setSelectedMenu('rules')}
          className={`
            ${selectedMenu === 'rules' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white hover:bg-gray-100'} 
            text-${selectedMenu === 'rules' ? 'white' : 'blue-600'}
            rounded-l-none border-l-0
          `}
        >
          Rules
        </Button>
      </div>
    </div>
  );
}
