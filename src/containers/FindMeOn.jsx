import angleBracketIcon from '../images/angle-bracket.png'
import INSTAGRAM from '../images/Network/instagram.svg'
import LINKEDIN from '../images/Network/linkedin.svg'
import GITHUB from '../images/Network/github.svg'

export default function FindMeOn() {
  return (
    <footer className="FindMeOn" id="findMeOn">
      <header className="FindMeOn__header">
        <h2>Find me on</h2>
      </header>
      <div className="Skills__container__inner-container">
        <div className="Skills__container__inner-container__img">
          <img src={angleBracketIcon} alt="" />
        </div>
        <div className="Skills__container__inner-container__body">
          <a
            href={'https://www.instagram.com/sandlerzmusic/'}
            target="_blank"
            rel="noreferrer"
          >
            <div className="Skills__container__inner-container__body__item">
              <img src={INSTAGRAM} alt="" />
              <span className="Skills__container__inner-container__body__item__name">
                Instagram
              </span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-mesa-3a4b07232/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Skills__container__inner-container__body__item">
              <img src={LINKEDIN} alt="" />
              <span className="Skills__container__inner-container__body__item__name">
                Linkedin
              </span>
            </div>
          </a>
          <a
            href="https://github.com/sandlerz"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Skills__container__inner-container__body__item">
              <img src={GITHUB} alt="" />
              <span className="Skills__container__inner-container__body__item__name">
                Github
              </span>
            </div>
          </a>
        </div>
        <div className="Skills__container__inner-container__img">
          <img
            src={angleBracketIcon}
            alt=""
            style={{ transform: 'rotate(180deg)' }}
          />
        </div>
      </div>
      <div className="FindMeOn__footer">
        <span className="FindMeOn__footer__text">
          Copyright 2022 |{' '}
          <span className="FindMeOn__footer__text__bold">Sebastian Mesa</span>
        </span>
        <span className="FindMeOn__footer__text">All rights reserved!</span>
      </div>
    </footer>
  )
}
