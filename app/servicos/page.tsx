"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { Heart, Footprints, Clock } from "lucide-react"

const servicesDetail = [
  {
    id: 1,
    title: "DOG WALKER",
    icon: Footprints,
    image: "/galery_image_4.png",
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
    image: "/galery_image_7.png",
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
    title: "HOME CARE (Acompanhamento Estendido)",
    icon: Clock,
    image: "/galery_image_1.png",
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
    "https://wa.me/555195553535?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Pet%20Moleque."

  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen bg-[#E6E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#1A2B23] mb-4">Nossos Serviços</h1>
            <p className="text-xl text-gray-700">
              Conheça em detalhes todos os serviços que oferecemos para cuidar do seu pet
            </p>
          </div>

          <div className="space-y-16">
            {servicesDetail.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              const serviceWhatsappUrl = `https://wa.me/555195553535?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${encodeURIComponent(service.title)}%20da%20Pet%20Moleque.`
              
              return (
                <div key={service.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Image Section */}
                    <div className={`relative h-80 md:h-auto ${isEven ? '' : 'md:col-start-2'}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-6 left-6 flex items-center justify-center w-16 h-16 bg-[#1A2B23] rounded-xl shadow-lg">
                        <Icon className="w-8 h-8 text-[#E6E0D2]" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B23] mb-4">{service.title}</h2>
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.fullDescription}</p>

                      <div className="mb-8">
                        <h3 className="font-bold text-xl text-[#1A2B23] mb-4 flex items-center gap-2">
                          <span className="text-2xl">✓</span> O que está incluso:
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-[#1A2B23] mt-1 font-bold text-lg">•</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-[#E6E0D2] to-[#F5F1E8] p-6 rounded-xl mb-8">
                        <h3 className="font-bold text-lg text-[#1A2B23] mb-2">💡 Ideal para:</h3>
                        <p className="text-gray-700 leading-relaxed">{service.ideal}</p>
                      </div>

                      <Link
                        href={serviceWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-[#1A2B23] text-[#E6E0D2] rounded-lg font-bold text-center hover:opacity-90 transition-opacity text-lg shadow-lg"
                      >
                        Solicitar este Serviço
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-20 bg-gradient-to-br from-white to-[#F5F1E8] p-10 rounded-2xl shadow-xl border-2 border-[#E6E0D2]">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-[#1A2B23] mb-4">Ainda tem dúvidas?</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Entre em contato conosco pelo WhatsApp ou formulário de contato. Estamos aqui para responder qualquer
                dúvida e personalizar o serviço ideal para seu pet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/555195553535?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20os%20serviços%20da%20Pet%20Moleque."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#1A2B23] text-[#E6E0D2] rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Falar no WhatsApp
                </Link>
                <Link
                  href="/contato"
                  className="inline-block px-8 py-4 bg-white text-[#1A2B23] border-2 border-[#1A2B23] rounded-lg font-bold hover:bg-[#1A2B23] hover:text-[#E6E0D2] transition-colors"
                >
                  Formulário de Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
