import { useState } from 'react';
import { Users, Shield, Settings, PieChart, CreditCard, LogOut, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Roles', href: '/roles', icon: Shield },
  { name: 'Reports', href: '/reports', icon: PieChart },
  { name: 'Billing', href: '/billing', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinks = () => (
    <ul role="list" className="flex flex-1 flex-col gap-y-7 px-6">
      <li>
        <ul role="list" className="-mx-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    group flex gap-x-3 rounded-md p-2 text-sm font-semibold
                    ${isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }
                  `}
                >
                  <item.icon className="h-6 w-6 shrink-0" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li className="mt-auto mb-4">
        <button className="group -mx-2 flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
          <LogOut className="h-6 w-6" />
          Sign out
        </button>
      </li>
    </ul>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transform lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="relative flex h-full w-64 flex-col bg-gray-900">
          <div className="flex h-16 shrink-0 items-center px-6">
            <Shield className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">VRV Security</span>
          </div>
          <nav className="flex flex-1 flex-col">
            <NavLinks />
          </nav>
        </div>
        <div
          className="flex-1 bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex h-full flex-col bg-gray-900 w-64">
        <div className="flex h-16 shrink-0 items-center px-6">
          <Shield className="h-8 w-8 text-indigo-500" />
          <span className="ml-2 text-xl font-bold text-white">VRV Security</span>
        </div>
        <nav className="flex flex-1 flex-col">
          <NavLinks />
        </nav>
      </div>
    </>
  );
}