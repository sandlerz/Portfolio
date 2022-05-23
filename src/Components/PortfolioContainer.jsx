import CountriesApp from '../images/Projects/Countries-page.png'
import Quizzical from '../images/Projects/Quzzical.png'
import TipCalculator from '../images/Projects/TipCalculator.png'
import ECommerce from '../images/Projects/E-Commerce.png'
import Tenzies from '../images/Projects/Tenzies.png'

const imgProjectsArray = [
  CountriesApp,
  Quizzical,
  TipCalculator,
  ECommerce,
  Tenzies,
]

export default function PortfolioContainer() {
  const emptyArray = imgProjectsArray.map((project, index) => (
    <div className="PortfolioContainer__item" key={index}>
      <div className="PortfolioContainer__item__img">
        <img src={project} alt="" />
      </div>
      <div className="PortfolioContainer__item__body">
        <span>Project 1</span>
      </div>
    </div>
  ))
  return <div className="PortfolioContainer">{emptyArray}</div>
}
