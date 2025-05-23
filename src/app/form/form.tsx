"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  age: number;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <FormValues>({
    defaultValues: {
      name: "",
      email: "",
      age: undefined,
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
          {...register("name", { required: "名前は必須です" 
          })} 
          placeholder="名前を入力"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className="border p-3 mb-4 rounded">
        <input
          {...register("email", { required: "メールアドレスは必須です",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
              message: "メールアドレスの形式が正しくありません",
            },
          })}
          placeholder="メールアドレスを入力"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="border p-3 mb-4 rounded">
        <input
          type="number"
          {...register("age", { required: "年齢は必須です",
            min: { value: 18, message: "18歳以上である必要があります" },
            max: { value: 100, message: "100歳以下である必要があります" },
          })}
          placeholder="年齢を入力"
        />
          {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">送信</button>
    </form>
  );
};

export default Form;