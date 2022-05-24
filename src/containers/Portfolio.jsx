import PortfolioContainer from '../components/PortfolioContainer'
import PortfolioHeader from '../components/PortfolioHeader'

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
