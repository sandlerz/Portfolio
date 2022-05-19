import AboutCircle from '../Components/AboutCircle'
import AboutHeader from '../Components/AboutHeader'
import AboutMe from '../Components/AboutMe'
import AboutName from '../Components/AboutName'
import AboutStatistics from '../Components/AboutStatistics'

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
