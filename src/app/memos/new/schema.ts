import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  text: z
    .string()
    .refine(val => val === "" || val.length >= 10, {
      message: "本文は10文字以上で入力してください",
    }).optional(),
  email: z
    .string()
    .email("メールアドレスは正しい形式で入力してください").or(z.literal("")).optional(),
  age: z
    .string()
    .refine((val) => Number(val) >= 18 && Number(val) <= 100, {
      message: "18歳以上100歳以下で入力してください",
    }).or(z.literal("")).optional(),
  agree: z.boolean().refine(val => val === true, "同意が必要です")
});