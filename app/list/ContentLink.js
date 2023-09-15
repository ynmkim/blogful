'use client'
import { useRouter } from 'next/navigation'

export default function ContentLink() {
  const router = useRouter()

  return (
    <button onClick={() => {router.push('/')}}>버튼</button>
  )
}