import angleBracketIcon from '../images/angle-bracket.png'

export default function SkillsContainer({ img }) {
  const images = img.map((image, index) => (
    <div key={index} className="Skills__container__inner-container__body__item">
      {/* <img src={''} alt="" /> */}
    </div>
  ))
  return (
    <div className="Skills__container__inner-container">
      <div className="Skills__container__inner-container__img">
        <img src={angleBracketIcon} alt="" />
      </div>
      <div className="Skills__container__inner-container__body">{images}</div>
      <div className="Skills__container__inner-container__img">
        <img
          src={angleBracketIcon}
          alt=""
          style={{ transform: 'rotate(180deg)' }}
        />
      </div>
    </div>
  )
}
