import styles from './project.module.css'
import LinkButton from "../layout/LinkButton"
import Container from "../layout/Container"
import Message from './Message'
import { useLocation } from 'react-router-dom'
import ProjectCard from '../project/projectCard'
import {useState, useEffect} from 'react'

function Project(){
    
    const location = useLocation()

    const [projects, setProjects] = useState([])
    const [removeMessage, setRemoveMessage] = useState('')

    useEffect(() => {

        fetch('http://localhost:5500/projects', {

            method:'GET',
            headers:{
                'content-type' : 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) =>{
            setProjects(data)
            console.log(data)
        })
        .catch((err) => console.log(err))
        
    },[])

    const removeProject = (id) =>{
        fetch(`http://localhost:5500/projects/${id}`,{
            method:'DELETE',
            headers : {
                'content-type' : 'application/json'
            }
        })

        .then((reponse) => reponse.json())
            .then(() =>{
                setProjects(projects.filter((project) => project.id !== id))
                setRemoveMessage('Projecto deletado com sucesso !')
            })
            .catch((err) => console.log(err))
    } 

    let message = ''

    if(location.state){
        message = location.state.message
    }

    return(
       <div className={styles.project}>

         <div className={styles.project_title}>      
            <h1>Meus Projectos</h1>
            <LinkButton text='Criar Projecto' to='/newproject'/>
        </div>

        {message && <Message  msg={message} type='sucess'/>}
        {removeMessage && <Message  msg={removeMessage} type='sucess'/>}

        <Container customClass='start'>
            {projects.length >0 && (projects.map((project) => (
                <ProjectCard 
                    key={project.id}
                    name={project.name}
                    id={project.id}
                    budget={project.budget}
                    category={project.category.name}
                    handleRemove={removeProject}
                />
            )))}
        </Container>
        
       </div>
    )
}

export default Project