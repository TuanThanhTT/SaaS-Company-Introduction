import { z } from "zod";

export const ChatMessageSchema = z.object({
  from: z.enum(["user", "bot"]),
  text: z.string(),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;

export const BookResultSchema = z.object({
  book_id: z.string().optional(),
  title: z.string().optional(),
  author: z.string().optional(),
  description: z.string().optional(),
  genre: z.array(z.string()).optional(),
  language: z.string().optional(),
  publication_year: z.number().optional(),
  publisher: z.string().optional(),
  cover_url: z.string().optional(),
});

export const RasaResponseSchema = z.object({
  recipient_id: z.string().optional(),
  text: z.string().optional(),
  image: z.string().optional(),
  buttons: z
    .array(
      z.object({
        title: z.string(),
        payload: z.string(),
      })
    )
    .optional(),
  custom: z
    .object({
      results: z.array(BookResultSchema).optional(),
    })
    .optional(),
});

export type RasaResponse = z.infer<typeof RasaResponseSchema>;