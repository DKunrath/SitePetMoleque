"use client"

import Image from "next/image"

const galleryImages = [
  { id: 1, alt: "Sonequinha boa", url: "/galery_image_1.png" },
  { id: 2, alt: "Cuidados Pet Sitter", url: "/galery_image_2.png" },
  { id: 3, alt: "Passeio na rua", url: "/galery_image_3.png" },
  { id: 4, alt: "Passeio ao ar livre", url: "/galery_image_4.png" },
  { id: 5, alt: "Cuidados Home Care", url: "/galery_image_5.png" },
  { id: 6, alt: "Pet relaxando", url: "/galery_image_6.png" },
  { id: 7, alt: "Companhia e diversão", url: "/galery_image_7.png" },
  { id: 8, alt: "Momentos especiais", url: "/galery_image_8.png" },
  { id: 9, alt: "Amor e cuidado", url: "/galery_image_9.png" },
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
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1A2B23]/0 group-hover:bg-[#1A2B23]/40 transition-colors flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity px-4 text-center">
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
