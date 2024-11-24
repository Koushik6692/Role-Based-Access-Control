import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex h-16 items-center gap-x-4 px-6 shadow-sm">
        <div className="flex flex-1 gap-x-4 lg:ml-0 ml-12">
          <div className="relative max-w-md w-full">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="h-10 w-full rounded-md border-0 bg-gray-50 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <button className="relative rounded-full bg-gray-50 p-2 hover:bg-gray-100">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
            alt="User"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}