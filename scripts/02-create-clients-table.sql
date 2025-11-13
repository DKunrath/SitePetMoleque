-- Create clients table for Pet Moleque
-- This table stores information about pets and their owners

CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  foto_url TEXT,
  nome_animal VARCHAR(255) NOT NULL,
  especie VARCHAR(100) NOT NULL,
  sexo VARCHAR(20) NOT NULL,
  raca VARCHAR(100),
  castrado BOOLEAN DEFAULT false,
  tipo_alimentacao TEXT,
  frequencia_alimentacao TEXT,
  doencas_preexistentes TEXT,
  tutor VARCHAR(255) NOT NULL,
  endereco TEXT NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  contato_emergencia VARCHAR(255),
  telefone_emergencia VARCHAR(20),
  veterinario_responsavel VARCHAR(255),
  observacoes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_clients_tutor ON clients(tutor);
CREATE INDEX IF NOT EXISTS idx_clients_cidade ON clients(cidade);
CREATE INDEX IF NOT EXISTS idx_clients_nome_animal ON clients(nome_animal);

-- Enable Row Level Security (RLS)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (since we're using simple auth)
CREATE POLICY "Enable all operations for clients" ON clients
  FOR ALL USING (true) WITH CHECK (true);

-- Create storage bucket for pet photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('pet-photos', 'pet-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to pet photos
CREATE POLICY "Public Access for pet photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'pet-photos');

-- Allow authenticated uploads
CREATE POLICY "Allow uploads for pet photos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'pet-photos');

-- Allow authenticated deletes
CREATE POLICY "Allow deletes for pet photos"
ON storage.objects FOR DELETE
USING (bucket_id = 'pet-photos');
