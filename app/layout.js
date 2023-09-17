import './globals.css'
import Header from "@/app/header/Header";
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const metadata = {
  title: 'blogful',
  description: 'blog app',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
 
  return (
    <html lang="ko">
      <body>
        <Header / >
        {children}
      </body>
    </html>
  )
}
