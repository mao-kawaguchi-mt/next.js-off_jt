export const metadata ={
  title: "Respect"
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header style = {{padding: '1rem', background: '#CD853F'}}>
          <p>トップ・一覧</p>
        </header>

        <main>{children}</main>

        <footer style = {{ padding: '1px', background: '#FFE135'}}>
          <p>© 180 Banana and Frid udon</p>
        </footer>
      </body>
    </html>
  )
}