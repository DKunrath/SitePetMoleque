import Image from "next/image"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/logotipo_certo.png"
              alt="Pet Moleque"
              width={240}
              height={120}
              className="object-contain mb-4"
            />
            <p className="opacity-80">Cuidados veterinários domiciliares com profissionalismo e amor pelos animais.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 opacity-80">
              <li>Dog Walker</li>
              <li>Pet Sitter</li>
              <li>Home Care</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 opacity-80">
              <li>WhatsApp: (51) 9555-3535</li>
              <li>São Leopoldo, RS</li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/petmoleque_care"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="Instagram Pet Moleque"
              >
                <Instagram size={24} />
                <span>@petmoleque_care</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-80">
          <p>&copy; 2025 Pet Moleque. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
