# 🐾 Pet Moleque - Website

Site profissional para a Pet Moleque, empresa de cuidados veterinários domiciliares fundada por Camila, técnica veterinária especializada em cuidados clínicos.

## 🎨 Identidade Visual

- **Cor de destaque**: Verde escuro `#1A2B23` (textos, botões, cards)
- **Cor de fundo**: Bege `#E6E0D2`
- **Estilo**: Design acolhedor, limpo e profissional

## 📋 Funcionalidades

### Site Público

- ✅ **Página Inicial** (`/`)
  - Hero Section com apresentação
  - Seção de Serviços (Dog Walker, Pet Sitter, Home Care Pet)
  - Depoimentos de clientes
  - Galeria de fotos
  - Botão flutuante do WhatsApp

- ✅ **Página Sobre** (`/sobre`)
  - Apresentação da Camila
  - História da Família Pet Moleque
  - Valores e missão

- ✅ **Página Serviços** (`/servicos`)
  - Detalhamento completo de cada serviço

- ✅ **Página Contato** (`/contato`)
  - Formulário de contato
  - Informações de localização
  - Links para redes sociais

### Painel Administrativo

- ✅ **Login Simples** (`/admin`)
  - Usuário: `camilazabka`
  - Senha: `petmoleque2025`

- ✅ **Dashboard** (`/admin/dashboard`)
  - Visão geral do sistema
  - Navegação para cadastro e listagem

- ✅ **Cadastrar Cliente** (`/admin/dashboard/cadastrar`)
  - Upload de foto do pet
  - Dados do animal (nome, espécie, sexo, raça, castração)
  - Alimentação (tipo e frequência)
  - Doenças pré-existentes
  - Dados do tutor (nome, telefone, endereço completo)
  - Contatos de emergência
  - Veterinário responsável
  - Observações

- ✅ **Lista de Clientes** (`/admin/dashboard/lista`)
  - Visualização em cards com fotos
  - Busca por nome do pet, tutor ou espécie
  - Editar e excluir clientes

- ✅ **Editar Cliente** (`/admin/dashboard/editar/[id]`)
  - Atualização de todos os dados do cliente
  - Upload de nova foto

## 🛠️ Tecnologias

- **Framework**: Next.js 16 com React 19
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4
- **Banco de Dados**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage (para fotos dos pets)
- **UI Components**: Radix UI + shadcn/ui
- **Gerenciador de Pacotes**: npm

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DKunrath/SitePetMoleque.git
cd SitePetMoleque
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Edite o arquivo `.env.local` e adicione suas credenciais do Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
```

5. Execute o SQL no Supabase:
   - Acesse seu projeto no Supabase
   - Vá em SQL Editor
   - Execute o script `scripts/02-create-clients-table.sql`

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

7. Acesse o site em `http://localhost:3000`

## 🗄️ Estrutura do Banco de Dados

### Tabela `clients`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | ID único do cliente |
| foto_url | TEXT | URL da foto do pet |
| nome_animal | VARCHAR(255) | Nome do pet |
| especie | VARCHAR(100) | Espécie (Cão, Gato, Outro) |
| sexo | VARCHAR(20) | Sexo (Macho, Fêmea) |
| raca | VARCHAR(100) | Raça do animal |
| castrado | BOOLEAN | Se é castrado |
| tipo_alimentacao | TEXT | Tipo de alimentação |
| frequencia_alimentacao | TEXT | Frequência das refeições |
| doencas_preexistentes | TEXT | Doenças ou condições especiais |
| tutor | VARCHAR(255) | Nome do tutor |
| endereco | TEXT | Endereço completo |
| bairro | VARCHAR(100) | Bairro |
| cidade | VARCHAR(100) | Cidade |
| telefone | VARCHAR(20) | Telefone do tutor |
| contato_emergencia | VARCHAR(255) | Nome do contato de emergência |
| telefone_emergencia | VARCHAR(20) | Telefone de emergência |
| veterinario_responsavel | VARCHAR(255) | Nome do veterinário |
| observacoes | TEXT | Observações adicionais |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

### Storage Bucket `pet-photos`

Armazena as fotos dos pets com acesso público para visualização.

## 📱 Recursos Implementados

- ✅ Design responsivo (mobile e desktop)
- ✅ Upload de imagens com preview
- ✅ Busca e filtro de clientes
- ✅ Notificações toast (Sonner)
- ✅ Botão flutuante do WhatsApp em todas as páginas
- ✅ Formulário de contato
- ✅ SEO otimizado
- ✅ Galeria de fotos
- ✅ Seção de depoimentos

## 🔐 Autenticação

O sistema usa autenticação simples via `sessionStorage` para o painel administrativo. **Não é recomendado para produção** - use apenas para demonstração ou adicione autenticação real com Supabase Auth posteriormente.

## 📞 Contato

- **WhatsApp**: +55 51 99958-9178
- **Endereço**: André Rebouças, 91 — São Leopoldo/RS

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo da Pet Moleque.

---

Desenvolvido com ❤️ para a Pet Moleque
