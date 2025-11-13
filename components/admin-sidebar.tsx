"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Users, UserPlus, Menu, X } from "lucide-react"
import { useState } from "react"

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      href: "/admin/dashboard/cadastrar",
      icon: UserPlus,
      label: "Cadastrar Cliente",
    },
    {
      href: "/admin/dashboard/lista",
      icon: Users,
      label: "Lista de Clientes",
    },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-[#1A2B23] text-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 top-[73px]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-[73px] bottom-0 w-64 bg-white shadow-lg overflow-y-auto z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Image
              src="/Logotipo.png"
              alt="Pet Moleque"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-bold text-lg text-[#1A2B23]">Pet Moleque</span>
          </div>
        </div>
        <nav className="p-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${
                  isActive
                    ? "bg-[#1A2B23] text-white"
                    : "text-[#1A2B23] hover:bg-[#E6E0D2]"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
