import ArrowIcon from '../images/right-arrow.png'
import { NavLink } from 'react-router-dom'

export default function header() {
  return (
    <header className="AboutHeader">
      <div className="AboutHeader__logo">Logo</div>
      <nav>
        <ul className="AboutHeader__nav-container">
          <li>
            <NavLink to="#">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="#">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="#">About</NavLink>
          </li>
          <li>
            <NavLink to="#">Social</NavLink>
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
