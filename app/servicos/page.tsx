"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import { Heart, Footprints, Clock } from "lucide-react"

const servicesDetail = [
  {
    id: 1,
    title: "DOG WALKER",
    icon: Footprints,
    fullDescription: "Passeios profissionais que combinam segurança, diversão e estimulação para seu cão.",
    features: [
      "Passeios com duração flexível",
      "Controle de tempo e distância dos trajetos",
      "Estímulo físico e mental durante o passeio",
      "Socialização com outros animais",
      "Supervisão e segurança durante todo o percurso",
      "Fotos e relatórios de atividades",
    ],
    ideal: "Perfeito para cães que precisam de exercício regular, socialização ou quando o tutor está ocupado.",
  },
  {
    id: 2,
    title: "PET SITTER (Visita Rápida)",
    icon: Heart,
    fullDescription: "Cuidados rápidos na casa do seu pet com atenção, carinho e profissionalismo.",
    features: [
      "Cuidados na casa do tutor",
      "Alimentação e troca de água",
      "Limpeza do ambiente do pet",
      "Brincadeiras e interação",
      "Administração de medicamentos",
      "Relatórios diários com atualizações",
    ],
    ideal: "Ideal para viagens rápidas, compromissos pontuais ou quando seu pet precisa de cuidados durante o dia.",
  },
  {
    id: 3,
    title: "PET COMPANION (Acompanhamento Estendido)",
    icon: Clock,
    fullDescription:
      "Companhia e supervisão estendida para garantir o bem-estar do seu pet durante períodos mais longos.",
    features: [
      "Acompanhamento de rotina diária",
      "Administração supervisionada de medicamentos",
      "Cuidados pós-cirúrgicos com profissionalismo",
      "Suporte emocional e interação constante",
      "Monitoramento de saúde e comportamento",
      "Relatórios detalhados e comunicação constante",
    ],
    ideal: "Recomendado para recuperação pós-cirúrgica, animais idosos ou com necessidades especiais de saúde.",
  },
]

export default function Services() {
  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Pet%20Moleque."

  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-primary mb-4">Serviços Detalhados</h1>
          <p className="text-xl text-foreground/70 mb-16">
            Conheça todos os serviços que oferecemos para cuidar do seu pet
          </p>

          <div className="space-y-12">
            {servicesDetail.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="bg-card rounded-xl shadow-md p-8 border border-secondary/30">
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-primary mb-2">{service.title}</h2>
                      <p className="text-lg text-foreground/70 mb-6">{service.fullDescription}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h3 className="font-semibold text-primary mb-3">Inclui:</h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span className="text-foreground/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-3">Ideal para:</h3>
                          <div className="bg-secondary/20 p-4 rounded-lg">
                            <p className="text-foreground/80 text-pretty">{service.ideal}</p>
                          </div>
                        </div>
                      </div>

                      <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        Contratar Serviço
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-secondary/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-primary mb-4">Dúvidas sobre os serviços?</h3>
            <p className="text-foreground/80 mb-6">
              Entre em contato conosco pelo WhatsApp ou formulário de contato. Estamos aqui para responder qualquer
              dúvida e personalizar o serviço para seu pet.
            </p>
            <Link
              href="/contato"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Ir para Contato
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
