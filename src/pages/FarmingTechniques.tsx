import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, Scissors, Bug, Leaf, Sun, TreePine } from "lucide-react"

const FarmingTechniques = () => {
  const techniques = {
    irrigation: [
      {
        title: "Drip Irrigation",
        description: "Water-efficient method that delivers water directly to plant roots",
        benefits: ["Saves water", "Reduces weeds", "Better yield"],
        difficulty: "Moderate"
      },
      {
        title: "Sprinkler System",
        description: "Automated water distribution system for uniform coverage",
        benefits: ["Uniform coverage", "Time-saving", "Adjustable"],
        difficulty: "Easy"
      },
      {
        title: "Furrow Irrigation",
        description: "Traditional method using channels between crop rows",
        benefits: ["Low cost", "Simple setup", "Suitable for row crops"],
        difficulty: "Easy"
      }
    ],
    cropManagement: [
      {
        title: "Crop Rotation",
        description: "Systematic planting of different crops in sequence",
        benefits: ["Soil health", "Pest control", "Nutrient balance"],
        difficulty: "Moderate"
      },
      {
        title: "Intercropping",
        description: "Growing two or more crops simultaneously",
        benefits: ["Land efficiency", "Risk reduction", "Better income"],
        difficulty: "Moderate"
      },
      {
        title: "Cover Cropping",
        description: "Growing crops to cover and protect soil",
        benefits: ["Soil protection", "Weed suppression", "Organic matter"],
        difficulty: "Easy"
      }
    ],
    pestControl: [
      {
        title: "Integrated Pest Management (IPM)",
        description: "Holistic approach combining multiple pest control methods",
        benefits: ["Eco-friendly", "Cost-effective", "Sustainable"],
        difficulty: "Advanced"
      },
      {
        title: "Biological Control",
        description: "Using natural predators to control pests",
        benefits: ["Chemical-free", "Long-lasting", "Safe for environment"],
        difficulty: "Moderate"
      },
      {
        title: "Organic Pesticides",
        description: "Natural pest control solutions from plant extracts",
        benefits: ["Safe for humans", "Biodegradable", "Cost-effective"],
        difficulty: "Easy"
      }
    ]
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800"
      case "Moderate": return "bg-yellow-100 text-yellow-800"
      case "Advanced": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Modern Farming Techniques</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover proven agricultural methods to improve crop yield, reduce costs, and promote sustainable farming practices.
        </p>
      </div>

      <Tabs defaultValue="irrigation" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="irrigation" className="flex items-center gap-2">
            <Droplets className="h-4 w-4" />
            Irrigation
          </TabsTrigger>
          <TabsTrigger value="cropManagement" className="flex items-center gap-2">
            <TreePine className="h-4 w-4" />
            Crop Management
          </TabsTrigger>
          <TabsTrigger value="pestControl" className="flex items-center gap-2">
            <Bug className="h-4 w-4" />
            Pest Control
          </TabsTrigger>
        </TabsList>

        <TabsContent value="irrigation" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.irrigation.map((technique, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Droplets className="h-8 w-8 text-blue-500" />
                    <Badge className={getDifficultyColor(technique.difficulty)}>
                      {technique.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{technique.title}</CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {technique.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cropManagement" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.cropManagement.map((technique, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <TreePine className="h-8 w-8 text-green-500" />
                    <Badge className={getDifficultyColor(technique.difficulty)}>
                      {technique.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{technique.title}</CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {technique.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pestControl" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.pestControl.map((technique, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Bug className="h-8 w-8 text-orange-500" />
                    <Badge className={getDifficultyColor(technique.difficulty)}>
                      {technique.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{technique.title}</CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {technique.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default FarmingTechniques