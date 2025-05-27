import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1,"タイトルは必須です"),
  text: z.string().min(10,"本文は10文字以上で入力してください"),
});

export type FormValues = z.infer<typeof schema>;