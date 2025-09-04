import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageCircle, Users, BookOpen, AlertCircle } from "lucide-react"

const Help = () => {
  const faqData = [
    {
      question: "How do I check current MSP rates for my crops?",
      answer: "Visit the MSP Rates section from the sidebar navigation. You'll find the latest minimum support prices for all major crops, updated according to government announcements. The rates include both Kharif and Rabi season crops."
    },
    {
      question: "What farming techniques are best for my region?",
      answer: "Our Farming Techniques section covers various methods suitable for different climatic conditions. Consider factors like soil type, water availability, and local climate when choosing techniques. For personalized advice, contact our agricultural experts."
    },
    {
      question: "How can I access weather information for farming?",
      answer: "Weather updates will be integrated with our AI system to provide real-time forecasts, rainfall predictions, and agricultural advisories specific to your location."
    },
    {
      question: "Where can I get help with pest and disease management?",
      answer: "Check our Farming Techniques section under Pest Control tab. You'll find information on Integrated Pest Management (IPM), biological control methods, and organic pesticides. For urgent issues, contact our helpline."
    },
    {
      question: "How do I know which crops to plant this season?",
      answer: "Consider factors like soil type, water availability, market demand, and MSP rates. Our system will soon provide AI-powered crop recommendations based on your location and conditions."
    },
    {
      question: "Can I get financial assistance for implementing new farming techniques?",
      answer: "Yes, various government schemes provide financial support for modern farming equipment, irrigation systems, and sustainable agriculture practices. Contact your local agricultural department for scheme details."
    }
  ]

  const supportChannels = [
    {
      icon: Phone,
      title: "Helpline",
      description: "24/7 agricultural support hotline",
      contact: "1800-XXX-AGRI",
      availability: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your queries",
      contact: "support@agridash.gov.in",
      availability: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Quick assistance via WhatsApp",
      contact: "+91-XXXXX-XXXXX",
      availability: "Mon-Sat, 9 AM - 6 PM"
    },
    {
      icon: Users,
      title: "Field Officers",
      description: "Local agricultural extension officers",
      contact: "Contact your local office",
      availability: "Working days"
    }
  ]

  const emergencyServices = [
    {
      title: "Crop Disease Emergency",
      number: "1800-XXX-CROP",
      description: "Immediate help for crop diseases and pest outbreaks"
    },
    {
      title: "Weather Alert Service",
      number: "1800-XXX-WEATHER", 
      description: "Severe weather warnings and advisories"
    },
    {
      title: "Market Price Updates",
      number: "1800-XXX-MARKET",
      description: "Real-time market prices and trading information"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Help & Support</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get assistance with farming techniques, crop management, and accessing agricultural services. 
          Our support team is here to help you succeed in agriculture.
        </p>
      </div>

      {/* Emergency Services */}
      <Card className="border-red-200 bg-red-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertCircle className="h-5 w-5" />
            Emergency Agricultural Services
          </CardTitle>
          <CardDescription>For urgent agricultural issues, contact these dedicated helplines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-700 mb-1">{service.title}</h4>
                <p className="text-lg font-mono text-red-600 mb-2">{service.number}</p>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportChannels.map((channel, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <channel.icon className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">{channel.title}</CardTitle>
              <CardDescription>{channel.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="font-mono text-sm bg-muted px-2 py-1 rounded">{channel.contact}</p>
              <Badge variant="secondary" className="text-xs">{channel.availability}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>
            Find quick answers to common agricultural queries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Training Programs</CardTitle>
            <CardDescription>Upcoming agricultural training sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Modern Irrigation Techniques</p>
                  <p className="text-sm text-muted-foreground">February 15, 2024</p>
                </div>
                <Badge>Upcoming</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Organic Farming Workshop</p>
                  <p className="text-sm text-muted-foreground">February 28, 2024</p>
                </div>
                <Badge>Registration Open</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Useful Links</CardTitle>
            <CardDescription>External resources for farmers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              Government Agricultural Schemes
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Soil Health Card Portal
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              PM Kisan Samman Nidhi
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Agricultural Marketing Division
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Help