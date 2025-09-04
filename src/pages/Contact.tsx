import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, Building } from "lucide-react"

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

  const officeLocations = [
    {
      title: "Regional Agricultural Office - North",
      address: "Block A, Agricultural Complex, Sector 15, New Delhi - 110001",
      phone: "+91-11-XXXX-XXXX",
      email: "north@agridash.gov.in",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      title: "Regional Agricultural Office - South",
      address: "Agricultural Tower, Anna Salai, Chennai - 600002",
      phone: "+91-44-XXXX-XXXX", 
      email: "south@agridash.gov.in",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      title: "Regional Agricultural Office - West",
      address: "Krishi Bhavan, Bandra Kurla Complex, Mumbai - 400051",
      phone: "+91-22-XXXX-XXXX",
      email: "west@agridash.gov.in", 
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      title: "Regional Agricultural Office - East",
      address: "Agriculture House, Salt Lake, Kolkata - 700091",
      phone: "+91-33-XXXX-XXXX",
      email: "east@agridash.gov.in",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get in touch with our agricultural experts and support team. We're here to help you with 
          farming techniques, crop management, and accessing government agricultural services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Send us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location/State</Label>
                <Input id="location" placeholder="Enter your location" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Query Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farming">Farming Techniques</SelectItem>
                    <SelectItem value="msp">MSP Rates</SelectItem>
                    <SelectItem value="weather">Weather Information</SelectItem>
                    <SelectItem value="schemes">Government Schemes</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your query or issue in detail"
                  className="min-h-[100px]"
                  required 
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Contact</CardTitle>
              <CardDescription>Reach us directly through these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">National Helpline</p>
                  <p className="text-muted-foreground">1800-XXX-AGRI (Free)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-muted-foreground">support@agridash.gov.in</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Support Hours</p>
                  <p className="text-muted-foreground">24/7 Emergency Support</p>
                  <p className="text-muted-foreground">Mon-Fri 9 AM - 6 PM Regular Support</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-red-700">Emergency Agricultural Support</CardTitle>
              <CardDescription>For urgent farming issues requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-semibold text-red-700">Emergency Hotline: 1800-XXX-EMERGENCY</p>
                <p className="text-sm text-muted-foreground">
                  Available 24/7 for crop disease outbreaks, severe weather alerts, and critical farming emergencies
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Regional Offices */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Building className="h-6 w-6" />
          Regional Offices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officeLocations.map((office, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{office.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <p className="text-sm">{office.phone}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <p className="text-sm">{office.email}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="text-sm text-muted-foreground">{office.hours}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact