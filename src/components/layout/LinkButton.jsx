import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'
function LinkButton({text,to}){
    return(
        <Link className={styles.btn} to ={to}>{text}</Link>
    )
}
export default LinkButton