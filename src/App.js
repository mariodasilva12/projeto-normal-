import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contacto from './components/pages/contacto';
import Empresa from './components/pages/empresa';
import Home from './components/pages/home';
import NewProject from './components/pages/newProject';
import NavBar from './components/layout/navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Project from './components/pages/project';

function App() {
 
  return (
     
        <Router>

         <NavBar />

        <Container customClass='min_height'>

            <Routes>

                <Route exact path='/' element={<Home />}></Route>
                <Route path='/empresa' element={<Empresa />}></Route>
                <Route path='/newproject' element={<NewProject/>}></Route>
                <Route path='/contacto' element={<Contacto />}></Route>
                <Route path='/projects' element={<Project />}></Route>
                


            </Routes>

          </Container>

          <Footer />

        </Router>       
      
  )
}

export default App;
