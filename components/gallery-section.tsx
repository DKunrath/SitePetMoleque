"use client"

const galleryImages = [
  { id: 1, alt: "Pet feliz durante passeio", url: "/placeholder-gallery1.jpg" },
  { id: 2, alt: "Cuidados Pet Sitter", url: "/placeholder-gallery2.jpg" },
  { id: 3, alt: "Momento de carinho", url: "/placeholder-gallery3.jpg" },
  { id: 4, alt: "Passeio ao ar livre", url: "/placeholder-gallery4.jpg" },
  { id: 5, alt: "Cuidados Home Care", url: "/placeholder-gallery5.jpg" },
  { id: 6, alt: "Pet relaxando", url: "/placeholder-gallery6.jpg" },
]

export default function GallerySection() {
  return (
    <section className="py-16 px-4 bg-[#E6E0D2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A2B23] mb-4">
            Momentos Especiais
          </h2>
          <p className="text-gray-700 text-lg">
            Registros de amor e cuidado com nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1A2B23]/20 to-[#1A2B23]/40 flex items-center justify-center text-6xl">
                🐾
              </div>
              <div className="absolute inset-0 bg-[#1A2B23]/0 group-hover:bg-[#1A2B23]/20 transition-colors flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            📸 Fotos reais dos nossos atendimentos. Siga no Instagram para ver mais!
          </p>
        </div>
      </div>
    </section>
  )
}
