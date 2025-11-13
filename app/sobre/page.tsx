import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen bg-[#E6E0D2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-[#1A2B23] mb-12 text-center">
            Sobre a Pet Moleque
          </h1>

          {/* Apresentação da Camila */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-[#1A2B23] rounded-full flex items-center justify-center text-white text-6xl flex-shrink-0">
                👩‍⚕️
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#1A2B23] mb-4">Camila</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Oi, eu sou a Camila e sou técnica veterinária com especialização em cuidados clínicos domiciliares e fundadora da Pet Moleque, uma empresa criada para oferecer atenção individualizada, profissional e afetuosa a cada animal, dentro do ambiente que ele mais confia: o seu lar.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Meu trabalho envolve o cuidado tanto de animais com condições específicas como em reabilitação, tratamento ou pós-operatório, quanto de pets saudáveis, que também se beneficiam de um acompanhamento de qualidade durante o dia, nas rotinas de passeio ou quando o tutor precisa se ausentar.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Na Pet Moleque, cada atendimento é planejado de forma personalizada, respeitando o temperamento, as necessidades e o bem-estar de cada pet.
                  O meu propósito é garantir cuidado especializado e personalizado para cada fase da vida do seu pet, com empatia, responsabilidade e dedicação.
                </p>
              </div>
            </div>
          </div>

          {/* Família Pet Moleque */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-[#1A2B23] mb-6 text-center">
              Família Pet Moleque
            </h2>
            
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#1A2B23] rounded-full flex items-center justify-center text-4xl mb-2">
                    😻
                  </div>
                  <p className="font-semibold text-[#1A2B23]">Bartolomeu</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#1A2B23] rounded-full flex items-center justify-center text-4xl mb-2">
                    🐶
                  </div>
                  <p className="font-semibold text-[#1A2B23]">Bartolino</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#1A2B23] rounded-full flex items-center justify-center text-4xl mb-2">
                    👨
                  </div>
                  <p className="font-semibold text-[#1A2B23]">Erick</p>
                </div>
              </div>
            </div>

            <div className="text-gray-700 space-y-4">
              <p className="leading-relaxed">
                No meu lar reside meu marido Erick, nossos pets Bartolomeu e Bartolino 😻🐶 e eu. Sabemos o quanto a rotina é importante na vida dos animais, por isso mantemos a nossa super organizada, mas, claro, sempre observando e adaptando, quando necessário. Tivemos o cuidado de estruturá-la de forma que o dia a dia deles acompanhe naturalmente o nosso.
              </p>
              <p className="leading-relaxed">
                E você deve estar se perguntando: como fazemos quando estou em plantões longos, por vários dias consecutivos?
              </p>
              <p className="leading-relaxed font-semibold">
                A resposta é simples: meu marido, com seu horário fixo de trabalho, consegue sempre manter os cuidados e o ritmo dos nossos pets, preservando a tranquilidade e o amor que valorizamos no nosso lar, mesmo durante as minhas ausências temporárias.
              </p>
              <p className="leading-relaxed text-lg text-[#1A2B23] font-bold">
                Por isso digo: é uma troca verdadeira, de família para família. Enquanto eu cuido do seu pet, o Erick cuida dos nossos — e é isso que torna o meu trabalho tão especial.
              </p>
            </div>
          </div>

          {/* Nossos Valores */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#1A2B23] mb-6 text-center">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl">❤️</div>
                <div>
                  <h3 className="font-bold text-[#1A2B23] mb-2">Amor pelos Animais</h3>
                  <p className="text-gray-700">Cada pet é tratado com carinho genuíno e respeito</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">⚕️</div>
                <div>
                  <h3 className="font-bold text-[#1A2B23] mb-2">Profissionalismo</h3>
                  <p className="text-gray-700">Formação técnica e experiência em cuidados veterinários</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🏡</div>
                <div>
                  <h3 className="font-bold text-[#1A2B23] mb-2">Conforto do Lar</h3>
                  <p className="text-gray-700">Atendimento no ambiente familiar do pet</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-bold text-[#1A2B23] mb-2">Confiança</h3>
                  <p className="text-gray-700">Responsabilidade e dedicação em cada atendimento</p>
                </div>
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
