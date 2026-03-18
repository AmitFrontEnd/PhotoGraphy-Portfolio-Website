import React from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Camera } from "lucide-react"

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-10">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Camera className="w-16 h-16 text-primary" />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 pt-4">

          <Link to="/">
            <Button className="rounded-full px-6">
              Go Home
            </Button>
          </Link>

          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-6">
              Contact Me
            </Button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Error