export default function Features() {
  return (
    <section className="features py-12 bg-white text-center">
        <div className="mb-8">
            <h2 className="font-bold">Paneles Disponibles (6)</h2>
            <span className="font-light">Explore nuestro inventario de paneles solares</span>
        </div>
        <div className="features-grid grid grid-cols-1 ml-6 mr-6 gap-6">
            <div className="feature-item rounded-3xl shadow-lg overflow-hidden">
                <div className="feature-image">
                    <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzY2MTc5NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="solar panels" />
                </div>
                <div className="flex justify-between ml-5 mr-5 mt-5">
                    <div className="flex flex-col">
                        <h2>Solar panel name</h2>
                        <span className="inline-flex border-0 rounded-full bg-amber-100 text-amber-700 justify-center w-16 text-xs px-2 py-1">Good</span>
                    </div>
                    <span>price $</span>
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