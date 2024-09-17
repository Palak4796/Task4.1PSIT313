import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter">
      <h1>Sign Up to DEV@Deakin</h1>
      <form id="subscribe-form">
        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" placeholder="EMAIL" required />
        <button type="submit">Subscribe</button>
      </form>
      <p id="response"></p>
    </div>
  );
}

export default Newsletter;
