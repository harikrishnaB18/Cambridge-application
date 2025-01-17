import React, { useState } from "react";
import HeaderHomeTwo from "./HeaderHomeTwo";
import FooterHomeTwo from "./FooterHomeTwo";
import Drawer from "../Mobile/Drawer";
import useToggle from "../components/useToggle.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Forms() {
    const errorStyle = {
        color: "red",
        fontSize: "12px",
        marginTop: "5px",
        display: "block",
      };
  const [drawer, drawerAction] = useToggle(false);

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fName.trim()) {
      newErrors.fName = "First Name is required.";
    }

    if (!formData.lName.trim()) {
      newErrors.lName = "Last Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "A valid email address is required.";
    }

    if (!formData.phone.trim() || isNaN(formData.phone)) {
      newErrors.phone = "A valid phone number is required.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the Terms & Conditions.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
        
      // Clear form after successful submission
      setFormData({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        terms: false,
      });

      setErrors({}); // Clear errors
 toast.success("Data successfully submitted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });  
  }
  };

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderHomeTwo action={drawerAction.toggle} />
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Get in touch</h3>
                <p>Looking for help? Fill the form and start a new adventure.</p>
                <div className="single-info">
                  <h5>Headquarters</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    744 New York Ave, Brooklyn, Kings,
                    <br /> New York 10224
                  </p>
                </div>
                <div className="single-info">
                  <h5>Phone</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    (+642) 245 356 432
                    <br />
                    (+420) 336 476 328
                  </p>
                </div>
                <div className="single-info">
                  <h5>Support</h5>
                  <p>
                    <i className="fal fa-envelope"></i>
                    info@cambridgeconveyancing.com
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <a className="fac" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="twi" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="you" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="lin" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Let’s Connect</h4>
                <form onSubmit={handleSubmit} className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="fName"
                      placeholder="First Name"
                      value={formData.fName}
                      onChange={handleChange}
                    />
                           {errors.fName && <span style={errorStyle}>{errors.fName}</span>}

                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lName"
                      placeholder="Last Name"
                      value={formData.lName}
                      onChange={handleChange}
                    />
                    {errors.lName && <span style={errorStyle}>{errors.lName}</span>}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span style={errorStyle}>{errors.email}</span>}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && <span style={errorStyle}>{errors.subject}</span>}
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
{errors.message && <span style={errorStyle}>{errors.message}</span>}
                  </div>
                  <div className="col-md-6">
                    <div className="condition-check">
                      <input
                        id="terms-conditions"
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                      />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
{errors.terms && <span style={errorStyle}>{errors.terms}</span>}
                  </div>
                  <div className="col-md-6 text-right">
                    <input type="submit" name="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />

      <FooterHomeTwo />
    </>
  );
}

export default Forms;
