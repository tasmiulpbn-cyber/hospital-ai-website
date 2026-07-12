import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();

  alert("Appointment Submitted Successfully!");

  console.log({
    name,
    phone,
    email,
    message,
  });
  setName("");
setPhone("");
setEmail("");
setMessage("");
};

  return (
    <section className="contact">
      <h2>Book an Appointment</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

       <input
  type="tel"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>

       <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

      <textarea
  placeholder="Write your message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
></textarea>

        <button type="submit">Submit Appointment</button>
      </form>
      <p>Your Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </section>
  );
}

export default Contact;