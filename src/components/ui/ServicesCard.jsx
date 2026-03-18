import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ServicesCard = ({ icon: Icon, title, desc }) => {
  return (
    <Card className="group hover:-translate-y-2 transition duration-300 hover:shadow-xl">
      <CardHeader className="flex items-center gap-4">

        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          {desc}
        </p>

        <button className="text-primary font-semibold">
          + Learn More
        </button>
      </CardContent>
    </Card>
  )
}

export default ServicesCard