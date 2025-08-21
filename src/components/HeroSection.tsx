import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Code, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Graphic Geeks</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Graphic Era University
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Where Creativity Meets Technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">Join 500+ passionate developers and designers</p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">Learn cutting-edge technologies and frameworks</p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p className="text-muted-foreground">Build projects that make a real impact</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Join Our Club
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="glass-effect">
              Explore Events
            </Button>
          </div>

          {/* QR Code for Joining */}
          <div className="mt-12">
            <Card className="glass-effect inline-block">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="h-32 w-32 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="text-4xl">📱</div>
                  </div>
                  <p className="text-sm text-muted-foreground">Scan QR Code to Join</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}