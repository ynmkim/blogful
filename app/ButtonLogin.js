'use client'
import { signIn } from 'next-auth/react'

export default function ButtonLogin() {
  
  return (
    <button type="button" className='button-login' onClick={() => { signIn() }}>로그인</button>
    // <button type="button" className='button-login' onClick={() => { signOut() }}>로그아웃</button>
  )
}