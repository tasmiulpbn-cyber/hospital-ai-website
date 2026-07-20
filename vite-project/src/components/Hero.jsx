import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">
            🤖 AI-Powered Smart Healthcare
          </span>

          <h1>
            The Future of
            <span> Healthcare Management</span>
          </h1>

          <p>
            Experience next-generation healthcare with AI-driven
            appointment booking, patient management, and 24/7 smart
            assistance designed for modern hospitals and clinics.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Book Appointment
            </button>

            <button className="secondary-btn">
              Talk to AI Assistant
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>5000+</h3>
              <p>Happy Patients</p>
            </div>

            <div>
              <h3>120+</h3>
              <p>Doctors</p>
            </div>

            <div>
              <h3>25+</h3>
              <p>Departments</p>
            </div>

            <div>
              <h3>99%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-card main-card">
            <h3>🩺 AI Health Assistant</h3>
            <p>24/7 Instant Patient Support</p>
          </div>

          <div className="hero-card floating-card top">
            ❤️ 1,245 Patients Monitored
          </div>

          <div className="hero-card floating-card bottom">
            📅 320 Appointments Today
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;