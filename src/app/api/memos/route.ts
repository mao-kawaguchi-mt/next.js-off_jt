import { NextRequest, NextResponse } from "next/server";

let memos = [
  { id: 1, title: "最初のメモ" },
  { id: 2, title: "次のメモ" },
];

export async function GET() {
  return NextResponse.json(memos);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const newMemo = {
    id: memos.length + 1,
    title: body.title ?? "(無題)",
  };

  memos.push(newMemo);

  return NextResponse.json({ success: true, memo: newMemo });
}