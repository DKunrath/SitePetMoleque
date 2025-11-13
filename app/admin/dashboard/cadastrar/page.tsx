"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getSupabaseClient } from "@/lib/supabase"
import AdminSidebar from "@/components/admin-sidebar"
import { ArrowLeft, Upload, Save, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface ClientData {
  foto_url: string
  nome_animal: string
  especie: string
  sexo: string
  raca: string
  castrado: boolean
  tipo_alimentacao: string
  frequencia_alimentacao: string
  doencas_preexistentes: string
  tutor: string
  endereco: string
  bairro: string
  cidade: string
  telefone: string
  contato_emergencia: string
  telefone_emergencia: string
  veterinario_responsavel: string
  observacoes: string
}

export default function CadastrarCliente() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [formData, setFormData] = useState<ClientData>({
    foto_url: "",
    nome_animal: "",
    especie: "",
    sexo: "",
    raca: "",
    castrado: false,
    tipo_alimentacao: "",
    frequencia_alimentacao: "",
    doencas_preexistentes: "",
    tutor: "",
    endereco: "",
    bairro: "",
    cidade: "",
    telefone: "",
    contato_emergencia: "",
    telefone_emergencia: "",
    veterinario_responsavel: "",
    observacoes: "",
  })

  useEffect(() => {
    const isAuth = sessionStorage.getItem("adminAuth")
    if (!isAuth) {
      router.push("/admin")
      return
    }
    setIsAuthenticated(true)
  }, [router])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const supabase = getSupabaseClient()
      let fotoUrl = formData.foto_url

      // Upload image if exists
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
        const filePath = `${fileName}`

        const { error: uploadError } = await supabase.storage
          .from("pet-photos")
          .upload(filePath, imageFile)

        if (uploadError) {
          console.error("Error uploading image:", uploadError)
          toast.error("Erro ao fazer upload da imagem")
        } else {
          const {
            data: { publicUrl },
          } = supabase.storage.from("pet-photos").getPublicUrl(filePath)
          fotoUrl = publicUrl
        }
      }

      // Insert client data
      const { error: insertError } = await supabase.from("clients").insert([
        {
          ...formData,
          foto_url: fotoUrl,
        },
      ])

      if (insertError) {
        console.error("Error inserting client:", insertError)
        toast.error("Erro ao cadastrar cliente")
      } else {
        toast.success("Cliente cadastrado com sucesso!")
        // Reset form
        setFormData({
          foto_url: "",
          nome_animal: "",
          especie: "",
          sexo: "",
          raca: "",
          castrado: false,
          tipo_alimentacao: "",
          frequencia_alimentacao: "",
          doencas_preexistentes: "",
          tutor: "",
          endereco: "",
          bairro: "",
          cidade: "",
          telefone: "",
          contato_emergencia: "",
          telefone_emergencia: "",
          veterinario_responsavel: "",
          observacoes: "",
        })
        setImageFile(null)
        setImagePreview("")
        router.push("/admin/dashboard/lista")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Erro inesperado ao cadastrar cliente")
    } finally {
      setIsLoading(false)
    }
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
          <div className="flex items-center gap-3">
            <Image
              src="/Logotipo.png"
              alt="Pet Moleque"
              width={32}
              height={32}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold">Cadastrar Cliente</h1>
          </div>
          <div className="w-32"></div>
        </div>
      </header>

      <AdminSidebar />

      <main className="lg:ml-64 max-w-5xl p-4 lg:p-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Upload de Foto */}
            <div>
              <Label className="text-lg font-semibold text-[#1A2B23]">Foto do Animal</Label>
              <div className="mt-3 flex flex-col items-center gap-4">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-48 h-48 object-cover rounded-xl border-4 border-[#1A2B23]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null)
                        setImagePreview("")
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="w-48 h-48 border-2 border-dashed border-[#1A2B23] rounded-xl flex items-center justify-center">
                    <Upload className="w-12 h-12 text-[#1A2B23]/50" />
                  </div>
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="max-w-xs"
                />
              </div>
            </div>

            {/* Dados do Animal */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-[#1A2B23] mb-4">Dados do Animal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome_animal">Nome do Animal *</Label>
                  <Input
                    id="nome_animal"
                    name="nome_animal"
                    value={formData.nome_animal}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="especie">Espécie *</Label>
                  <select
                    id="especie"
                    name="especie"
                    value={formData.especie}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B23]"
                  >
                    <option value="">Selecione</option>
                    <option value="Cão">Cão</option>
                    <option value="Gato">Gato</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="sexo">Sexo *</Label>
                  <select
                    id="sexo"
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B23]"
                  >
                    <option value="">Selecione</option>
                    <option value="Macho">Macho</option>
                    <option value="Fêmea">Fêmea</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="raca">Raça</Label>
                  <Input
                    id="raca"
                    name="raca"
                    value={formData.raca}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <input
                    type="checkbox"
                    id="castrado"
                    name="castrado"
                    checked={formData.castrado}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#1A2B23] border-gray-300 rounded focus:ring-[#1A2B23]"
                  />
                  <Label htmlFor="castrado" className="cursor-pointer">
                    Animal Castrado
                  </Label>
                </div>
              </div>
            </div>

            {/* Alimentação e Saúde */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-[#1A2B23] mb-4">Alimentação e Saúde</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tipo_alimentacao">Tipo de Alimentação</Label>
                  <Input
                    id="tipo_alimentacao"
                    name="tipo_alimentacao"
                    value={formData.tipo_alimentacao}
                    onChange={handleInputChange}
                    placeholder="Ex: Ração seca, alimentação natural"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="frequencia_alimentacao">Frequência de Alimentação</Label>
                  <Input
                    id="frequencia_alimentacao"
                    name="frequencia_alimentacao"
                    value={formData.frequencia_alimentacao}
                    onChange={handleInputChange}
                    placeholder="Ex: 2x ao dia"
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="doencas_preexistentes">Doenças Pré-existentes</Label>
                  <Textarea
                    id="doencas_preexistentes"
                    name="doencas_preexistentes"
                    value={formData.doencas_preexistentes}
                    onChange={handleInputChange}
                    placeholder="Descreva doenças ou condições de saúde"
                    rows={3}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Dados do Tutor */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-[#1A2B23] mb-4">Dados do Tutor</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tutor">Nome do Tutor *</Label>
                  <Input
                    id="tutor"
                    name="tutor"
                    value={formData.tutor}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="endereco">Endereço *</Label>
                  <Input
                    id="endereco"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="bairro">Bairro *</Label>
                  <Input
                    id="bairro"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input
                    id="cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Contatos de Emergência */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-[#1A2B23] mb-4">Contatos de Emergência</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contato_emergencia">Contato de Emergência</Label>
                  <Input
                    id="contato_emergencia"
                    name="contato_emergencia"
                    value={formData.contato_emergencia}
                    onChange={handleInputChange}
                    placeholder="Nome do familiar ou vizinho"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone_emergencia">Telefone de Emergência</Label>
                  <Input
                    id="telefone_emergencia"
                    name="telefone_emergencia"
                    type="tel"
                    value={formData.telefone_emergencia}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000"
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="veterinario_responsavel">Veterinário Responsável</Label>
                  <Input
                    id="veterinario_responsavel"
                    name="veterinario_responsavel"
                    value={formData.veterinario_responsavel}
                    onChange={handleInputChange}
                    placeholder="Nome da clínica ou veterinário"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Observações */}
            <div className="border-t pt-6">
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea
                id="observacoes"
                name="observacoes"
                value={formData.observacoes}
                onChange={handleInputChange}
                placeholder="Informações adicionais importantes"
                rows={4}
                className="mt-1"
              />
            </div>

            {/* Botões */}
            <div className="flex gap-4 pt-6">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-[#1A2B23] hover:bg-[#1A2B23]/90 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Cadastrando...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    Cadastrar Cliente
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/dashboard")}
                disabled={isLoading}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
