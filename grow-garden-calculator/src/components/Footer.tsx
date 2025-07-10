import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const wikiLinks = [
    "Firework Flower Grow A Garden",
    "Bone Blossom Grow A Garden",
    "Burning Bud Grow A Garden",
    "Dinosaur Egg Grow A Garden",
    "Candy Blossom Grow A Garden",
    "Pet Triceratops",
    "Pet Raptor",
    "Pet Stegosaurus",
    "Pet Brontosaurus",
    "Pet Pterodactyl"
  ];

  const aboutLinks = [
    { name: "Home", href: "/" },
    { name: "Fruit Value Calculator", href: "/calculator" },
    { name: "Mutations Wiki", href: "/wiki/mutations" },
    { name: "Crops Wiki", href: "/wiki/crops" },
    { name: "Pets Wiki", href: "/wiki/pets" },
    { name: "Gears Wiki", href: "/wiki/gears" },
    { name: "Eggs Wiki", href: "/wiki/eggs" },
    { name: "Stock Tracker", href: "/stocks" },
    { name: "Grow A Garden Values", href: "/values" },
    { name: "Grow A Garden Wiki", href: "/wiki" },
    { name: "Grow A Garden Tier List", href: "/tier-list" },
    { name: "Grow A Garden Codes", href: "/codes" },
    { name: "Grow A Garden Font", href: "/font" }
  ];

  const legalLinks = [
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  const socialIcons = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Email", icon: "📧", href: "#" },
    { name: "WhatsApp", icon: "💚", href: "#" },
    { name: "Reddit", icon: "🔶", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Grow A Garden Calculator
            </h3>
            <p className="text-gray-400 text-sm">
              growagardencalculator.net. All Rights Reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-2">
              {socialIcons.map((social) => (
                <Link key={social.name} href={social.href}>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    {social.icon}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="text-sm text-gray-400">
              <p>
                Disclaimer: This website is not affiliated, endorsed, or officially associated with
                Gamer Robot Inc and Grow A Garden.
              </p>
            </div>
          </div>

          {/* Grow A Garden Wiki */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Grow A Garden Wiki
            </h4>
            <div className="space-y-2">
              {wikiLinks.slice(0, 10).map((link) => (
                <Link key={link} href="#" className="block text-gray-400 hover:text-white text-sm">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              About Us
            </h4>
            <div className="space-y-2">
              {aboutLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block text-gray-400 hover:text-white text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Legal
            </h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block text-gray-400 hover:text-white text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 growagardencalculator.net. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
