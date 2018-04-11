import React from 'react'
import Link from 'gatsby-link'

import styles from '../styles/Header.module.scss'

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
      color: '#fff',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <ul className={styles.nav}>
        <li>
          <Link to="/lists">Lists</Link>
        </li>
        <li>Login</li>
      </ul>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          WeEat
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
