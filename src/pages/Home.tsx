import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wheat, TrendingUp, Cloud, Users, ArrowRight, Sprout } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  const features = [
    {
      icon: Wheat,
      title: "Farming Techniques",
      description: "Learn modern agricultural practices and traditional methods",
      link: "/farming-techniques"
    },
    {
      icon: TrendingUp,
      title: "MSP Rates",
      description: "Current Minimum Support Prices for various crops",
      link: "/msp-rates"
    },
    {
      icon: Cloud,
      title: "Weather Updates",
      description: "Real-time weather information for your region",
      link: "#"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with other farmers and experts",
      link: "/help"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <div className="flex justify-center mb-4">
          <Sprout className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Welcome to Agricultural Information System
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Empowering rural communities with modern agricultural knowledge, weather updates, 
          and market information to improve farming productivity and livelihoods.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link to="/farming-techniques">
            Explore Farming Techniques <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
            <CardHeader className="text-center">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary" className="w-full">
                <Link to={feature.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card className="text-center bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">50+</CardTitle>
            <CardDescription>Farming Techniques</CardDescription>
          </CardHeader>
        </Card>
        <Card className="text-center bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-accent">100+</CardTitle>
            <CardDescription>Crop Varieties</CardDescription>
          </CardHeader>
        </Card>
        <Card className="text-center bg-agriculture-green/5 border-agriculture-green/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-agriculture-green">24/7</CardTitle>
            <CardDescription>Support Available</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default Home