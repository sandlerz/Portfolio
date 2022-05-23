import ContactForm from '../Components/ContactForm'
import ContactInfo from '../Components/ContactInfo'

export default function Contact() {
  return (
    <section className="Contact" id="contact">
      <header className="Contact__header">
        <h2>Contact</h2>
      </header>
      <div className="Contact__body">
        <ContactInfo />
        <div className="Contact__body__line"></div>
        <ContactForm />
      </div>
    </section>
  )
}
