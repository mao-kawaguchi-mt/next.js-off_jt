import './globals.css';

export const metadata ={
  title: "Respect"
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="p-[1rem] bg-[#CD853F]">
          <p>トップ・一覧</p>
        </header>

        <main>{children}</main>

        <footer className="p-[1px] bg-[#FFE135]">
          <p>© 180 Banana and Frid udon</p>
        </footer>
      </body>
    </html>
  )
}