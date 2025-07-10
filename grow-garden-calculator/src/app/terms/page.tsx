import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions - Grow A Garden Calculator",
  description: "Terms and conditions for using the Grow A Garden Calculator. Please read before using our service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-400">Last updated: January 2025</p>
          </header>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  By accessing and using the Grow A Garden Calculator website (growagardencalculator.net),
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Use License</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  Permission is granted to temporarily use the Grow A Garden Calculator for personal,
                  non-commercial purposes only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials without permission</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law,
                  this Company:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                </ul>
                <p>
                  <strong>Important:</strong> This website is not affiliated with, endorsed by, or officially associated with
                  Gamer Robot Inc, Roblox Corporation, or the game "Grow A Garden". All game-related content, names,
                  and images are the property of their respective owners.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Data Accuracy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  While we strive to keep the calculator data accurate and up-to-date:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Crop values and mutation multipliers may change without notice as the game updates</li>
                  <li>We are not responsible for any trading losses based on our calculator results</li>
                  <li>Users should verify current game values before making significant trades</li>
                  <li>The calculator is provided as a helpful tool, not as official game guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>You may not use our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>As a user of this calculator, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the calculator responsibly and for legitimate gaming purposes</li>
                  <li>Not attempt to circumvent any security measures</li>
                  <li>Not overload our servers with excessive requests</li>
                  <li>Respect the intellectual property rights of all parties</li>
                  <li>Follow the Roblox Terms of Service when playing Grow A Garden</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Limitations</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  In no event shall Grow A Garden Calculator or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on this website.
                </p>
                <p>
                  Some jurisdictions do not allow limitations on implied warranties or limitations of liability
                  for consequential or incidental damages; these limitations may not apply to you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Revisions and Errata</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  The materials appearing on this website could include technical, typographical, or photographic errors.
                  We do not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
                <p>
                  We may make changes to the materials contained on its website at any time without notice.
                  However, we do not make any commitment to update the materials.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Modifications</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  We may revise these terms of service for its website at any time without notice.
                  By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
                <p>
                  Changes will be posted on this page with an updated revision date.
                  Continued use of the website after changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  These terms and conditions are governed by and construed in accordance with applicable laws,
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
