'use client'
import { signIn } from 'next-auth/react'

export default function ButtonLogIn() {
  return (
    <button type="button" className='button-login' onClick={() => { signIn() }}>로그인</button>
  )
}