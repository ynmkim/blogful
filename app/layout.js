import './globals.css'
import Link from 'next/link'
import ButtonLogIn from './components/button/ButtonLogIn';
import ButtonLogOut from './components/button/ButtonLogOut';
import NavBar from "./components/nav/NavBar";
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
            { 
              session 
                ? <div className='my-menu-button'>
                    <div className='avatar'><img src="/image_user_default.png" /></div>
                    <ButtonLogOut />
                  </div>
                : <ButtonLogIn />
            }
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
