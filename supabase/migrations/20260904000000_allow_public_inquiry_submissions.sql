ALTER TABLE public.order_inquiries
  ADD CONSTRAINT order_inquiries_full_name_length
    CHECK (char_length(btrim(full_name)) BETWEEN 2 AND 120),
  ADD CONSTRAINT order_inquiries_email_length
    CHECK (char_length(btrim(email)) BETWEEN 3 AND 200),
  ADD CONSTRAINT order_inquiries_phone_length
    CHECK (char_length(btrim(phone)) BETWEEN 6 AND 40),
  ADD CONSTRAINT order_inquiries_item_length
    CHECK (item IS NULL OR char_length(btrim(item)) <= 160),
  ADD CONSTRAINT order_inquiries_quantity_range
    CHECK (quantity BETWEEN 1 AND 500),
  ADD CONSTRAINT order_inquiries_colours_length
    CHECK (colours IS NULL OR char_length(btrim(colours)) <= 200),
  ADD CONSTRAINT order_inquiries_message_length
    CHECK (message IS NULL OR char_length(btrim(message)) <= 2000);

REVOKE ALL ON TABLE public.order_inquiries FROM anon, authenticated;
GRANT INSERT (full_name, email, phone, event_date, item, quantity, colours, message)
  ON TABLE public.order_inquiries TO anon, authenticated;

CREATE POLICY "Public can submit order inquiries"
  ON public.order_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
