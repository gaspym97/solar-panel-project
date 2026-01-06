import PanelCard from "./PanelCard"

export default function Features() {
  return (
    <section className="features py-12 bg-white text-center">
        <div className="mb-8 text-3xl">
            <h2 className="font-medium">Paneles Disponibles (6)</h2>
            <span className="font-thin">Explore nuestro inventario de paneles solares</span>
        </div>
        <div className="features-grid grid grid-cols-1 ml-6 mr-6 gap-6">
            <PanelCard
                image="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzY2MTc5NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                name="SolarMax Pro"
                price="150"
                condition="Good"
                description="Monocrystalline panel, tested and working well."
                power="350W"
                stock="3"
                tested="Tested and working"
            />
            <PanelCard
                image="https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGZpZWxkfGVufDF8fHx8MTc2NjA5MjgzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                name="EcoPanel"
                price="120"
                condition="Good"
                description="High efficiency and reliable performance."
                power="300W"
                stock="5"
                tested="Tested and working"
            />
            <PanelCard
                image="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc2NjE4MDM1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                name="PowerLite"
                price="180"
                condition="Good"
                description="High-efficiency monocrystalline panel."
                power="450W"
                stock="2"
                tested="Tested and working"
            />
            <PanelCard
                image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzY2MTgwMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                name="Budget Solar"
                price="90"
                condition="Good"
                description="Affordable option, shows signs of use but fully tested and working."
                power="400W"
                stock="8"
                tested="Tested and working"
            />
        </div>
    </section>
  )
}