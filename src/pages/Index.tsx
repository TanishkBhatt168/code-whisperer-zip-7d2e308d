import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ThemeProvider } from "@/components/ThemeProvider"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" defaultColorTheme="blue">
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
