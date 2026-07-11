function Contact() {
  return (
    <section className="contact">
      <h2>Book an Appointment</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />

        <input type="tel" placeholder="Phone Number" />

        <input type="email" placeholder="Email Address" />

        <textarea placeholder="Write your message"></textarea>

        <button type="submit">Submit Appointment</button>
      </form>
    </section>
  );
}

export default Contact;