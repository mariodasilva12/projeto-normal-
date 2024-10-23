import savings from '../../img/savings.svg'
import styles from  './Home.module.css'
import LinkButton from '../layout/LinkButton'
function Home(){
  return(
   
      <section className={styles.home_container}>

          <h1>Bem-vindo ao <span>Cost</span></h1>
          <p>Comece a gerenciar os seus projectos agora mesmo!</p>
          <LinkButton text='Criar Projecto' to='/newproject' />
          <img src={savings} alt="cost" />

      </section>
  )  
}

export default Home