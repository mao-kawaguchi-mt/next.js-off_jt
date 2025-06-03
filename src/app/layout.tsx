import './globals.css';
import { UserProvider } from "@/context/UserContext";
import { Header } from "@/components/Header";

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <UserProvider>
          <Header />

          <main>{children}</main>

          <footer className="p-[1px] bg-[#FFE135]">
            <p>© 180 Banana and Frid udon</p>
          </footer>
        </UserProvider>
      </body>
    </html>
  )
}