import {Link, Outlet} from "react-router-dom"
import styles from "./Layout.module.css"

function Layout() {
  return (
    <>
    <nav>
      <ul className={styles.list}>
        <li ><Link to="/" className={styles.item}> HomePage</Link></li>
        <li><Link to="completed" className={styles.item}> Completed</Link></li>
      </ul>
    </nav>
    <Outlet/>
  </>
  )
}

export default Layout