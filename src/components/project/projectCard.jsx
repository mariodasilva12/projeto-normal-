import styles from './projectCard.module.css'
import { Link } from "react-router-dom"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

function ProjectCard({id,name,category,handleRemove,budget}){

    const submit = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }

    return(

        
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>

            <div className={styles.project_card_actions}>
                <Link to='/'>
                    <BsPencil /> Editar
                </Link>

                <button onClick={submit}><BsFillTrashFill /> Deletar</button>
            </div>
        </div>
    )
}

export default ProjectCard