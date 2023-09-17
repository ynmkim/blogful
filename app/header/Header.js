'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function Header() {
  const menuData = [
    { id: 'menu01', name: '마이 블로그', path: '/list' },
    { id: 'menu02', name: '글쓰기', path: '/write' },
  ]
  const router = useRouter()
  console.log(router.pathname)

  return (
    <header className='header'>
      <div className='inner'>
        <h1 className='logo'>
          <Link href="/">blogful</Link>
        </h1>
        <nav className="nav-list">
          {
            menuData.map((menu) => {
              return (
                <Link className="nav-item" href={menu.path} style={{color: router.pathname === menu.path ? '#fd79a8' : 'black'}}>{menu.name}</Link> // ? 왜 안될까
              )
            })
          }
          </nav>
      </div>
    </header>
  )
}

