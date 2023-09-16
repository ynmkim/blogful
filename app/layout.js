import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'blogful',
  description: 'blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

function NavBar() {
  return (
    <header className='header'>
      <nav className="nav-list">
        <Link className="nav-item active" href="/">blogful</Link>
        <Link className="nav-item" href="/list">마이 블로그</Link>
        <Link className="nav-item" href="/write">글쓰기</Link>
      </nav>
    </header>
  )
}
