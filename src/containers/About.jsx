import AboutCircle from '../components/AboutCircle'
import AboutHeader from '../components/AboutHeader'
import AboutMe from '../components/AboutMe'
import AboutName from '../components/AboutName'
import AboutStatistics from '../components/AboutStatistics'

export default function About() {
  return (
    <section className="about">
      <AboutHeader />
      <AboutName />
      <AboutMe />
      <AboutStatistics />
      <AboutCircle />
    </section>
  )
}
