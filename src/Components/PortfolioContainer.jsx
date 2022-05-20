export default function PortfolioContainer() {
  const emptyArray = [...Array(6).keys()].map(project => (
    <div className="PortfolioContainer__item" key={project}>
      <div className="PortfolioContainer__item__img">
        <img src="" alt="" />
      </div>
      <div className="PortfolioContainer__item__body">
        <span>Project 1</span>
      </div>
    </div>
  ))
  return <div className="PortfolioContainer">{emptyArray}</div>
}
