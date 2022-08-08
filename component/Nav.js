import Link from 'next/link'
import navStyles from "../styles/Home.module.css"

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
        <Link href='/Destinations'>Destinations</Link>
      </li>
      </ul>
    </nav>
  )
}

export default Nav