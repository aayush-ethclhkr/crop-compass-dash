import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, TrendingDown, Minus, IndianRupee } from "lucide-react"

const MspRates = () => {
  const mspData = [
    { crop: "Wheat", currentMSP: 2125, previousMSP: 2015, unit: "per quintal", season: "Rabi 2024-25", change: 5.5 },
    { crop: "Rice (Common)", currentMSP: 2183, previousMSP: 2040, unit: "per quintal", season: "Kharif 2024-25", change: 7.0 },
    { crop: "Rice (Grade A)", currentMSP: 2203, previousMSP: 2060, unit: "per quintal", season: "Kharif 2024-25", change: 6.9 },
    { crop: "Bajra", currentMSP: 2500, previousMSP: 2350, unit: "per quintal", season: "Kharif 2024-25", change: 6.4 },
    { crop: "Maize", currentMSP: 2090, previousMSP: 1962, unit: "per quintal", season: "Kharif 2024-25", change: 6.5 },
    { crop: "Jowar", currentMSP: 3180, previousMSP: 2970, unit: "per quintal", season: "Kharif 2024-25", change: 7.1 },
    { crop: "Arhar (Tur)", currentMSP: 7000, previousMSP: 6600, unit: "per quintal", season: "Kharif 2024-25", change: 6.1 },
    { crop: "Moong", currentMSP: 8558, previousMSP: 8174, unit: "per quintal", season: "Kharif 2024-25", change: 4.7 },
    { crop: "Urad", currentMSP: 6950, previousMSP: 6600, unit: "per quintal", season: "Kharif 2024-25", change: 5.3 },
    { crop: "Groundnut", currentMSP: 6377, previousMSP: 5850, unit: "per quintal", season: "Kharif 2024-25", change: 9.0 },
    { crop: "Sunflower", currentMSP: 6760, previousMSP: 6400, unit: "per quintal", season: "Kharif 2024-25", change: 5.6 },
    { crop: "Soybean", currentMSP: 4892, previousMSP: 4600, unit: "per quintal", season: "Kharif 2024-25", change: 6.3 },
    { crop: "Cotton", currentMSP: 7121, previousMSP: 6620, unit: "per quintal", season: "Kharif 2024-25", change: 7.6 },
    { crop: "Sugarcane", currentMSP: 340, previousMSP: 315, unit: "per quintal", season: "2024-25", change: 7.9 }
  ]

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />
    return <Minus className="h-4 w-4 text-gray-600" />
  }

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600"
    if (change < 0) return "text-red-600"
    return "text-gray-600"
  }

  const highestIncrease = mspData.reduce((prev, current) => (prev.change > current.change) ? prev : current)
  const avgIncrease = (mspData.reduce((sum, item) => sum + item.change, 0) / mspData.length).toFixed(1)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Minimum Support Price (MSP) Rates</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Current MSP rates for various crops as announced by the Government of India. 
          These rates ensure fair prices for farmers and food security for the nation.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              Highest Increase
            </CardTitle>
            <CardDescription>{highestIncrease.crop}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">{highestIncrease.change}%</p>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <IndianRupee className="h-5 w-5" />
              Average Increase
            </CardTitle>
            <CardDescription>Across all crops</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-accent">{avgIncrease}%</p>
          </CardContent>
        </Card>

        <Card className="bg-agriculture-green/5 border-agriculture-green/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-agriculture-green">
              <TrendingUp className="h-5 w-5" />
              Total Crops
            </CardTitle>
            <CardDescription>MSP announced</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-agriculture-green">{mspData.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* MSP Table */}
      <Card>
        <CardHeader>
          <CardTitle>Current MSP Rates (2024-25)</CardTitle>
          <CardDescription>
            All prices are in Indian Rupees. Data updated as per latest government announcements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Crop</TableHead>
                  <TableHead>Season</TableHead>
                  <TableHead className="text-right">Current MSP (₹)</TableHead>
                  <TableHead className="text-right">Previous MSP (₹)</TableHead>
                  <TableHead className="text-right">Change</TableHead>
                  <TableHead>Unit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mspData.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{item.crop}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.season}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      ₹{item.currentMSP.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-mono text-muted-foreground">
                      ₹{item.previousMSP.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className={`flex items-center justify-end gap-1 ${getChangeColor(item.change)}`}>
                        {getChangeIcon(item.change)}
                        {Math.abs(item.change)}%
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.unit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Note */}
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> MSP rates are subject to change based on government policies. 
            Farmers are advised to check with local agricultural officers for the most current rates and procurement guidelines.
            These rates are applicable for government procurement through agencies like FCI, NAFED, etc.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default MspRates