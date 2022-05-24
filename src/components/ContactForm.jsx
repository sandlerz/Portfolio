export default function ContactForm() {
  const handleSubmit = event => {
    // event.preventDefault()
  }
  return (
    <form
      className="ContactForm"
      onSubmit={handleSubmit}
      name="contact-form"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Email" name="email" />
      <textarea placeholder="Message" name="massage" />
      <button type="submit">Send Message</button>
    </form>
  )
}
