import CountriesApp from '../images/Projects/Countries-page.png'
import Quizzical from '../images/Projects/Quzzical.png'
import TipCalculator from '../images/Projects/TipCalculator.png'
import ECommerce from '../images/Projects/E-Commerce.png'
import Tenzies from '../images/Projects/Tenzies.png'
import Reddit from '../images/Projects/Reddit-lite.png'

const imgProjectsArray = [
  {
    name: 'Reddit Lite',
    img: Reddit,
    code: 'https://github.com/sandlerz/Reddit-Lite',
    site: 'https://reddit-lite-app.netlify.app/',
  },
  {
    name: 'Countries Info',
    img: CountriesApp,
    code: 'https://github.com/sandlerz/Countries-Api',
    site: 'https://sandlerz.github.io/Countries-Api/',
  },
  {
    name: 'Quizzical',
    img: Quizzical,
    code: 'https://github.com/sandlerz/Quizzical-Trivial',
    site: 'https://sandlerz.github.io/Quizzical-Trivial/',
  },
  {
    name: 'Tip Calculator',
    img: TipCalculator,
    code: 'https://github.com/sandlerz/Tip-calculator-app-main',
    site: 'https://sandlerz.github.io/Tip-calculator-app-main/',
  },
  {
    name: 'E-Commerce',
    img: ECommerce,
    code: 'https://github.com/sandlerz/E-commerce-product',
    site: 'https://sandlerz.github.io/E-commerce-product/',
  },
  {
    name: 'Tenzies Game',
    img: Tenzies,
    code: 'https://github.com/sandlerz/Tenzies-game-react',
    site: 'https://sandlerz.github.io/Tenzies-game-react/',
  },
]

export default function PortfolioContainer() {
  const emptyArray = imgProjectsArray.map((project, index) => (
    <div className="PortfolioContainer__item" key={index}>
      <div className="PortfolioContainer__item__img">
        <a href={project.site} target="_blank" rel="noreferrer">
          <img src={project.img} alt="" />
        </a>
      </div>
      <div className="PortfolioContainer__item__body">
        <span className="PortfolioContainer__item__body__title">
          {project.name}
        </span>
        <a
          className="PortfolioContainer__item__body__code"
          href={project.code}
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
        <a
          className="PortfolioContainer__item__body__site"
          href={project.site}
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
      </div>
    </div>
  ))
  return <div className="PortfolioContainer">{emptyArray}</div>
}
