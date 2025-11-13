"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, UserPlus } from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()

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
    <aside className="fixed left-0 top-[73px] bottom-0 w-64 bg-white shadow-lg overflow-y-auto z-20">
      <nav className="p-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
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
  )
}
