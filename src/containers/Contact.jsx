import ContactForm from '../Components/ContactForm'

export default function Contact() {
  return (
    <section className="Contact" id="contact">
      <header className="Contact__header">
        <h2 id="contact">Contact</h2>
      </header>
      <div className="Contact__body">
        <ContactForm />
      </div>
    </section>
  )
}
