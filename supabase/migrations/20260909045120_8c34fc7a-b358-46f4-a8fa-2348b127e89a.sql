CREATE TABLE public.promo_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  account_number TEXT NOT NULL,
  tier INTEGER,
  country TEXT,
  address TEXT,
  note TEXT,
  lang TEXT NOT NULL DEFAULT 'zh',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.promo_registrations TO anon, authenticated;
GRANT ALL ON public.promo_registrations TO service_role;

ALTER TABLE public.promo_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a registration"
  ON public.promo_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);