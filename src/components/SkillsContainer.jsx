import angleBracketIcon from '../images/angle-bracket.png'

export default function SkillsContainer({ imgArray }) {
  const images = imgArray.map(skill => (
    <div
      key={skill[1]}
      className="Skills__container__inner-container__body__item"
    >
      <img src={skill[0]} alt="" />
      <span className="Skills__container__inner-container__body__item__name">
        {skill[1]}
      </span>
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
