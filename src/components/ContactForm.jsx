export default function ContactForm() {
  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message" />
      <button type="submit">Send Message</button>
    </form>
  )
}
