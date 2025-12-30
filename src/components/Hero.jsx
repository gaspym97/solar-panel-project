import { Zap } from "lucide-react"
import { CircleDollarSign } from "lucide-react"
import { Package } from "lucide-react"

export default function Hero() {
  return (
    <div className="hero flex flex-col justify-center items-center text-center py-20 px-4 bg-linear-to-b from-amber-400 via-amber-500 to-amber-600">
        <div className="hero__container max-w-4xl mx-auto">
          <h1 className="hero__title text-2xl font-extrabold mb-6 text-white">Paneles solares de alta eficiencia</h1>
        </div>
        <div className="hero__icons-grid grid grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center gap-5">
                <div className="bg-white-40 bg-white/10 size-20 rounded-full flex items-center justify-center backdrop-blur-md shadow-md shadow-amber-200-50">
                    <Zap className="hero__icon text-white size-12 stroke-2" strokeWidth={1.5} />
                </div>
                <nav className="italic text-white">Alta Eficiencia!</nav>
            </div>
            <div className="flex flex-col items-center gap-5">
                <div className="bg-white-40 bg-white/10 size-20 rounded-full flex items-center justify-center backdrop-blur-md shadow-md shadow-amber-200-50">
                    <CircleDollarSign className="hero__icon text-white size-12 stroke-2" strokeWidth={1.5} />
                </div>
                <nav className="italic text-white">Grandes Precios!</nav>
            </div>
            <div className="flex flex-col items-center gap-5">
                <div className="bg-white-40 bg-white/10 size-20 rounded-full flex items-center justify-center backdrop-blur-md shadow-md shadow-amber-200-50">
                    <Package className="hero__icon text-white size-12 stroke-2" strokeWidth={1.5} />
                </div>
                <nav className="italic text-white">Solucion Completa!</nav>
            </div>
        </div>
    </div>
  )
}