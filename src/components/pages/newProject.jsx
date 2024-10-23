import styles from './newproject.module.css'
import { useNavigate } from 'react-router-dom'
import Form from '../project/Form'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){

        project.cost = 0
        project.services = []

        fetch('http://localhost:5500/projects',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(project)
        })
        .then((response) => response.json())
        .then((data) => {
           navigate('/projects',{state: {message:'Projecto criado com sucesso !'}}) 
        }
    )
        .catch((err) => console.log(err))
    }


    return(
        <div className={styles.newproject_container}>

             <h1>Criar Projeto</h1>
            <p>Crie seu projecto para depois adicionar os serviços</p>
            <Form text='Criar Projecto' handleSubmit={createPost} />
           
        </div>
       
    )
}
export default NewProject