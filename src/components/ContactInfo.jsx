import Phone from '../images/Network/phone.png'
import Email from '../images/Network/email.png'
import Location from '../images/Network/location.png'

export default function ContactInfo() {
  return (
    <div className="ContactInfo">
      <div className="ContactInfo__container">
        <div className="ContactInfo__container__img">
          <img src={Phone} alt="" />
        </div>
        <span className="ContactInfo__container__info">+57 3105973013</span>
      </div>
      <div className="ContactInfo__container">
        <div className="ContactInfo__container__img">
          <img src={Email} alt="" />
        </div>
        <span className="ContactInfo__container__info">
          sandlerzop@gmail.com
        </span>
      </div>
      <div className="ContactInfo__container">
        <div className="ContactInfo__container__img">
          <img src={Location} alt="" />
        </div>
        <span className="ContactInfo__container__info">Colombia, Medellin</span>
      </div>
    </div>
  )
}
