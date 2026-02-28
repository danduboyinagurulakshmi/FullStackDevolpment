import "./Contact.css"
import { useState } from 'react'

interface ContactForm {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert('All fields are required')
      return
    }

    alert('Form Submitted Successfully!')
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <img src="https://via.placeholder.com/300" alt="Contact" />
    </div>
  )
}

export default Contact
