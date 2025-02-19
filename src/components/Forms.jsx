
import React, { useState } from "react";
import HeaderHomeTwo from "./HeaderHomeTwo";
import FooterHomeTwo from "./FooterHomeTwo";
import Drawer from "../Mobile/Drawer";
import useToggle from "../components/useToggle.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // Import EmailJS

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

const [error, setError] = useState("");

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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     const templateParams = {
  //       name: `${formData.fName} ${formData.lName}`,
  //       email: formData.email,
  //       subject: formData.subject,
  //       phone: formData.phone,
  //       message: formData.message,
  //     };

  //     emailjs
  //       .send("service_d2doe6z", "template_mtuuqzf", templateParams, "bAkbrOjFXPWp4sIE5")
  //       .then(
  //         (response) => {
  //           toast.success("Your message was sent successfully!", {
  //             position: "top-right",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             theme: "light",
  //           });

  //           setFormData({
  //             fName: "",
  //             lName: "",
  //             email: "",
  //             phone: "",
  //             subject: "",
  //             message: "",
  //             terms: false,
  //           });
  //         },
  //         (error) => {
  //           toast.error("Failed to send your message. Please try again.", {
  //             position: "top-right",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             theme: "light",
  //           });
  //         }
  //       );
  //   }
  // };
// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    // Send email to the user
    const userTemplateParams = {
      name: `${formData.fName} ${formData.lName}`,
      email: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      message: formData.message,
    };

    // Send email to the owner
    const ownerTemplateParams = {
      name: `${formData.fName} ${formData.lName}`,
      email: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      message: formData.message,
    };

    // Sending email to the user
    emailjs
      .send("service_d2doe6z", "template_mtuuqzf", userTemplateParams, "bAkbrOjFXPWp4sIE5")
      .then(
        (response) => {
          toast.success("Your message was sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });

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
        },
        (error) => {
          toast.error("Failed to send your message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      );

    // Sending email to the owner
    emailjs
      .send("service_t5gaknp", "template_mq9co2n", ownerTemplateParams, "kghVieoXpLCisXvp-")
      .then(
        () => {
          console.log("Owner email sent successfully.");
        },
        (error) => {
          console.error("Failed to send the email to the owner:", error);
        }
      );
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
                    <br /> Cambridge, United Kingdom
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
                <div className="social mt-30">
                  <ul>
                    <li>
                      <Link to="/#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
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
                  <div className="col-md-12 text-right">
                    <input
                      type="submit"
                      name="submit"
                      className="next-btn"
                      value="Send Message"
                    />
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
