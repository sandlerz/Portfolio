import PortfolioContainer from '../Components/PortfolioContainer'
import PortfolioHeader from '../Components/PortfolioHeader'

export default function Portfolio() {
  return (
    <section className="Portfolio" id="portfolio">
      <div className="Portfolio__container">
        <PortfolioHeader />
        <PortfolioContainer />
      </div>
    </section>
  )
}
