import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const PricingCard = ({ plan }) => {
  return (
    <Card className={`text-center p-8 relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>

      {plan.popular && (
        <span className="absolute top-4 right-4 text-xs bg-primary text-white
        dark:text-black
        px-3 py-1 rounded-full">
          Popular
        </span>
      )}

      <CardContent className="space-y-6">

        <h3 className="text-2xl font-semibold">
          {plan.name}
        </h3>

        <div className="text-4xl font-bold">
          ${plan.price}
        </div>

        <ul className="space-y-3 text-muted-foreground">

          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              {feature}
            </li>
          ))}

        </ul>

        <Button className="w-full rounded-full">
          Buy Now
        </Button>

      </CardContent>

    </Card>
  )
}

export default PricingCard