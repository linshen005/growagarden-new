import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQ - Grow A Garden Calculator | Frequently Asked Questions",
  description: "Find answers to frequently asked questions about the Grow A Garden Calculator, mutation multipliers, crop values, and trading in Roblox Grow A Garden.",
  keywords: ["grow a garden faq", "mutation calculator help", "roblox grow a garden guide", "sheckles calculator", "crop value questions"]
};

export default function FAQPage() {
  const faqs = [
    {
      id: "what-is-calculator",
      question: "What is the Grow A Garden Calculator?",
      answer: "The Grow A Garden Calculator is a free tool designed for Roblox Grow A Garden players to calculate the exact value of their crops. It factors in mutations, weight, quantity, friend bonuses, and other multipliers to give you the precise Sheckles value of your harvest."
    },
    {
      id: "how-to-use",
      question: "How do I use the calculator?",
      answer: "Simply select your crop from the grid, choose any applicable mutations (Growth, Temperature, or Environmental), enter the weight and quantity, adjust friend boost if applicable, and the calculator will instantly show your crop's total value in Sheckles."
    },
    {
      id: "mutation-types",
      question: "What are the different types of mutations?",
      answer: "There are three types of mutations: Growth Mutations (Golden ×20, Rainbow ×50), Temperature Mutations (Wet ×2, Chilled ×2, Drenched ×5, Frozen ×10), and Environmental Mutations (ranging from Choc ×2 to Dawnbound ×150). Only one Growth mutation can be applied per crop, but you can combine Temperature and Environmental mutations."
    },
    {
      id: "highest-multiplier",
      question: "What's the highest possible multiplier?",
      answer: "The highest single Environmental mutation is Dawnbound with a ×150 multiplier. However, you can combine mutations for even higher values. For example, Rainbow (×50) + multiple Environmental mutations can create extremely valuable crops worth millions of Sheckles."
    },
    {
      id: "friend-boost",
      question: "How does Friend Boost work?",
      answer: "Friend Boost is a percentage bonus you can apply when trading or selling crops to friends in the game. It ranges from 0% to 100% and multiplies your crop's base value. This feature helps calculate the additional value you might receive in friend trades."
    },
    {
      id: "data-accuracy",
      question: "How accurate is the calculator data?",
      answer: "Our calculator data is updated regularly to match the current Grow A Garden game values. However, the game developers may change crop prices and mutation multipliers, so there might be occasional discrepancies. We strive to update our data as quickly as possible."
    },
    {
      id: "rarest-crops",
      question: "What are the rarest and most valuable crops?",
      answer: "Some of the rarest crops include Dragon Fruit, Soul Fruit, Celestiberry, Horned Dinoshroom, and Rafflesia. These crops have high base values and become extremely valuable when combined with rare mutations like Shocked, Celestial, or Dawnbound."
    },
    {
      id: "trading-tips",
      question: "Any tips for trading crops?",
      answer: "Always use our calculator to determine fair trade values. Check for mutations carefully, as they can multiply a crop's value by 150x or more. Be cautious of scams and use the game's official trading system. Popular trading ratios are often expressed in 'Carrots' as a currency equivalent."
    },
    {
      id: "mutation-stacking",
      question: "Can I stack multiple mutations?",
      answer: "Yes! You can combine one Growth mutation, multiple Temperature mutations, and multiple Environmental mutations on the same crop. However, only one Growth mutation (Golden or Rainbow) can be applied per crop - they don't stack together."
    },
    {
      id: "sheckles-conversion",
      question: "How do Sheckles convert to other items?",
      answer: "Sheckles are the primary currency in Grow A Garden. Exchange rates vary, but our calculator shows values in Sheckles as the standard. Many players also use 'Carrots' as a trading unit, where high-value items might be worth thousands or millions of Carrots."
    },
    {
      id: "update-frequency",
      question: "How often is the calculator updated?",
      answer: "We monitor Grow A Garden updates closely and update our calculator data whenever the game developers change crop values, add new mutations, or modify multipliers. Major updates typically happen within 24-48 hours of game changes."
    },
    {
      id: "mobile-support",
      question: "Does the calculator work on mobile?",
      answer: "Yes! Our calculator is fully responsive and works perfectly on mobile devices, tablets, and desktop computers. You can use it while playing Grow A Garden on any device."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400">
              Everything you need to know about the Grow A Garden Calculator
            </p>
          </header>

          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Quick Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                New to the calculator? Start by selecting a crop, adding mutations, and entering your crop details.
                The calculator will instantly show your crop's value in Sheckles!
              </p>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-gray-800 border-gray-700 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="bg-gray-800 border-gray-700 mt-8">
            <CardHeader>
              <CardTitle className="text-center">
                Still have questions?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-4">
                Can't find what you're looking for? Our calculator is designed to be intuitive,
                but if you need additional help, try experimenting with different crops and mutations
                to see how the values change.
              </p>
              <p className="text-sm text-gray-400">
                Remember: This calculator is for educational purposes and to help with fair trading
                in the Roblox Grow A Garden community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
