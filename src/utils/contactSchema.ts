import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message is too short (minimum 10 characters)")
    .max(2000, "Message is too long (maximum 2000 characters)"),
});

export type ContactFormType = z.infer<typeof contactSchema>;
