'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
  const menuData = [
    { id: 'menu01', name: '마이 블로그', path: '/list' },
    { id: 'menu02', name: '글 작성', path: '/write' },
  ]
  const pathname = usePathname()

  return (
    <nav className="nav-list">
      {
        menuData.map((menu, i) => {
          return (
            <Link className="nav-item" href={menu.path} style={{ color: pathname === menu.path ? '#fdcb6e' : 'black', fontWeight: pathname === menu.path ? 'bold' : 'normal',}} key="{i}">{menu.name}</Link>
          )
        })
      }
    </nav>
  )
}

