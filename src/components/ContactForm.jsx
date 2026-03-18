import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const ContactForm = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>

          <p className="text-muted-foreground leading-7">
            We'd love to hear about your project. Whether you're planning a
            wedding, a portrait session, or need professional photography
            services, feel free to contact us.
          </p>

          <div className="space-y-3">
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> hello@zoomin.com</p>
            <p><strong>Location:</strong> New Delhi, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="p-6">
          <CardContent className="space-y-6">

            <div className="grid md:grid-cols-2 gap-4">

              <Input
                placeholder="Your Name"
              />

              <Input
                type="email"
                placeholder="Your Email"
              />

            </div>

            <Input
              placeholder="Subject"
            />

            <Textarea
              placeholder="Your Message"
              className="min-h-[120px]"
            />

            <Button className="w-full">
              Send Message
            </Button>

          </CardContent>
        </Card>

      </div>

    </section>
  )
}

export default ContactForm