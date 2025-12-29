import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
        <main className="flex-grow pt-24">
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
