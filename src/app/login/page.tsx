"use client";

import { useUserContext } from "@/context/UserContext";

export default function LoginPage() {
  const { login } = useUserContext();

  return (
    <div className="p-4">
      <button onClick={() => login("山田太郎")} className="bg-blue-500 text-white px-4 py-2 rounded">
        ログインする
      </button>
    </div>
  );
}