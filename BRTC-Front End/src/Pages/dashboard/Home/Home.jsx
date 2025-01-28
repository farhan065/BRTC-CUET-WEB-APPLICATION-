import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const activities = [
    {
      id: 1,
      title: "TOPIC NAME",
      description: "Activity Short Description",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Structural Integrity",
      description:
        "Seminar conducted on “Structural Integrity of Floating Constructions” on May 15 in the premise of CUET.",
        image: "/assets/images/sinteg.jpg",
    },
    {
      id: 3,
      title: "Environmental Research",
      description:
        "Seminar conducted on “Environmental Research & Implementation” on March 12 in the premise of CUET.",
        image: "/assets/images/er.jpg",
      
    },
    {
      id: 4,
      title: "Research & Development",
      description:
        "Seminar conducted on “Environmental Research & Implementation” on March 12 at CUET premises.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=600&q=80",
    },
  ];
  const sections = [
    {
      title: "SEMINAR",
      subtitle: "Seminar Short Description",
      description:
        "Sample text paragraph Sample text paragraph Sample text paragraph Sample text paragraph Sample text paragraph Sample text paragraph Sample text paragraph.",
    },
    {
      title: "COURSE",
      subtitle: "Course Short Description",
      description:
        "Course description Course description Course description Course description Course description Course description Course description.",
    },
    {
      title: "WORKSHOP",
      subtitle: "Workshop Short Description",
      description:
        "Workshop description Workshop description Workshop description Workshop description Workshop description Workshop description.",
    },
    {
      title: "RESEARCH",
      subtitle: "Research Short Description",
      description:
        "Research description Research description Research description Research description Research description Research description.",
    },
  ];
  
  
  return (
    <>
   

    <div className="heading">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <Link to="/services" className='services'>Services</Link>
        
        <li><a href="#researches">Researches</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div className="background-image">
        <div className="content">
          
          <p1>Chittagong University of Engineering & Technology</p1>
          <h1>BUREAU OF RESEARCH,TESTING & CONSULTATION</h1>
        </div>
      </div>
      <div className="subhead">
  <div className="subsection">
    <img src="/assets/images/department.png" alt="Logo" className="image" />
    <p>Departments</p>
  </div>
  <div className="subsection">
    <img src="/assets/images/institutes.png" alt="Logo" className="image" />
    <p>Institutes</p>
  </div>
  <div className="subsection">
    <img src="/assets/images/personnel.png" alt="Logo" className="image" />
    <p>Personnel</p>
  </div>
  <div className="subsection">
    <img src="/assets/images/research.png" alt="Logo" className="image" />
    <p>Researches</p>
  </div>
  <div className="subsection">
    <img src="/assets/images/event.png" alt="Logo" className="image" />
    <p>Events</p>
  </div>
</div>

<div>
      {/* Recent Activities Header */}
      <div className="section-header">Recent Activities</div>

      {/* Activities Section */}
      <div className="activities">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="card"
            style={{ backgroundImage: `url(${activity.image})` }}
          >
            <div className="card-overlay">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* News Section */}
      <div className="section-header news-header">News & Notices</div>
      <div className="gorgeous-section">
        {sections.map((section, index) => (
          <div key={index} className="gorgeous-card">
            <div className="gorgeous-content">
              <h3>{section.title}</h3>
              <h4>{section.subtitle}</h4>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer-container">
      {/* Left Section */}
      <div className="footer-section about-section">
        <img
          src="/assets/images/logo.png"
          alt="CUET Logo"
          className="footer-logo"
        />
        <h3>CUET</h3>
        <p>
          To be a premier Technical University locally and globally for providing
          Education, performing Research, and Innovation work in Engineering and
          Technology.
        </p>
      </div>

      {/* Social Media Section */}
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p>
          <i className="fas fa-map-marker-alt"></i> Ground Floor, Council Building,
          CUET, Chattogram 4349
        </p>
        <p>
          <i className="fas fa-phone"></i> +880312345678
        </p>
        <p>
          <i className="fas fa-envelope"></i> dircuet@cuet.ac.bd
        </p>
      </div>

      {/* Important Links */}
      <div className="footer-section">
        <h4>Important Links</h4>
        <ul>
          <li>
            <a href="https://cuet.ac.bd" target="_blank" rel="noopener noreferrer">
              CUET Home
            </a>
          </li>
          <li>
            <a href="#">Office 365</a>
          </li>
          <li>
            <a href="#">Notice Board</a>
          </li>
          <li>
            <a href="#">Download Forms</a>
          </li>
          <li>
            <a href="#">Other Links</a>
          </li>
        </ul>
      </div>

      {/* Support Office */}
      <div className="footer-section">
        <h4>Support Office</h4>
        <ul>
          <li>Engineering Office</li>
          <li>Registrar Office</li>
          <li>DAERS</li>
          <li>IICT System and Support</li>
          <li>CUET Medical</li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; 2024 CUET - All Rights Reserved | Developed & Maintained by:{" "}
        <span>ICT Solutions Ltd.</span>
      </div>
    </footer>
    </div>

    
    
    </>
 
  );
};

export default Home;

