import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Lightbulb, Heart, Trophy } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">About Us</Badge>
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Welcome to Graphic Geeks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The premier technology club of Graphic Era University, where innovation meets creativity.
            We're a community of passionate developers, designers, and tech enthusiasts working together
            to push the boundaries of what's possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="glass-effect hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                To foster innovation and creativity in technology while building a strong community of learners.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                We encourage creative thinking and cutting-edge solutions to real-world problems.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Building lasting relationships and supporting each other's growth in technology.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Striving for excellence in everything we do, from projects to events and competitions.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-effect">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">What We Do</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Technical Excellence</h4>
                    <p className="text-muted-foreground">
                      We organize workshops, hackathons, and coding competitions to enhance technical skills
                      and promote hands-on learning experiences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Community Building</h4>
                    <p className="text-muted-foreground">
                      Through regular meetups, study groups, and collaborative projects, we create a
                      supportive environment for learning and growth.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Industry Connect</h4>
                    <p className="text-muted-foreground">
                      We bridge the gap between academia and industry through guest lectures,
                      internship opportunities, and industry partnerships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-muted-foreground">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-muted-foreground">Events Hosted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-muted-foreground">Projects Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-muted-foreground">Industry Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}