import { Zap, Package, CircleCheckBig, LampCeilingIcon } from "lucide-react"

const conditionStyle = {
    good: {
        label: "Good",
        badge: "bg-amber-100 text-amber-700",
    },
    verygood: {
        label: "Very Good",
        badge: "bg-blue-100 text-blue-700",
    },
    excellent: {
        label: "Excellent",
        badge: "bg-green-100 text-green-700",
    },
}

export default function PanelCard({
    image,
    name,
    price,
    condition,
    description,
    power,
    stock,
    tested
}) {

    const conditionInfo = 
    conditionStyle[String(condition).toLowerCase().replace(/\s+/g,"")] || conditionStyle.good;

    return (
        <div className="feature-item rounded-3xl shadow-lg overflow-hidden">
                <div className="feature-image">
                    <img src={image} alt="solar panels" />
                </div>
                <div className="p-5 text-xl">
                    <div className="flex justify-between mb-3">
                        <div className="flex flex-col">
                            <h2 className="mb-1">{name}</h2>
                            <span className={`inline-flex border-0 rounded-full justify-center w-16 text-xs px-2 py-1 ${conditionInfo.badge}`}>{conditionInfo.label}</span>
                        </div>
                        <span className="font-semibold text-amber-500">${price}</span>
                    </div>
                    <span className="line-clamp-2 mb-3 mt-3 text-left">{description}</span>
                    <div className="space-y-2 mb-4">
                        <div className="flex space-x-3">
                            <Zap className="stroke-2 text-amber-500 inline-block"/>
                            <span>Power: {power}</span>
                        </div>
                        <div className="flex space-x-3">
                            <Package className="stroke-2 text-amber-500 inline-block"/>
                            <span>in stock: {stock} units</span>
                        </div>
                        <div className="flex space-x-3">
                            <CircleCheckBig className="stroke-2 inline-block text-green-500"/>
                            <span className="text-green-500">{tested}</span>
                        </div>
                    </div>
                    <button className="contact-button bg-amber-500 text-white w-full rounded-lg h-12 max-h-12 hover:bg-amber-600 active:bg-amber-700" >Contact to buy</button>
                </div>
            </div>
)}