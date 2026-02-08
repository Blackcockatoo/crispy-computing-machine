import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Lock, Users, Zap, BookOpen, CheckCircle2 } from "lucide-react";

/**
 * Design Philosophy: Organic Minimalism with Systems Visualization
 * Color Palette: Forest Green (#2D5016) + Cream (#F9F7F4) + Blue-Grey (#6B8E99) + Warm Amber (#D4A574)
 * Typography: Playfair Display (headings) + Inter (body)
 * Layout: Asymmetric grid with generous whitespace and organic dividers
 */

const downloadPackage = () => {
  const link = document.createElement('a');
  link.href = '/KPPS_Teacher_Hub_Package.zip';
  link.download = 'KPPS_Teacher_Hub_Package.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              M
            </div>
            <span className="font-semibold text-primary">Meta-Pet & The Veil</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#ecosystem" className="hover:text-primary transition-colors">
              Ecosystem
            </a>
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#implementation" className="hover:text-primary transition-colors">
              Implementation
            </a>
            <a href="#resources" className="hover:text-primary transition-colors">
              Resources
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/dXDRgUoZr21hsWIXvZGCbN/sandbox/0ifbepbA3bVDR7q0tkxC8R-img-1_1770556631000_na1fn_aGVyby1tZXRhcGV0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZFhEUmdVb1pyMjFoc1dJWHZaR0NiTi9zYW5kYm94LzBpZmJlcGJBM2JWRDI3cTB0a3hDOFItaW1nLTFfMTc3MDU1NjYzMTAwMF9uYTFmbl9hR1Z5YnkxdFpYUmhjR1YwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K8uZibSG884VVeWtFBNylYiaroEXLz-pa7lLBPy2-MWR~JfI6IylHaDKW~-Y5Ivc-QAcP2LIkF0n5AuCv1sH1RrpsAXcwitxPT9B1q9l0xU3buedLUL3r5QKi70g0aQ~bjObLp14l3UE1Sm7eNzaYOf-Gac0QTtO1vXbRz~ugM68bADIqIYe6CK5RdysiVdIy6i3uLQSO5E21U9xOhp4ItQxK3Sh4mcbtoQSdXGBHznP3r5~IOSdvOP30mmPrdkC3f3Q2Kq0roP0mBST9yfWiwGqvrCaIUAJVNHvmZU7kV8~fyTZodHRgn3gA0IZP5SdeSDfOfqHO3RcEsc6V5v9NQ__')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary">
              Meta-Pet & The Veil
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A privacy-first educational ecosystem designed for Kingsley Park Primary School. Teaching systems thinking, emotional regulation, and STEM principles through calm, reflective practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => downloadPackage()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Package
            </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">The Ecosystem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meta-Pet & The Veil is a two-part system designed to work seamlessly in the classroom. The student-facing Meta-Pet app teaches systems thinking through a digital companion, while The Veil Teacher Hub provides educators with facilitation tools, monitoring capabilities, and integration support.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Meta-Pet (Student Companion)</h3>
                    <p className="text-muted-foreground">
                      A digital companion with four vitals and 15 emotional states. Students manage homeostasis, learn feedback loops, and explore digital DNA.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">The Veil (Teacher Hub)</h3>
                    <p className="text-muted-foreground">
                      A comprehensive dashboard for teachers. Monitor student progress, deliver "blessings" (positive interventions), and facilitate guided learning sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg overflow-hidden shadow-lg h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://private-us-east-1.manuscdn.com/sessionFile/dXDRgUoZr21hsWIXvZGCbN/sandbox/0ifbepbA3bVDR7q0tkxC8R-img-3_1770556642000_na1fn_c2VjdGlvbi1zeXN0ZW1z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZFhEUmdVb1pyMjFoc1dJWHZaR0NiTi9zYW5kYm94LzBpZmJlcGJBM2JWRDI3cTB0a3hDOFItaW1nLTNfMTc3MDU1NjY0MjAwMF9uYTFmbl9jMlZqZEdsdmJpMXplWE4wWlcxei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=E2-nGyeqLUvNKeb~j2LPPINodH0FrbzmUvWb93ubRxOr6K8X9w1xov-6xt-NXBbo3E6rl7IEhNc3BlDd9wIkYZ044KcSjobB1mgcAV94I8b4KcaouD4I1LQZzTBgeaf7VY2UooazZvETiszQyEEPnO7lzVgFj3kMbgp1ynD7bcWFU4n0ZKJDsfwK35A6mVPgbmtF~Sm058x-GfLCjVyHv39CCHdnAovOrfnP3uwSNQIZx9hRocnP8kki79vGl0EqSSpynPJ9iw1V2kwycnCmIcLoTIwZAEH4aqIGyD61ZpuFYeIDQyw5RuFjXu~BeXj-Xahp06h1vRiKq91UVRcy0g__')",
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with privacy-by-design principles and educational excellence at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Privacy-First Design",
                description:
                  "Offline-first architecture, zero-account model, and data minimalism. No personal data collected or stored.",
                image:
                  "https://private-us-east-1.manuscdn.com/sessionFile/dXDRgUoZr21hsWIXvZGCbN/sandbox/0ifbepbA3bVDR7q0tkxC8R-img-2_1770556631000_na1fn_c2VjdGlvbi1wcml2YWN5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZFhEUmdVb1pyMjFoc1dJWHZaR0NiTi9zYW5kYm94LzBpZmJlcGJBM2JWRDI3cTB0a3hDOFItaW1nLTJfMTc3MDU1NjYzMTAwMF9uYTFmbl9jMlZqZEdsdmJpMXdjbWwyWVdONS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Jj9Lb5Ja14WustIXFhepxp1MwgzdXg2qWSh51Ur6rH4b25s-3CRj9Xzw81CnRrB27PvMeQm8ch7QWarSOBRV9EfTMnhh~pjDLe-rjMlmTa7atxpGPflZzdd1Ry-tmOoXptIrcmukguIAOQDxXJFBGTDD7ud6jnk6JKvLjrQ2rC1JpvPkRl-AGs3SnYTbxzXyoqGHereM3LHYXVQ~-dgWDz-JL6BtEF~UkwcKkeSRM6~CHnvvjbpQCi8fmYzhX6c0kOSce01VNeXK7ZMIBn6-BLlX-x-rvTo0F-fFbNUrMj4k5fUlWXaKj4VPfP6IWQqda-5rPz5n3Av6LF4aO945Ow__",
              },
              {
                icon: Users,
                title: "Cooperative Learning",
                description:
                  "Pair and group work built into the design. Students collaborate to solve system problems and share insights.",
                image:
                  "https://private-us-east-1.manuscdn.com/sessionFile/dXDRgUoZr21hsWIXvZGCbN/sandbox/0ifbepbA3bVDR7q0tkxC8R-img-4_1770556634000_na1fn_c2VjdGlvbi1jbGFzc3Jvb20.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZFhEUmdVb1pyMjFoc1dJWHZaR0NiTi9zYW5kYm94LzBpZmJlcGJBM2JWRDI3cTB0a3hDOFItaW1nLTRfMTc3MDU1NjYzNDAwMF9uYTFmbl9jMlZqZEdsdmJpMWpiR0Z6YzNKdmIyMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=k0Lw-4Zam8VxNL-IKSdoYydILNUD~zEVv346KhJoZR2XQAxJBuTscxtfrPxXR9KenxK5XN6W20lL2jeMx-26yG61rZ-ySfcPIkxkZ9BxvdHgB7C9R3pNw92iTzRBfNLFlo-wrSIS3LZ9ybxMJhYZxbYZL7t2N1pHn-81syf3S5N02-XvI66i5y0CNnzqpkHZHG0yXAThc5efPmISN2UCqR5CEzOh5VUfA7pktLQba~EDYrZXd2ESnU236o7Yxvqco-TgcYP9hiLaxV7BRHChqakTLCFxxzEMOxmx9KzL-Lc0ywrZ0boJY3nFXXLEAa0XtkJWs9KNivjN~pWwwiiI-Q__",
              },
              {
                icon: Zap,
                title: "Systems Thinking",
                description:
                  "Homeostasis, feedback loops, and emergent complexity. Students engage with genuine STEM modeling, not gamification.",
                image:
                  "https://private-us-east-1.manuscdn.com/sessionFile/dXDRgUoZr21hsWIXvZGCbN/sandbox/0ifbepbA3bVDR7q0tkxC8R-img-3_1770556642000_na1fn_c2VjdGlvbi1zeXN0ZW1z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZFhEUmdVb1pyMjFoc1dJWHZaR0NiTi9zYW5kYm94LzBpZmJlcGJBM2JWRDI3cTB0a3hDOFItaW1nLTNfMTc3MDU1NjY0MjAwMF9uYTFmbl9jMlZqZEdsdmJpMXplWE4wWlcxei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=E2-nGyeqLUvNKeb~j2LPPINodH0FrbzmUvWb93ubRxOr6K8X9w1xov-6xt-NXBbo3E6rl7IEhNc3BlDd9wIkYZ044KcSjobB1mgcAV94I8b4KcaouD4I1LQZzTBgeaf7VY2UooazZvETiszQyEEPnO7lzVgFj3kMbgp1ynD7bcWFU4n0ZKJDsfwK35A6mVPgbmtF~Sm058x-GfLCjVyHv39CCHdnAovOrfnP3uwSNQIZx9hRocnP8kki79vGl0EqSSpynPJ9iw1V2kwycnCmIcLoTIwZAEH4aqIGyD61ZpuFYeIDQyw5RuFjXu~BeXj-Xahp06h1vRiKq91UVRcy0g__",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url('${feature.image}')` }}
                />
                <div className="p-6 space-y-3">
                  <feature.icon className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">7-Session Pilot Implementation</h2>

            <div className="space-y-6">
              {[
                { session: 1, title: "The Arrival", focus: "Introduction and setting the Veil concept" },
                { session: 2, title: "Vitals & Needs", focus: "Understanding homeostasis and care routines" },
                { session: 3, title: "Emotional States", focus: "Identifying and regulating internal states" },
                { session: 4, title: "Feedback Loops", focus: "Observing system-wide changes" },
                { session: 5, title: "Data Literacy", focus: "Recording and interpreting Digital DNA" },
                { session: 6, title: "Collaborative Systems", focus: "Community problem-solving" },
                { session: 7, title: "The Showcase", focus: "Student presentations and reflection" },
              ].map((item) => (
                <div key={item.session} className="flex gap-6 pb-6 border-b border-border last:border-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">{item.session}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-background rounded-lg border border-border">
              <p className="text-center text-muted-foreground">
                <strong>Duration:</strong> 2 weeks, 20 minutes per session  
                <br />
                <strong>Model:</strong> KPPS Gradual Release (I do / We do / You do)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Alignment Section */}
      <section id="values" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Strategic Alignment with KPPS Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { value: "Respect", description: "Students respect the pet's needs and their own data privacy" },
              { value: "Resilience", description: "Navigate challenges and repair systems when things go wrong" },
              { value: "Excellence", description: "High-quality STEM modeling and intellectual engagement" },
              { value: "Cooperation", description: "Pair and group work encourage shared problem-solving" },
              { value: "Community", description: "Built by a KPPS parent and student for the school" },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center space-y-3 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto" />
                <h3 className="font-semibold text-primary">{item.value}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-primary">Complete Implementation Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seven comprehensive documents covering strategy, facilitation, privacy, and parent communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { num: 1, title: "Welcome & Overview", desc: "Strategic framing and philosophical foundation" },
              { num: 2, title: "Implementation Guide", desc: "7-session teaching roadmap" },
              { num: 3, title: "Facilitation Scripts", desc: "Plug-and-play teacher dialogue" },
              { num: 4, title: "Reflection Prompts", desc: "25 student practice cards" },
              { num: 5, title: "Values Integration Map", desc: "Alignment with KPPS mission" },
              { num: 6, title: "Parent Communication Kit", desc: "Ready-to-send templates" },
              { num: 7, title: "Privacy & Safety Brief", desc: "Technical transparency" },
            ].map((doc) => (
              <Card key={doc.num} className="p-6 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {doc.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground">{doc.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => downloadPackage()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Complete Package
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Pilot?</h2>
          <p className="text-lg opacity-90">
            This package is a gift to Kingsley Park Primary School. No licensing fees. No vendor lock-in. No hidden agenda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
          <p className="text-sm opacity-75 pt-4">
            Built with a KPPS kid. Designed for the KPPS way.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Meta-Pet & The Veil</h3>
              <p className="text-sm text-muted-foreground">A privacy-first educational ecosystem for KPPS.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary text-sm">Product</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href="#ecosystem" className="hover:text-primary transition-colors">
                    Ecosystem
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#implementation" className="hover:text-primary transition-colors">
                    Implementation
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary text-sm">Resources</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href="#resources" className="hover:text-primary transition-colors">
                    Package
                  </a>
                </li>
                <li>
                  <a href="/legal" className="hover:text-primary transition-colors">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary text-sm">Developer</h4>
              <p className="text-sm text-muted-foreground">
                Blue Snake Studios
                <br />
                KPPS Parent & Developer
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2026 Meta-Pet & The Veil. A gift to Kingsley Park Primary School.
              <br />
              Faster than lightning. Slower than moss.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
