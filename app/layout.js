import './globals.css'
import Link from 'next/link'
import ButtonLogin from "@/app/components/button/ButtonLogin";
import NavBar from "@/app/components/nav/NavBar";
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
        <header className='header'>
          <div className='inner'>
            <h1 className='logo'>
              <Link href="/">blogful</Link>
            </h1>
            <NavBar />
            <ButtonLogin />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
