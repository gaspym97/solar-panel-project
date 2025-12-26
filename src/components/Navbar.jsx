import { Sun } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-blue-500 backdrop-blur-md border-b-0 border-b-gray-100 p-4 shadow-md shadow-neutral-300">
        <div className="navbar__container max-w-7xl mx-auto flex justify-between items-center space-x-12">
          <div className="navbar__brand flex items-center gap-3">
            <Sun className="navbar__icon text-black size-14 stroke-2" strokeWidth={1.5} />
            <div>
                <h1 className="navbar__title text-2xl font-bold">Solar Panels</h1>
                <span className="navbar__subtitle text-black text-sm">Quality equipment</span>
            </div>
          </div>
          <p className="navbar__contact">Contact: (555) 123-4567</p>
        </div>
    </nav>
  )
}