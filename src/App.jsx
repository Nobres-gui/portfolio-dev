import { NavBar } from './components/NavBar/navbar'
import { Banner } from './components/Banner/banner'
import {SobreMim} from './components/Sobre Mim/sobreMim'
import { Projetos } from './components/Projetos/projetos'
import { Habilidades } from './components/Habilidades/habilidades'
import { Contato } from './components/Contato/contato'
import { Footer } from './components/Footer/footer'
import './App.css'


function App() {
  return (
    <div className='body_page'>
      <NavBar className='body__page-navBar'/>
      <Banner />
      <SobreMim />
      <Projetos />
      <Habilidades />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
