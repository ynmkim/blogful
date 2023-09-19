'use client'
import { signOut } from 'next-auth/react'

export default function ButtonLogOut() {
  return (
    <button type="button" className='button-login' onClick={() => { signOut() }}>로그아웃</button>
  )
}