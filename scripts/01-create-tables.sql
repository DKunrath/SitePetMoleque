-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  pet_name TEXT NOT NULL,
  pet_type TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  status TEXT DEFAULT 'pending'
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert appointments
CREATE POLICY "Allow anyone to insert appointments"
ON appointments FOR INSERT WITH CHECK (true);

-- Allow anyone to insert contact messages
CREATE POLICY "Allow anyone to insert contact_messages"
ON contact_messages FOR INSERT WITH CHECK (true);

-- Allow anyone to read appointments
CREATE POLICY "Allow anyone to read appointments"
ON appointments FOR SELECT USING (true);

-- Allow anyone to read contact messages
CREATE POLICY "Allow anyone to read contact_messages"
ON contact_messages FOR SELECT USING (true);
