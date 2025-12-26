import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-grow">
          <Navbar />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
