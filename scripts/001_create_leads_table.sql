-- Create leads table for storing lead magnet submissions
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.leads enable row level security;

-- Allow anyone to insert leads (public form submission)
create policy "leads_insert_public"
  on public.leads for insert
  with check (true);

-- Only allow authenticated users to view leads (for future admin panel)
create policy "leads_select_authenticated"
  on public.leads for select
  using (auth.role() = 'authenticated');
