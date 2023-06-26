import React from "react";
import "../styles/home.css";
import { Form, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Home = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5,
      author: "John Doe",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      rating: 4,
      author: "Jane Smith",
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 3,
      author: "Mike Johnson",
    },
    // Add more testimonials
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Plan Your Dream Vacation with Ease</h1>
          <p className="hero-subtitle">
            Explore breathtaking destinations, find the best deals, and create
            personalized itineraries.
          </p>
          <a href="/signup" className="btn-hero">
            Get Started
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-us-overlay"></div> {/* Add an overlay */}
        <div className="about-us-content">
          <h2 className="section-title">About Us</h2>
          <p className="section-description">
            We are passionate travel enthusiasts who believe in creating
            unforgettable experiences. Our mission is to make travel planning
            seamless, exciting, and tailored to your preferences. Whether you're
            seeking adventure, relaxation, or cultural exploration, our travel
            planner empowers you to discover the world at your own pace.
          </p>
          <p className="section-description">
            With our extensive knowledge and curated recommendations, we ensure
            that every journey you embark on is filled with delightful moments
            and cherished memories. Let us be your guide to uncovering hidden
            gems, finding the best deals, and crafting personalized itineraries.
            Start your dream vacation with us today!
          </p>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials">
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-rating">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <span key={i} className="testimonial-star">
                            &#9733;
                          </span>
                        )
                      )}
                    </div>
                    <p className="testimonial-author">- {testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* Enquiry Form Section */}
      <section id="enquiry" className="bg-success py-5 enquiry-form">
        {/* <div className="container">
          <h2 className="text-center mb-4">Enquiry Form</h2>
          <Form action="http://localhost:3000/enquiry" method="POST">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your mobile number"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div> */}
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
