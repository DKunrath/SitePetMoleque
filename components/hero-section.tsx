"use client"

import Link from "next/link"

export default function HeroSection() {
  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento%20com%20a%20Pet%20Moleque."

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight text-pretty">
              Cada pet tem sua própria história
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Cada pet tem sua própria história, seu ritmo e seu jeitinho de demonstrar amor. Por isso, o cuidado que
              oferecemos é feito sob medida com atenção, carinho e responsabilidade em cada detalhe.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Seja um passeio cheio de energia, um acompanhamento de rotina ou um cuidado especial dentro de casa, o
              foco é sempre o mesmo: proporcionar bem-estar, conforto e segurança para quem mais confia em nós.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Aqui, o amor pelos animais se transforma em profissionalismo, dedicação e presença real na vida de cada
              pet.
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Agendar Atendimento
            </Link>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <img
              src="/professional-veterinarian-with-dog.jpg"
              alt="Camila - Técnica Veterinária"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
