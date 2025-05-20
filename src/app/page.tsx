import Link from "next/link";

export const metadata = {
  title: "トップページ",
};

const name: string = "Yuki";

export default function Home() {
	return (
		<div>
			<h1>こんにちは、{name}さん</h1>
      <Link href = "/memos">memoへ</Link>
		</div>
	)
};
