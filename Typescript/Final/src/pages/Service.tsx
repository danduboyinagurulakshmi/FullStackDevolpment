import "./Service.css";

const Service: React.FC = () => {
  return (
    <section className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>We provide end-to-end digital solutions to help your business grow.</p>
      </header>

      <ul className="services-list">
        <li>
          <h2>Web Development</h2>
          <p>Building responsive, scalable, and secure web applications tailored to your needs.</p>
        </li>
        <li>
          <h2>Mobile App Development</h2>
          <p>Creating intuitive mobile experiences for iOS and Android platforms.</p>
        </li>
        <li>
          <h2>UI/UX Design</h2>
          <p>Designing user-friendly interfaces with a focus on aesthetics and usability.</p>
        </li>
      </ul>

      <div className="services-image">
        <img src="https://ksrmce.ac.in/data1/images/s14.jpg" alt="Our Services Overview" />
      </div>
    </section>
  );
};

export default Service;
