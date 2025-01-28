import { useEffect, useState } from "react";
import "./services.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Services = () => {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState("");
  const [transformedDepartments, setTransformedDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(""); // Track selected department
  const [selectedService, setSelectedService] = useState(""); // Track selected service
  const dispatch = useDispatch();

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setServices(res.data);

        // Transform departments after fetching services
        const departments = res.data.map((service) =>
          service.department.map((dept) => `${dept}`)
        );
        setTransformedDepartments([...new Set(departments.flat())]); // Remove duplicates
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filtering logic
  const filteredServices = services.filter((service) => {
    const matchesDepartment =
      !selectedDepartment || service.department.includes(selectedDepartment);
    const matchesService =
      !selectedService || service.title === selectedService;
    const matchesQuery =
      !query ||
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.category.toLowerCase().includes(query.toLowerCase());

    return matchesDepartment && matchesService && matchesQuery;
  });

  // Add product to cart
  const handleAddToCart = (service) => {
    console.log("Adding to cart:", service._id);
    dispatch(addToCart(service));
  };

  return (
    <>
      <h1 className="service-page-heading">Services</h1>
      <div className="services-container">
        {/* Search Filters */}
        <div className="filters">
          {/* Department Dropdown */}
          <select
            className="dropdown"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {transformedDepartments.map((point, index) => (
              <option key={index} value={point}>
                {point}
              </option>
            ))}
          </select>

          {/* Service Dropdown */}
          <select
            className="dropdown"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">All Services</option>
            {services.map((service) => (
              <option key={service._id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by category or title"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setQuery("")} // Show all products when focusing
            />
          </div>
        </div>

        {/* Service List */}
        <h1 className="page-title">List of Service Scopes</h1>
        <div className="services-list">
          {filteredServices.map((service) => (
            <div key={service._id} className="service-card">
              <div className="service-header">
                <span className="category">{service.category}</span>
                <h3 className="title">{service.title}</h3>
              </div>
              <p className="description">{service.description}</p>
              <div className="service-footer">
              
                <button
                  className="price-button"
                  onClick={() => handleAddToCart(service)}
                >
                  {service.price} TAKA <br /> ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Optional: Implement Pagination Logic Later) */}
        <div className="pagination">
          <button>First</button>
          <button>Previous</button>
          <button className="active">1</button>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
    </>
  );
};

export default Services;



