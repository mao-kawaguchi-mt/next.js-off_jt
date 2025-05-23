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
      age: 0,
    },
    mode: "onChange"
  });

  const onSubmit = (data: FormValues) => {
  console.log("送信データ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <input
          {...register("name", { required: "名前は必須です" 
          })} 
        />
        {errors.name && <p>{errors.name.message}</p>}
      </>

      <>
        <input
          {...register("email", { required: "メールアドレスは必須です",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
              message: "メールアドレスの形式が正しくありません",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </>

      <>
        <input
          type="number"
          {...register("age", { required: "年齢は必須です",
            min: { value: 18, message: "18歳以上である必要があります" },
            max: { value: 100, message: "100歳以下である必要があります" },
          })}
        />
          {errors.name && <p>{errors.name.message}</p>}
      </>

      <button type="submit">送信</button>
    </form>
  );
};

export default Form;