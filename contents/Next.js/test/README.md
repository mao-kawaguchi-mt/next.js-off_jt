# テスト入門

## 🎯 ゴール

- これまで作成した UI コンポーネント・Hooks に対してユニットテストが書ける
- カバレッジレポートを確認し、改善ポイントを特定できる
- テストしやすい設計（責務分離・依存注入）の観点を理解する

---

## ✅ カバーするテーマ

| 項目 | 内容 |
|------|------|
| 1.  ユニットテスト基礎 | `render`, `screen`, `userEvent` による操作・検証 |
| 2.  テストしやすい設計 | 責務分離、依存の注入、Hooksテストの意識付け |
| 3.  カバレッジ計測 | `--coverage` で網羅率を可視化 |

---

## ✅ ユニットテスト基礎

[リンク](ユニットテスト基礎.md)  

---

## ✅ テストしやすい設計

[リンク](Custom%20Hooks%20のテスト戦略.md)  
[リンク](テストしやすい設計（責務分離・依存注入）.md)  

---

## ✅ カバレッジ計測

[リンク](カバレッジ計測と改善.md)  

---

## 🔹 課題①：Hello コンポーネントの表示テスト

### 📌 内容
- `Hello.tsx` で "Hello World" が表示されていることを確認

### ✅ 検証観点
- `render(<Hello />)` の描画が成功するか
- `screen.getByText("Hello World")` でテキストが取得できるか

---

## 🔹 課題②：MemoForm のフォームバリデーションテスト

### 📌 内容
- `MemoForm.tsx` にバリデーションが存在することを前提に、
  - 入力が空の場合にエラーが表示される
  - 入力後は正常に送信できる
  - `onSubmit` 関数が適切に呼ばれる

### ✅ 検証観点
- `type()` で入力操作を模倣
- `click()` でボタンを押す操作を実施
- `findByText()` でエラー表示 or 成功確認
- `jest.fn()` を使って送信関数をモック

---

## 🔹 課題③：useCreateMemo Hooks のテスト

### 📌 内容
- フォーム送信処理を内包する `useCreateMemo()` に対して
  - 正常時の成功処理が通るか
  - エラー時に `error` ステートが更新されるか

### ✅ 検証観点
- `renderHook(() => useCreateMemo())` で初期化
- `act(async () => await createMemo(...))` で非同期処理を実行
- fetch を `vi.fn()` / `jest.fn()` でモック
- 状態変化（`isSubmitting`, `error`）をアサート

---

## 🔹 課題④：カバレッジ計測 & 改善

### 📌 内容
- `pnpm test -- --coverage` でレポートを出力
- `coverage/lcov-report/index.html` を開き、カバレッジ不足を特定
- 赤・黄色の部分を中心に、テストケースを追加
- 目安：MemoForm のカバレッジを **80%以上** にする

---

## 📂 ディレクトリ構成例（参考）

```
components/
  └ Hello.tsx
  └ MemoForm.tsx
  └ __tests__/
      └ Hello.test.tsx
      └ MemoForm.test.tsx

hooks/
  └ useCreateMemo.ts
  └ __tests__/
      └ useCreateMemo.test.ts
```

<!-- 課題を提出する際、プルリクエストに以下を貼り付けてください

## 📊 評価チェックリスト（Week 18：テストコード）

※ 各観点ごとにチェック数を数え、下記ルールで点数化  
（チェック数 0個=0点 / 1個=1点 / 2個=3点 / 3個以上=5点）

---

### 🎯 成果物（アウトプットの完成度）

- [ ] UIコンポーネントに対するテストが記述されている
- [ ] カスタムHookに対するテストが記述されている
- [ ] テスト実行結果が全て `pass` になっている
- [ ] カバレッジレポートが生成できている（coverage表示）

---

### 📚 知識理解（仕組みや構成の理解）※やさしい版

- [ ] テストは「コードの品質を保証するための手段」として理解している
- [ ] テストコードには「期待する出力」を明示する必要があると理解している
- [ ] `describe` / `it` / `expect` の役割を説明できる
- [ ] UIの表示・イベント・状態変化などが「テストできる対象」であることを理解している

---

### 💬 説明力（なぜそのテストを書いたか）※やさしい版

- [ ] どこが重要だからテストしたか説明できる
- [ ] どの部分をどうテストしたかを言葉で説明できる
- [ ] UI・ロジック・Hookそれぞれでテストの狙いを説明できる
- [ ] なぜこのツール・方法でテストしたか簡単に話せる

---

### 🔧 自己修正（修正・改善の自走力）

- [ ] テストエラーを読み取り、自力で修正できている
- [ ] テストを通すためにコンポーネントやHookを見直した箇所がある
- [ ] 依存関係を切り離した設計やMock化の工夫をしている
- [ ] 不要な分岐・非テスト可能な部分をリファクタリングしている

---

📝 評価観点ごとのチェック数を数え、以下のように点数に換算してください：

| チェック数 | 点数 |
|------------|------|
| 0個        | 0点  |
| 1個        | 1点  |
| 2個        | 3点  |
| 3〜4個     | 5点  |

-->