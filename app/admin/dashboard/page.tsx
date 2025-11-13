"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import AdminSidebar from "@/components/admin-sidebar"
import { LogOut, Users, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const isAuth = sessionStorage.getItem("adminAuth")
    if (!isAuth) {
      router.push("/admin")
      return
    }
    setIsAuthenticated(true)
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth")
    router.push("/admin")
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  return (
    <div className="min-h-screen bg-[#E6E0D2] pt-[73px]">
      {/* Header */}
      <header className="bg-[#1A2B23] text-white p-4 shadow-lg fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between pl-4 pr-4">
          <h1 className="text-2xl font-bold">Painel Administrativo - Pet Moleque</h1>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <div className="flex">
        <AdminSidebar />

        {/* Main Content */}
        <main className="ml-64 flex-1 p-6 lg:p-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-[#1A2B23] mb-4">Bem-vinda, Camila!</h2>
            <p className="text-gray-700 mb-6">
              Use o menu ao lado para cadastrar novos clientes ou visualizar a lista de pets cadastrados.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/admin/dashboard/cadastrar"
                className="p-6 border-2 border-[#1A2B23] rounded-xl hover:bg-[#1A2B23] hover:text-white transition-all group"
              >
                <UserPlus className="w-12 h-12 mb-4 text-[#1A2B23] group-hover:text-white" />
                <h3 className="text-xl font-bold mb-2">Cadastrar Novo Cliente</h3>
                <p className="text-sm opacity-80">Adicione um novo pet e tutor ao sistema</p>
              </Link>
              <Link
                href="/admin/dashboard/lista"
                className="p-6 border-2 border-[#1A2B23] rounded-xl hover:bg-[#1A2B23] hover:text-white transition-all group"
              >
                <Users className="w-12 h-12 mb-4 text-[#1A2B23] group-hover:text-white" />
                <h3 className="text-xl font-bold mb-2">Ver Lista de Clientes</h3>
                <p className="text-sm opacity-80">Visualize, edite ou remova clientes cadastrados</p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
