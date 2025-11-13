"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    //{ href: "/contato", label: "Contato" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#1A2B23] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logotipo_certo.png"
              alt="Pet Moleque"
              width={120}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu - Centralizado */}
          <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-[#E6E0D2] hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botão Fale Conosco */}
          <div className="hidden md:block">
            <Link
              href="https://wa.me/5551999589178?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Pet%20Moleque."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#E6E0D2] text-[#1A2B23] rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#E6E0D2]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-[#E6E0D2] hover:bg-[#2A3B33] rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
