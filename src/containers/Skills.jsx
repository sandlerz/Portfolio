import SkillsContainer from '../Components/SkillsContainer'
import HTML5 from '../images/Skills/html-5.svg'
import CSS3 from '../images/Skills/css3.svg'
import JAVASCRIPT from '../images/Skills/javascript.svg'
import REACT from '../images/Skills/react.svg'
import REDUX from '../images/Skills/redux.svg'
import SASS from '../images/Skills/sass.svg'
import BOOTSTRAP from '../images/Skills/bootstrap.svg'
import WEBPACK from '../images/Skills/webpack.svg'
import GIT from '../images/Skills/git.svg'
import GITHUB from '../images/Skills/github.svg'
import VSCODE from '../images/Skills/vscode.svg'
import BASH from '../images/Skills/bash.svg'
import FIGMA from '../images/Skills/figma.svg'

const arraySkillPrimary = [
  [HTML5, 'HTML5'],
  [CSS3, 'CSS3'],
  [JAVASCRIPT, 'JavaScript'],
  [REACT, 'React'],
]

const arraySkillSecondary = [
  [REDUX, 'Redux'],
  [SASS, 'SASS'],
  [BOOTSTRAP, 'BootsTrap'],
  [WEBPACK, 'Webpack'],
]

const arraySkillThird = [
  [GIT, 'Git'],
  [GITHUB, 'GitHub'],
  [VSCODE, 'Visual Studio Code'],
  [BASH, 'Bash'],
  [FIGMA, 'Figma'],
]

export default function Skills() {
  return (
    <section className="Skills">
      <header className="Skills__header">
        <h2 className="Skills__header__text">Skills</h2>
      </header>
      <div className="Skills__container">
        <SkillsContainer imgArray={arraySkillPrimary} />
        <SkillsContainer imgArray={arraySkillSecondary} />
        <SkillsContainer imgArray={arraySkillThird} />
      </div>
    </section>
  )
}
