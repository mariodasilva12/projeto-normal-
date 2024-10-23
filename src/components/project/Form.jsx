import styles from './Form.module.css'
import Input from '../Forms/Input'
import Select from '../Forms/Select'
import Submit from '../Forms/Submit'
import {useState,useEffect} from 'react'

function Form({text, handleSubmit, projectData}){

    const [categories,setCategories] = useState([])
    const [projects,setProjects] = useState(projectData || {})

    function handleChange(e){

        setProjects({...projects, [e.target.name] : e.target.value})
    }

    function handleCategory(e){
        setProjects({...projects,category:{
            id: e.target.value,
            name : e.target.options[e.target.selectedIndex].text,
        },
    })
    }

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(projects)
    }

    useEffect(() =>{
        fetch('http://localhost:5500/category',{
        method:'GET',
        headers:{
            'content-type':'application-json'
        }
    })

    .then((response) =>response.json())
    .then((data) => setCategories(data))
    .catch((err) =>console.log(err))
    },[])
    
    return(

        <form className={styles.form} onSubmit={submit}>

                <Input 
                placeholder='Insira o nome do projecto'
                text='Nome do Projecto'
                name='name'
                type='text'
                value={projects.name ? projects.name : ''}
                handleOnChange={handleChange}
                />

                <Input 
                placeholder='Insira o orçamento total'
                text='Orçamento do Projecto'
                type='number'
                name='budget'
                value={projects.budget ? projects.budget :''}
                handleOnChange={handleChange}
                />

                <Select 
                text='Selecione a categoria'
                name='category_id'
                options={categories}
               handleOnchange = {handleCategory}
                value={projects.category ? projects.category.id : ''}

                />

                <Submit text={text}/>
        </form>
    )
}
export default Form