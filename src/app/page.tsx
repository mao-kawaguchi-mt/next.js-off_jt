import { LikeButton } from './components/LikeButton';
import Link from "next/link";

export default function Page() {
  const today = new Date().toLocaleDateString();
  const message = '今日もがんばりましょう！';

  return (
    <>
      <h1>こんにちは！</h1>
      <p>今日は {today} です。</p>
      <p>{message}</p>
      <LikeButton/>
      <Link href="/memos">memoへ</Link>
    </>
  );
}