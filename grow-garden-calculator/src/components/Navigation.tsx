import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navigation() {
  const navItems = [
    { name: "Wiki", href: "/wiki" },
    { name: "Mutations", href: "/wiki/mutations" },
    { name: "Crops", href: "/wiki/crops" },
    { name: "Pets", href: "/wiki/pets" },
    { name: "Gears", href: "/wiki/gears" },
    { name: "Eggs", href: "/wiki/eggs" },
    { name: "Stocks", href: "/stocks" },
    { name: "Values", href: "/values" },
    { name: "Codes", href: "/wiki/codes" },
    { name: "Fonts", href: "/fonts" }
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              🌱
            </div>
            <span className="text-xl font-bold text-white">
              Grow A Garden Calculator
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-700">
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" className="text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="lg:hidden pb-4">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-700">
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
