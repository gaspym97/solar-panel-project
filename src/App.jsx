import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Features from "./components/Features"

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
        <main className="flex-grow pt-24">
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
