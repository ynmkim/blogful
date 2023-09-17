import './globals.css'
import Header from "@/app/header/Header";

export const metadata = {
  title: 'blogful',
  description: 'blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header / >
        {children}
      </body>
    </html>
  )
}
