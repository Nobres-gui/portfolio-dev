import { NavBar } from './components/NavBar/navbar'
import { Banner } from './components/Banner/banner'
import {SobreMim} from './components/Sobre Mim/sobreMim'
import { Projetos } from './components/Projetos/projetos'
import './App.css'


function App() {
  return (
    <div className='body_page'>
      <NavBar className='body__page-navBar'/>
      <Banner />
      <SobreMim />
      <Projetos />
    </div>
  )
}

export default App
