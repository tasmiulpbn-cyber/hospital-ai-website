import ServiceCard from "./ServiceCard";
const services = [
  {
    icon: "🩺",
    title: "General Medicine",
    description: "Comprehensive healthcare for all ages.",
  },
  {
    icon: "❤️",
    title: "Cardiology",
    description: "Heart specialist consultation and treatment.",
  },
  {
    icon: "🧠",
    title: "Neurology",
    description: "Advanced brain and nervous system care.",
  },
];
function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-container">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;