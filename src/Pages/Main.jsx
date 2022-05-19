import About from '../Containers/About'
import Contact from '../Containers/Contact'
import FindMeOn from '../Containers/FindMeOn'
import Portfolio from '../Containers/Portfolio'
import Skills from '../Containers/Skills'

export default function Main() {
  return (
    <main className="MainPage">
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <FindMeOn />
    </main>
  )
}
