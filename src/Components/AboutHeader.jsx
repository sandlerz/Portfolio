import ArrowIcon from '../images/right-arrow.png'

export default function header() {
  return (
    <header className="AboutHeader">
      <div className="AboutHeader__logo">Logo</div>
      <nav>
        <ul className="AboutHeader__nav-container">
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Social</a>
          </li>
        </ul>
      </nav>
      <div className="AboutHeader__talk">
        <span className="AboutHeader__talk__text">Let's Talk</span>
        <div className="AboutHeader__talk__img">
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
    </header>
  )
}
