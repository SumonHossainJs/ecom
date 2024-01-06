import Link from 'next/link'
import React from 'react'

const HeaderQuickLink = () => {
  return (
    <div className='header-top-link'>
      <ul className="quick-link">
        <li>
          <Link href="/sign-up">Join us</Link>
        </li>
        <li>
          <Link href="/sign-in">Sign in</Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderQuickLink