import React from 'react';

const ContactUsForm = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form className="p-3 border rounded shadow" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" rows="3" required></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-50">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;