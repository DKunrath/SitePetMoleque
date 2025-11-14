"use client"

import Link from "next/link"
import { Heart, Footprints, Clock } from "lucide-react"

const services = [
  {
    id: 1,
    title: "DOG WALKER",
    icon: Footprints,
    description: "Passeios profissionais com segurança e diversão",
    features: [
      "Passeios com cães",
      "Controle de tempo e distância",
      "Estímulo físico e mental",
      "Socialização com outros animais",
      "Supervisão completa",
    ],
  },
  {
    id: 2,
    title: "PET SITTER",
    icon: Heart,
    description: "Cuidados na casa do seu pet",
    features: [
      "Cuidados na casa do tutor",
      "Alimentação e troca de água",
      "Limpeza do ambiente",
      "Brincadeiras e interação",
      "Relatórios diários",
    ],
  },
  {
    id: 3,
    title: "HOME CARE",
    icon: Clock,
    description: "Companhia estendida para seu pet",
    features: [
      "Acompanhamento de rotina",
      "Medicação supervisionada",
      "Cuidados pós-cirúrgicos",
      "Suporte emocional",
      "Relatórios detalhados",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-xl text-foreground/70">Três planos especializados para as necessidades do seu pet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            const whatsappUrl = `https://wa.me/555199555-3535?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${encodeURIComponent(service.title)}%20da%20Pet%20Moleque.`
            
            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-white to-[#F5F1E8] rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 p-8 border-2 border-[#E6E0D2] flex flex-col"
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#1A2B23] rounded-xl shadow-md">
                  <Icon className="w-8 h-8 text-[#E6E0D2]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A2B23] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[3rem] flex items-center">{service.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#1A2B23] mt-1 font-bold">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#1A2B23] text-[#E6E0D2] rounded-lg font-semibold hover:opacity-90 transition-opacity text-center block"
                >
                  Solicitar Serviço
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
