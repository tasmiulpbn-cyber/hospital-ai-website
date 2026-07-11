import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Navbar />

      <Header
        title="🏥 AI Hospital Management System"
        subtitle="24/7 Smart Healthcare"
        phone="01406784596"
        email="hospital@example.com"
      />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Contact />
      <p>Welcome to our AI-powered Hospital.</p>
      <Footer />
    </div>
  );
}

export default App;
