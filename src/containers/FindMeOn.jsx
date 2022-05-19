import angleBracketIcon from '../images/angle-bracket.png'

export default function FindMeOn() {
  return (
    <footer className="FindMeOn">
      <header className="FindMeOn__header">
        <h2>Find me on</h2>
      </header>
      <div className="Skills__container__inner-container">
        <div className="Skills__container__inner-container__img">
          <img src={angleBracketIcon} alt="" />
        </div>
        <div className="Skills__container__inner-container__body">
          <div className="Skills__container__inner-container__body__item"></div>
          <div className="Skills__container__inner-container__body__item"></div>
          <div className="Skills__container__inner-container__body__item"></div>
          <div className="Skills__container__inner-container__body__item"></div>
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
