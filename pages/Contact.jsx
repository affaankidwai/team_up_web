import { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (you can use an email service or server API)
    console.log("Form data:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#58287F", color: "white" }}
    >
      <div style={{ margin: "0 auto", maxWidth: "800px", padding: "20px" }}>
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Contact Us
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Have questions, feedback, or need support? We'd love to hear from you!
          Fill out the form below, and our friendly team will get back to you as
          soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "16px",
                borderColor: "greenyellow",
                borderRadius: 6,
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "16px",
                borderRadius: 6,
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "16px",
                resize: "vertical",
                borderRadius: 6,
              }}
              rows={6}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "purple",
              color: "white",
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
