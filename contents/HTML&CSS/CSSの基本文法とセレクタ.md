## ✅ CSSの基本文法とセレクタ

CSS（Cascading Style Sheets）は、**HTMLの要素に見た目を与えるための言語**です。  
文字の色やサイズ、余白、レイアウトなど、視覚的なスタイルを定義できます。

---

### 🔤 CSSの書き方（基本構文）

```css
セレクタ {
  プロパティ: 値;
}
```

例：

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

- `セレクタ`：どの要素に対してスタイルを適用するかを指定
- `プロパティ`：変更したいスタイルの種類（色、サイズなど）
- `値`：設定する具体的な内容（例：`blue`, `16px`, `center` など）

---

### 🧩 CSSの適用方法（3種類）

| 方法 | 特徴 | 用途 |
|------|------|------|
| インラインスタイル | 要素の中に `style=""` を直接書く | 小規模な装飾に使う |
| `<style>` タグ | HTMLファイル内の `<head>` に書く | テストや一時的なスタイル |
| 外部CSS | `.css` ファイルとして切り出し、`<link>` で読み込む | 本番開発での基本形 |

---

### 🔍 セレクタの種類と使い方

| セレクタ | 説明 | 例 |
|----------|------|----|
| タグセレクタ | 特定のタグすべてに適用 | `p {}`、`h1 {}` |
| クラスセレクタ | `class` 属性を持つ要素に適用（複数指定OK） | `.box {}` |
| IDセレクタ | `id` 属性を持つ1つの要素に適用（ユニーク） | `#header {}` |
| グループセレクタ | 複数のセレクタをまとめて指定 | `h1, p, ul {}` |
| 子孫セレクタ | 要素の中にある別の要素にスタイルを適用 | `.card p {}` など |

---

### ✨ よく使うCSSプロパティ（入門編）

| プロパティ | 説明 | 例 |
|------------|------|----|
| `color` | 文字色を指定 | `color: red;` |
| `background-color` | 背景色を指定 | `background-color: yellow;` |
| `font-size` | 文字サイズ | `font-size: 16px;` |
| `padding` | 内側の余白 | `padding: 8px;` |
| `margin` | 外側の余白 | `margin: 10px;` |
| `width` / `height` | 要素の幅・高さ | `width: 100px;` |
| `border` | 枠線のスタイル | `border: 1px solid #ccc;` |

---

### 💡 CSSのルールと補足

- 同じ要素に複数のスタイルが当たる場合、**優先順位（Specificity）と後勝ち（カスケード）**に注意
- クラスセレクタ（`.`）は複数の要素に使えるが、IDセレクタ（`#`）はページ内で一意に
- CSSは「読みやすさ」も大切 → インデントや改行を整える

---

### 🛠️ 簡単なCSSの例

```html
<style>
  .profile {
    background-color: #f2f2f2;
    padding: 16px;
    width: 300px;
  }

  .profile h2 {
    color: #333;
    font-size: 20px;
  }
</style>

<div class="profile">
  <h2>名前：山田太郎</h2>
  <p>職業：エンジニア</p>
</div>
```

---

## ✅ CSSの優先順位とカスケード

CSSでは、**複数のスタイルが同じ要素に適用されることがある**ため、どのスタイルが最終的に使われるかを判断するルールが必要です。  
それが「**優先順位（Specificity）**」と「**カスケード（Cascade）**」です。

---

### 🧠 カスケードとは？

「カスケード（Cascade）」とは、“滝のように流れる”という意味。  
複数のスタイルが同じ要素に適用されたときに、**どれを優先して使うかを決める仕組み**です。

基本ルールは以下の通り：

1. **スタイルの種類ごとに優先度がある**
2. **セレクタの「強さ（Specificity）」によって決まる**
3. **同じ強さなら「後から書いた方」が勝つ**

---

### 🥇 スタイルの優先順位（セレクタの強さ）

セレクタの「強さ」は、次のように評価されます：

| セレクタの種類 | 例 | スコア（簡易） |
|----------------|-----|----------------|
| インラインスタイル | `<div style="color:red">` | 1000 |
| IDセレクタ | `#header` | 100 |
| クラス・属性・疑似クラス | `.box`, `[type="text"]`, `:hover` | 10 |
| タグ（要素）セレクタ | `h1`, `p` | 1 |
| *（ワイルドカード） | `*` | 0 |

👉 数字が大きいものほど強い。複合セレクタは加算される。

例：

```css
/* スコア 11 （クラス10 + 要素1）*/
p.title {
  color: red;
}

/* スコア 100 （ID）*/
#title {
  color: blue;
}
```

この場合、`#title` が勝つ。

---

### 🔁 後勝ちのルール（カスケード）

- 同じセレクタの強さなら、**後から書かれたCSSが適用される**
- 外部CSS → `<style>` タグ → インライン の順に優先される（通常）

```css
/* 先に定義されたスタイル */
p {
  color: red;
}

/* 後に定義されたスタイルが上書きされる */
p {
  color: blue;
}
```

---

### 💥 !important の使い方（注意）

```css
p {
  color: red !important;
}
```

- `!important` を使うと、通常の優先順位を無視して**最優先**になる
- 多用するとスタイルが複雑化し、保守性が下がるため**基本は避ける**

---

### 🛠️ よくあるつまずきポイント

- 「書いたはずなのに反映されない」 → セレクタが弱い or 後から上書きされている
- 「クラスで当たらない」 → 同じ要素にIDやインラインが使われている
- 「!important使わないと効かない」 → 設計を見直すタイミングかも

---

### 🧪 開発者ツールで確認しよう

- ChromeのDevToolsでは、適用されたCSSと**打ち消されたCSS**（取り消し線付き）を確認できる
- どのセレクタが勝っているか視覚的に確認できる

---

### 🔚 まとめ

- セレクタの強さ：インライン > ID > クラス > タグ
- 後に書かれたものが優先（カスケード）
- `!important` は最終手段。使いすぎ注意！