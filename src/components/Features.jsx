import { Zap } from "lucide-react"
import { Package } from "lucide-react"
import { CircleCheckBig } from "lucide-react"

export default function Features() {
  return (
    <section className="features py-12 bg-white text-center">
        <div className="mb-8 text-3xl">
            <h2 className="font-medium">Paneles Disponibles (6)</h2>
            <span className="font-thin">Explore nuestro inventario de paneles solares</span>
        </div>
        <div className="features-grid grid grid-cols-1 ml-6 mr-6 gap-6">
            <div className="feature-item rounded-3xl shadow-lg overflow-hidden">
                <div className="feature-image">
                    <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzY2MTc5NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="solar panels" />
                </div>
                <div className="p-5 text-xl">
                    <div className="flex justify-between mb-3">
                        <div className="flex flex-col">
                            <h2 className="mb-1">SolarMax Pro 400W</h2>
                            <span className="inline-flex border-0 rounded-full bg-amber-100 text-amber-700 justify-center w-16 text-xs px-2 py-1">Good</span>
                        </div>
                        <span className="text-amber-500 font-semibold">$150</span>
                    </div>
                    <span className="line-clamp-2 mb-3 mt-3 text-left">Used monocrystalline panel, tested and working well. Some minor scratches but fully functional.</span>
                    <div className="space-y-2 mb-4">
                        <div className="flex space-x-3">
                            <Zap className="stroke-2 text-amber-500 inline-block"/>
                            <span>Power: 350W</span>
                        </div>
                        <div className="flex space-x-3">
                            <Package className="stroke-2 text-amber-500 inline-block"/>
                            <span>in stock: 3 units (example)</span>
                        </div>
                        <div className="flex space-x-3">
                            <CircleCheckBig className="stroke-2 inline-block text-green-500"/>
                            <span className="text-green-500">Tested and working (example)</span>
                        </div>
                    </div>
                    <button className="contact-button bg-amber-500 text-white w-full rounded-lg h-12 max-h-12" >Contact to buy</button>
                </div>
            </div>

            <div className="feature-item border rounded-3xl shadow-lg overflow-hidden">
                <div className="feature-image">
                    <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzY2MTc5NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="solar panels" />
                </div>
                <div className="feature-bottom-card">
                    <div>
                        <h2>Solar panel name</h2>
                        <span>price $</span>
                    </div>
                    <span>state (good or bad)</span>
                </div>
                <span>Description</span>
                <div>
                    <div>
                        <span>icon</span>
                        <span>Power: 400w (example)</span>
                    </div>
                    <div>
                        <span>icon</span>
                        <span>in stock: 3 units (example)</span>
                    </div>
                    <div>
                        <span>icon</span>
                        <span>Tested and working (example)</span>
                    </div>
                </div>
                <button className="contact-button" >Contact to buy</button>
            </div>

        </div>
    </section>
  )
}