"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ana Paula Santos",
    petName: "Luna",
    text: "A Camila é incrível! Minha cachorrinha Luna adora os passeios e sempre volta feliz e cansada. Super recomendo!",
    image: "/placeholder-pet1.jpg",
  },
  {
    id: 2,
    name: "Roberto Silva",
    petName: "Thor",
    text: "Profissionalismo e carinho são as marcas da Pet Moleque. O Thor ficou muito bem cuidado durante minha viagem.",
    image: "/placeholder-pet2.jpg",
  },
  {
    id: 3,
    name: "Juliana Oliveira",
    petName: "Mel",
    text: "Confiança total! A Mel estava se recuperando de uma cirurgia e o cuidado foi excepcional. Muito obrigada!",
    image: "/placeholder-pet3.jpg",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    petName: "Bob",
    text: "Excelente serviço de dog walker! O Bob nunca foi tão feliz nos passeios. A Camila é muito atenciosa.",
    image: "/placeholder-pet4.jpg",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A2B23] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 text-lg">
            Depoimentos de tutores que confiam na Pet Moleque
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#E6E0D2] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-[#1A2B23] rounded-full flex items-center justify-center text-white text-2xl">
                  🐾
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2B23]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">Tutor(a) do {testimonial.petName}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
