'use client'
import ButtonLogOut from "../button/ButtonLogOut";
import { useState } from 'react'

export default function MyMenu() {
  // const state = useState()
  return (
    <div className="my-menu">
      {/* <div className='my-menu-button'></div> */}
      <div className="my-menu-content">
        <ul className="my-menu-list">
          <li className="my-menu-item">
            <ButtonLogOut />
        </li>
      </ul>
      </div>
    </div>
  )
}