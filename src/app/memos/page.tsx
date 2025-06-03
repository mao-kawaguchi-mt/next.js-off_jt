"use client";

import useSWR, { mutate } from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then(res => res.json());

type Memo = {
  id: number;
  title: string;
};

export default function MemosPage() {
  const { data, error, isLoading } = useSWR ("/api/memos", fetcher);
  
  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>取得に失敗しました</p>;
  if (!data || data.length === 0) return <p>データが存在しません</p>;

  return (
    <main>
      <h1>memo</h1>
      <ul>
        {data.map((memo: Memo) => (
          <li key ={memo.id} > {memo.title}</li>
        ))}
      </ul>
      <Link href = "/memos/id">idへ</Link>
    </main>
  )
};