import { Link } from "react-router-dom"
import logo from '../../img/costs_logo.png'
import styles from './navbar.module.css'
import Container from "./Container"

function NavBar(){
    return(

       <nav className={styles.navbar}>

        <Container>
            <Link to='/'>
                <img src={logo} alt="costs" />
            </Link>
            <ul className={styles.list}>
                <li className = {styles.item}><Link to='/'>Home</Link></li>
                <li className = {styles.item}><Link to='/projects'>Projectos</Link></li>
                <li className = {styles.item}><Link to='/empresa'>Empresa</Link></li>
                <li className = {styles.item}><Link to='/contacto'>Contacto</Link></li>
            </ul>
        </Container>

       </nav>
    )
}
export default NavBar