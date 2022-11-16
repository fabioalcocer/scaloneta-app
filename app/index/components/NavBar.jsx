import styles from './NavBar.module.css'
import Link from 'next/link'

function NavBar () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/players'>Players</Link>
          </li>
          <li>
            <Link href='/stats'>Stats</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
