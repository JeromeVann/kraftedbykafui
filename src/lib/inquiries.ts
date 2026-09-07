import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";

const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(6).max(40),
  eventDate: z.string().trim().max(20).optional().or(z.literal("")),
  item: z.string().trim().max(160).optional().or(z.literal("")),
  quantity: z.number().int().min(1).max(500),
  colours: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type Inquiry = z.infer<typeof inquirySchema>;

export async function submitInquiry(input: Inquiry) {
  const data = inquirySchema.parse(input);
  const { error } = await supabase.from("order_inquiries").insert({
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    event_date: data.eventDate || null,
    item: data.item || null,
    quantity: data.quantity,
    colours: data.colours || null,
    message: data.message || null,
  });

  if (error) {
    console.error(error);
    throw new Error("We couldn't save your request. Please try again.");
  }

  return { ok: true as const };
}
