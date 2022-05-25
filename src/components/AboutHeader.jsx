import ArrowIcon from '../images/right-arrow.png'

export default function header() {
  return (
    <header className="AboutHeader">
      <div className="AboutHeader__logo">Logo</div>
      <nav>
        <ul className="AboutHeader__nav-container">
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#findMeOn">Social</a>
          </li>
        </ul>
      </nav>
      <div className="AboutHeader__talk">
        <a
          href="/cv/Formal Resume Format.pdf"
          className="AboutHeader__talk__text"
          download="Sebastian Mesa Cv"
        >
          Download CV
        </a>
        <div className="AboutHeader__talk__img">
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
    </header>
  )
}
