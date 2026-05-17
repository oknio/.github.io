import React from 'react';

const Contact = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh', padding: '120px 2rem 2rem 2rem' }}>
      <div className="container">
        <h1>Contact</h1>
        <p style={{ marginTop: '1rem', color: '#ccc', lineHeight: '1.6', maxWidth: '800px' }}>
          Get in touch for collaborations, job opportunities, or just to say hi!
        </p>
        <form style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
          <input type="text" placeholder="Name" style={{ padding: '1rem', background: '#111', border: '1px solid #333', color: 'white' }} />
          <input type="email" placeholder="Email" style={{ padding: '1rem', background: '#111', border: '1px solid #333', color: 'white' }} />
          <textarea placeholder="Message" rows="5" style={{ padding: '1rem', background: '#111', border: '1px solid #333', color: 'white', resize: 'vertical' }}></textarea>
          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
