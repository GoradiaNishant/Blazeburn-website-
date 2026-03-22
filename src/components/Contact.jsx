import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // 🚨 IMPORTANT: Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpfQN8lZFRyIIAv6FKUFUR_JB_RmdJnJqb6VewdZOoNCGhp1p9ANYKOHoZW3bmdfW9OA/exec'; 
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        message: formData.message
      };
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses CORS restrictions
        headers: {
          'Content-Type': 'text/plain', // Allows text to pass preflight
        },
        body: JSON.stringify(payload)
      });

      // If no exception, consider it successful
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Contact Info</h3>
              <p>info.blazeburn@gmail.com</p>
              <p>+91 8980410605</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Opening Soon</h3>
              <p>Coming to Ahmedabad in 2026</p>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.96020610813!2d72.4890635!3d23.0204741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ahmedabad Map"
              ></iframe>
            </div>
          </div>
          <div className="contact-form-container">
            <h3>Inquire Us</h3>
            
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(201, 169, 110, 0.1)', borderRadius: '12px', border: '1px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '10px' }}>Thank You!</h4>
                <p>Your inquiry has been successfully sent. We will get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} required>
                    <option value="" disabled>Select Inquiry Type</option>
                    <option value="Reservation">Reservation</option>
                    <option value="Event Booking">Event Booking</option>
                    <option value="Catering">Catering</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required></textarea>
                </div>
                
                {status === 'error' && (
                  <p style={{ color: 'var(--accent)', fontSize: '0.9rem', textAlign: 'center' }}>
                    There was a problem sending your message. Please try again.
                  </p>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={status === 'submitting'}
                  style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

