import Link from "next/link";

export default function Terms() {
  return (
    <>
      <h1 className="font-bold mb-4">利用規約</h1>
      <p>一発・裏ドラ・カンドラ・カン裏ドラあり</p>
      <p>喰いタン・後付けアリアリ</p>
      <p>親のあがりやめなし</p>
      <Link href="/memos/new" className="text-blue-500 underline">入力画面へ戻る</Link>
    </>
  )
}