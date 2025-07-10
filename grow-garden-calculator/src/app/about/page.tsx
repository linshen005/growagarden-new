import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - Grow A Garden Calculator | Roblox Tool Creators",
  description: "Learn about the team behind the Grow A Garden Calculator, our mission to help Roblox players maximize their farming profits, and our commitment to accurate crop valuations.",
  keywords: ["about grow a garden calculator", "roblox tools team", "crop calculator creators", "grow a garden community"]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              About Grow A Garden Calculator
            </h1>
            <p className="text-xl text-gray-400">
              Empowering Roblox farmers with accurate crop valuations since 2025
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  We created the Grow A Garden Calculator to solve a critical problem in the
                  Roblox Grow A Garden community: determining fair and accurate crop values.
                </p>
                <p>
                  With complex mutation systems and constantly changing values, players needed
                  a reliable tool to calculate crop worth, analyze trades, and maximize their
                  farming profits.
                </p>
                <p>
                  Our calculator has helped thousands of players make informed decisions,
                  avoid unfair trades, and build successful farming strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl">What We Offer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">🧮 Precise Calculations</h4>
                  <p>Accurate crop values factoring in all mutations, weights, and bonuses</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">📊 Real-time Data</h4>
                  <p>Updated crop prices and mutation multipliers matching current game values</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">🎯 Trade Analysis</h4>
                  <p>Win/Fair/Loss (WFL) evaluation for safe and profitable trading</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">📱 Mobile Friendly</h4>
                  <p>Fully responsive design that works perfectly on all devices</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Choose Our Calculator?</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-white mb-2">Lightning Fast</h3>
                <p>Instant calculations as you select crops and mutations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-white mb-2">100% Accurate</h3>
                <p>Regular updates ensure our data matches the game perfectly</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🆓</div>
                <h3 className="font-semibold text-white mb-2">Completely Free</h3>
                <p>No registration, no ads, no hidden costs - just pure functionality</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Community Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">For New Players</h4>
                  <p>
                    Our calculator helps newcomers understand crop values, learn about mutations,
                    and avoid being scammed in their first trades. It's an essential educational
                    tool for mastering Grow A Garden economics.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">For Experienced Farmers</h4>
                  <p>
                    Veteran players use our calculator for complex trade analysis, profit
                    optimization, and inventory valuation. It saves time and ensures maximum
                    returns on their farming investments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Technology</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p>
                Built with modern web technologies, our calculator features a responsive design
                that works seamlessly across all devices. We use React and Next.js for optimal
                performance and SEO optimization.
              </p>
              <p>
                Our data management system tracks game updates in real-time, ensuring that
                crop values and mutation multipliers remain accurate as the game evolves.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-700 p-3 rounded text-center">
                  <div className="font-semibold">React</div>
                  <div className="text-sm text-gray-400">Frontend</div>
                </div>
                <div className="bg-gray-700 p-3 rounded text-center">
                  <div className="font-semibold">Next.js</div>
                  <div className="text-sm text-gray-400">Framework</div>
                </div>
                <div className="bg-gray-700 p-3 rounded text-center">
                  <div className="font-semibold">TypeScript</div>
                  <div className="text-sm text-gray-400">Language</div>
                </div>
                <div className="bg-gray-700 p-3 rounded text-center">
                  <div className="font-semibold">Tailwind</div>
                  <div className="text-sm text-gray-400">Styling</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-300">
              <p className="mb-4">
                This website is not affiliated, endorsed, or officially associated with
                Gamer Robot Inc or Grow A Garden. We are an independent community tool
                created by players, for players.
              </p>
              <p className="text-sm text-gray-400">
                All crop images, names, and game mechanics are property of their respective owners.
                Our calculator is provided for educational and community purposes only.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
