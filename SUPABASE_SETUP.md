# 📝 Instruções de Configuração do Supabase

Este documento guia você na configuração completa do Supabase para o site Pet Moleque.

## 1️⃣ Criar Conta e Projeto no Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Clique em "Start your project"
3. Faça login ou crie uma conta (pode usar GitHub, Google, etc.)
4. Clique em "New Project"
5. Preencha:
   - **Name**: Pet Moleque
   - **Database Password**: Crie uma senha forte e **salve em local seguro**
   - **Region**: Escolha a região mais próxima (South America - São Paulo)
6. Clique em "Create new project" e aguarde alguns minutos

## 2️⃣ Obter as Credenciais

1. No painel do projeto, clique em **Settings** (⚙️) no menu lateral
2. Clique em **API**
3. Você verá:
   - **Project URL**: Esta é sua `NEXT_PUBLIC_SUPABASE_URL`
   - **Project API keys** → **anon public**: Esta é sua `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. Copie essas credenciais e cole no arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 3️⃣ Criar a Tabela de Clientes

1. No painel do Supabase, clique em **SQL Editor** no menu lateral
2. Clique em **New query**
3. Copie todo o conteúdo do arquivo `scripts/02-create-clients-table.sql`
4. Cole no editor SQL
5. Clique em **Run** (ou pressione Ctrl+Enter)
6. Você verá a mensagem "Success. No rows returned"

## 4️⃣ Criar o Bucket de Armazenamento

### Opção A: Via Interface (Recomendado)

1. No painel do Supabase, clique em **Storage** no menu lateral
2. Clique em **Create a new bucket**
3. Preencha:
   - **Name**: `pet-photos`
   - **Public bucket**: ✅ Marque esta opção
4. Clique em **Create bucket**

### Opção B: Via SQL

Se o bucket não foi criado automaticamente pelo script SQL, você pode criá-lo manualmente:

1. Vá em **SQL Editor**
2. Execute:

```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('pet-photos', 'pet-photos', true)
ON CONFLICT (id) DO NOTHING;
```

## 5️⃣ Configurar Políticas de Acesso (RLS)

As políticas já foram criadas pelo script SQL, mas você pode verificar:

1. Clique em **Authentication** → **Policies**
2. Selecione a tabela `clients`
3. Você deve ver a política "Enable all operations for clients"

Para o Storage:

1. Clique em **Storage** → Selecione o bucket `pet-photos`
2. Clique em **Policies**
3. Você deve ver as políticas de leitura, inserção e exclusão

## 6️⃣ Testar a Conexão

1. No terminal do projeto, execute:

```bash
npm run dev
```

2. Acesse `http://localhost:3000/admin`
3. Faça login com:
   - **Usuário**: `camilazabka`
   - **Senha**: `petmoleque2025`

4. Tente cadastrar um cliente de teste
5. Faça upload de uma foto
6. Verifique se os dados aparecem na lista de clientes

## 7️⃣ Verificar Dados no Supabase

1. No painel do Supabase, clique em **Table Editor**
2. Selecione a tabela `clients`
3. Você verá os clientes cadastrados

Para ver as fotos:

1. Clique em **Storage**
2. Selecione o bucket `pet-photos`
3. Você verá as imagens enviadas

## ❗ Solução de Problemas

### Erro: "relation 'clients' does not exist"
- Execute novamente o script SQL `02-create-clients-table.sql`

### Erro: "bucket does not exist"
- Crie o bucket manualmente via interface (passo 4)

### Erro ao fazer upload de imagem
- Verifique se o bucket `pet-photos` está marcado como **Public**
- Verifique se as políticas de Storage estão ativas

### Credenciais não funcionam
- Verifique se copiou corretamente do painel do Supabase
- Certifique-se de que o arquivo `.env.local` está na raiz do projeto
- Reinicie o servidor de desenvolvimento (`npm run dev`)

## 🔒 Segurança

⚠️ **IMPORTANTE**: 

- Nunca compartilhe suas credenciais do Supabase publicamente
- O arquivo `.env.local` está no `.gitignore` e não deve ser commitado
- Para produção, considere usar autenticação real do Supabase em vez do login simples

## 📊 Estrutura Final

Após a configuração, você terá:

- ✅ Tabela `clients` criada
- ✅ Bucket `pet-photos` para armazenar imagens
- ✅ Políticas RLS configuradas
- ✅ Conexão entre o Next.js e Supabase funcionando

## 🆘 Suporte

Se encontrar problemas:

1. Verifique a documentação oficial: [https://supabase.com/docs](https://supabase.com/docs)
2. Consulte o README.md do projeto
3. Verifique os logs no console do navegador (F12)

---

✅ Configuração concluída! Seu site Pet Moleque está pronto para uso.
