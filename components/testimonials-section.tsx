"use client"

import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

const instagramTestimonials = [
  { id: 1, url: "/testimonial_instagram_1.JPG", alt: "Depoimento Instagram 1" },
  { id: 2, url: "/testimonial_instagram_2.JPG", alt: "Depoimento Instagram 2" },
  { id: 3, url: "/testimonial_instagram_3.JPG", alt: "Depoimento Instagram 3" },
  { id: 4, url: "/testimonial_instagram_4.JPG", alt: "Depoimento Instagram 4" },
]

const whatsappTestimonials = [
  { id: 1, url: "/testimonial_whatsapp_1.JPG", alt: "Depoimento WhatsApp 1" },
  { id: 2, url: "/testimonial_whatsapp_2.JPG", alt: "Depoimento WhatsApp 2" },
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
            Depoimentos reais de tutores que confiam na Pet Moleque
          </p>
        </div>

        {/* Instagram Testimonials */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Instagram className="w-6 h-6 text-[#1A2B23]" />
            <h3 className="text-2xl font-bold text-[#1A2B23]">Instagram</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {instagramTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#E6E0D2] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={testimonial.url}
                    alt={testimonial.alt}
                    fill
                    className="object-contain bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Testimonials */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageCircle className="w-6 h-6 text-[#1A2B23]" />
            <h3 className="text-2xl font-bold text-[#1A2B23]">WhatsApp</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 justify-items-center">
            {whatsappTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#E6E0D2] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105 w-full max-w-sm"
              >
                <div className="relative w-full h-[600px]">
                  <Image
                    src={testimonial.url}
                    alt={testimonial.alt}
                    fill
                    className="object-contain bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
