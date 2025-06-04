"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../new/schema';
import { mutate } from "swr";
import { useRouter } from "next/navigation";
import Link from "next/link"

type FormValues = {
  title: string;
  text?: string;
  email?: string;
  age?: string;
  agree: boolean;
};

const Form: React.FC = () => {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      text: "",
      email: "",
      age: undefined,
      agree: false,
    },
    mode: "onChange"
  });

  const onValid = async (data: FormValues) => {
    const res = await fetch("/api/memos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) return;

    const newMemo = await res.json();

    mutate(
      "/api/memos",
      (currentData: FormValues[] = []) => [...currentData, newMemo.memo],
      false
    );

    router.push("/memos");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="border p-3 mb-4 rounded">
          <input
            {...register("title")} 
            placeholder="※必須※タイトルを入力"
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div className="border p-3 mb-4 rounded">
          <input
            {...register("text")}
            placeholder="本文を入力"
          />
          {errors.text && <p>{errors.text.message}</p>}
        </div>

        <div className="border p-3 mb-4 rounded">
          <input
            {...register("email")}
            placeholder="メールアドレスを入力"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="border p-3 mb-4 rounded">
          <input
            {...register("age")}
            placeholder="年齢を入力"
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div className="border p-3 mb-4 rounded">
          <input
            type="checkbox"
            {...register("agree")}
          />
          <Link href="/terms" className="text-blue-500 underline">利用規約</Link>に同意する
          
          {errors.agree && <p>{errors.agree.message}</p>}
        </div>

        <button type="submit">送信</button>
      </form>
    </>
  );
};

export default Form;