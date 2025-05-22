import Link from "next/link";

export const metadata = {
  title: "memoページ",
};

export default function Memos() {
  return (
    <main>
      <h1>memo</h1>
      <Link href = "/memos/id">idへ</Link>
    </main>
  )
};