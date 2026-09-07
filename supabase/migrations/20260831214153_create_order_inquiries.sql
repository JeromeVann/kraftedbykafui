CREATE TABLE public.order_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date date,
  item text,
  quantity integer NOT NULL DEFAULT 1,
  colours text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.order_inquiries TO service_role;

ALTER TABLE public.order_inquiries ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER order_inquiries_set_updated_at
BEFORE UPDATE ON public.order_inquiries
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();