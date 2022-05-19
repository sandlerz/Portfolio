import SkillsContainer from '../Components/SkillsContainer'

export default function Skills() {
  return (
    <section className="Skills">
      <header className="Skills__header">
        <h2 className="Skills__header__text">Skills</h2>
      </header>
      <div className="Skills__container">
        <SkillsContainer img={[...Array(4).keys()]} />
        <SkillsContainer img={[...Array(4).keys()]} />
        <SkillsContainer img={[...Array(5).keys()]} />
      </div>
    </section>
  )
}
