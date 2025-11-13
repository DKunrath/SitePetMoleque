"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getSupabaseClient } from "@/lib/supabase"
import AdminSidebar from "@/components/admin-sidebar"
import { ArrowLeft, Edit, Trash2, Search, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface Client {
  id: string
  foto_url: string | null
  nome_animal: string
  especie: string
  sexo: string
  raca: string | null
  castrado: boolean
  tipo_alimentacao: string | null
  frequencia_alimentacao: string | null
  doencas_preexistentes: string | null
  tutor: string
  endereco: string
  bairro: string
  cidade: string
  telefone: string
  contato_emergencia: string | null
  telefone_emergencia: string | null
  veterinario_responsavel: string | null
  observacoes: string | null
  created_at: string
}

export default function ListaClientes() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [clients, setClients] = useState<Client[]>([])
  const [filteredClients, setFilteredClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [clientToDelete, setClientToDelete] = useState<string | null>(null)

  useEffect(() => {
    const isAuth = sessionStorage.getItem("adminAuth")
    if (!isAuth) {
      router.push("/admin")
      return
    }
    setIsAuthenticated(true)
    fetchClients()
  }, [router])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredClients(clients)
    } else {
      const filtered = clients.filter(
        (client) =>
          client.nome_animal.toLowerCase().includes(searchTerm.toLowerCase()) ||
          client.tutor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          client.especie.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredClients(filtered)
    }
  }, [searchTerm, clients])

  const fetchClients = async () => {
    try {
      const supabase = getSupabaseClient()
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching clients:", error)
        toast.error("Erro ao carregar clientes")
      } else {
        setClients(data || [])
        setFilteredClients(data || [])
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Erro inesperado ao carregar clientes")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!clientToDelete) return

    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase.from("clients").delete().eq("id", clientToDelete)

      if (error) {
        console.error("Error deleting client:", error)
        toast.error("Erro ao excluir cliente")
      } else {
        toast.success("Cliente excluído com sucesso!")
        setClients((prev) => prev.filter((c) => c.id !== clientToDelete))
        setFilteredClients((prev) => prev.filter((c) => c.id !== clientToDelete))
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Erro inesperado ao excluir cliente")
    } finally {
      setDeleteDialogOpen(false)
      setClientToDelete(null)
    }
  }

  const openDeleteDialog = (id: string) => {
    setClientToDelete(id)
    setDeleteDialogOpen(true)
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  return (
    <div className="min-h-screen bg-[#E6E0D2] pt-[73px]">
      <header className="bg-[#1A2B23] text-white p-4 shadow-lg fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Dashboard
          </Link>
          <h1 className="text-2xl font-bold">Lista de Clientes</h1>
          <div className="w-32"></div>
        </div>
      </header>

      <AdminSidebar />

      <main className="ml-64 max-w-7xl p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por nome do pet, tutor ou espécie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Total de clientes: {filteredClients.length}
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-[#1A2B23]" />
            </div>
          ) : filteredClients.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchTerm ? "Nenhum cliente encontrado" : "Nenhum cliente cadastrado ainda"}
              </p>
              {!searchTerm && (
                <Button
                  onClick={() => router.push("/admin/dashboard/cadastrar")}
                  className="mt-4 bg-[#1A2B23] hover:bg-[#1A2B23]/90"
                >
                  Cadastrar Primeiro Cliente
                </Button>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  className="border-2 border-[#1A2B23]/20 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex gap-6">
                    {/* Pet Photo */}
                    <div className="flex-shrink-0">
                      {client.foto_url ? (
                        <img
                          src={client.foto_url}
                          alt={client.nome_animal}
                          className="w-32 h-32 object-cover rounded-xl border-4 border-[#1A2B23]"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center border-4 border-[#1A2B23]">
                          <span className="text-4xl">🐾</span>
                        </div>
                      )}
                    </div>

                    {/* Pet Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-[#1A2B23] mb-1">{client.nome_animal}</h3>
                      <p className="text-gray-600 mb-3">
                        {client.especie} • {client.sexo}
                        {client.raca && ` • ${client.raca}`}
                        {client.castrado && " • Castrado"}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-semibold text-[#1A2B23]">Tutor:</span>{" "}
                          <span className="text-gray-700">{client.tutor}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#1A2B23]">Telefone:</span>{" "}
                          <span className="text-gray-700">{client.telefone}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#1A2B23]">Endereço:</span>{" "}
                          <span className="text-gray-700">{client.endereco}, {client.bairro} - {client.cidade}</span>
                        </div>
                        {client.frequencia_alimentacao && (
                          <div>
                            <span className="font-semibold text-[#1A2B23]">Alimentação:</span>{" "}
                            <span className="text-gray-700">
                              {client.tipo_alimentacao || "Não informado"} - {client.frequencia_alimentacao}
                            </span>
                          </div>
                        )}
                        {client.observacoes && (
                          <div>
                            <span className="font-semibold text-[#1A2B23]">Observações:</span>{" "}
                            <span className="text-gray-700 line-clamp-2">{client.observacoes}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4 pt-4 border-t">
                    <Button
                      onClick={() => router.push(`/admin/dashboard/editar/${client.id}`)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button
                      onClick={() => openDeleteDialog(client.id)}
                      variant="destructive"
                      className="flex-1"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Excluir
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este cliente? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
