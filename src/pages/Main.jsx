import About from '../containers/About'
import Contact from '../containers/Contact'
import FindMeOn from '../containers/FindMeOn'
import Portfolio from '../containers/Portfolio'
import Skills from '../containers/Skills'
import BgWaves from '../images/Bg/waves.svg'

export default function Main() {
  return (
    <main className="MainPage">
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <FindMeOn />
      <div className="bg__waves">
        <img src={BgWaves} alt="" />
      </div>
    </main>
  )
}
