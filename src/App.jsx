import Download from "./sections/Download"
import Faq from "./sections/Faq"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"
import Tetstimonials from "./sections/Tetstimonials"

function App() {

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Tetstimonials />
      <Download />
      <Footer />

    </main>
  )
}

export default App
