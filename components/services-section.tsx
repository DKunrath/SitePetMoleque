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
    title: "PET COMPANION",
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
  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Pet%20Moleque."

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
            return (
              <div
                key={service.id}
                className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border border-secondary/30"
              >
                <div className="mb-6 flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center block"
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
