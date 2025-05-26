"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../new/schema';

type FormValues = {
  title: string;
  text: string;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      text: "",
    },
    mode: "onChange"
  });

  const onSubmit = (data: FormValues) => {
  console.log("送信データ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border p-3 mb-4 rounded">
        <input
          {...register("title")} 
          placeholder="タイトルを入力"
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

      <button type="submit">送信</button>
    </form>
  );
};

export default Form;