"use client";

import Link from "next/link";
import { useUserContext } from "@/context/UserContext";

export const Header = () => {
  const { user, logout } = useUserContext();

  return (
    <header className="p-[1rem] bg-[#CD853F]">
      <Link href="/">トップ</Link>
      <div>
        {user ? (
          <>
            <span className="mr-2">{user.name} さん</span>
            <button onClick={logout} className="text-blue-500">ログアウト</button>
          </>
        ) : (
          <>
            <p>ゲスト</p>
            <Link href="/login" className="text-blue-500">ログイン</Link>
          </>
        )}
      </div>
    </header>
  );
};