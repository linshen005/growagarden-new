import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Grow A Garden Calculator",
  description: "Our privacy policy explains how we collect, use, and protect your information when using the Grow A Garden Calculator.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: January 2025</p>
          </header>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  The Grow A Garden Calculator is designed with privacy in mind. We collect minimal information to provide our service:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage Data:</strong> Basic analytics about how the calculator is used (anonymous)</li>
                  <li><strong>Technical Data:</strong> Browser type, device information for compatibility purposes</li>
                  <li><strong>No Personal Data:</strong> We do not collect names, emails, or any personal information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>How We Use Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>The limited data we collect is used solely to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve the calculator's functionality and user experience</li>
                  <li>Ensure compatibility across different devices and browsers</li>
                  <li>Monitor site performance and fix technical issues</li>
                  <li>Understand which features are most valuable to users</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Cookies and Local Storage</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Our website may use:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the calculator</li>
                  <li><strong>Local Storage:</strong> May store your calculator preferences locally on your device</li>
                </ul>
                <p>You can disable cookies in your browser settings if preferred.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>We may use third-party services for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Analytics:</strong> To understand site usage patterns</li>
                  <li><strong>Hosting:</strong> To deliver the calculator reliably</li>
                  <li><strong>CDN Services:</strong> To ensure fast loading times globally</li>
                </ul>
                <p>These services have their own privacy policies and may collect data according to their terms.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>We implement security measures to protect the limited data we collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Minimal data collection principle</li>
                  <li>No storage of sensitive personal information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  Our calculator is designed for Roblox players, which may include users under 13.
                  We do not knowingly collect personal information from children. The calculator
                  functions without requiring any personal data input.
                </p>
                <p>
                  Parents and guardians are encouraged to monitor their children's internet usage
                  and review the privacy policies of websites their children visit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Changes to Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  We may update this privacy policy periodically to reflect changes in our practices
                  or legal requirements. Users will be notified of significant changes through the website.
                </p>
                <p>
                  Continued use of the calculator after policy updates constitutes acceptance of
                  the revised terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  If you have questions about this privacy policy or our data practices,
                  you can contact us through the following methods:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the feedback form on our website</li>
                  <li>Report issues through our community channels</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  This privacy policy applies specifically to growagardencalculator.net and
                  our Grow A Garden Calculator service.
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
