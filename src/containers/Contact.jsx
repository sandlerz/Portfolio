import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'

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
