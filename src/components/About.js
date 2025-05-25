import React from 'react';
import './About.css';

export default function About({ mystyle }) {
  return (
    <div className="about-container" style={mystyle}>
      <div className="about-hero">
        <h1>👋 Welcome to <span className="brand-name">Wordwiz</span></h1>
        <p>Your smart companion for mastering words, enhancing productivity, and transforming text beautifully.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>🌟 What Wordwiz Offers</h2>
          <ul>
            <li>🧮 Real-time word & character counter</li>
            <li>🎨 Light/Dark mode with seamless UI transition</li>
            <li>🔁 Case converter: UPPERCASE, lowercase, Sentence case</li>
            <li>📋 Clipboard features: Copy cleaned text instantly</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>🧑‍💻 Meet the Creator</h2>
          <p>
            Hi! I'm <strong>Salman Khalid</strong>, a passionate developer from Pakistan 🇵🇰 dedicated to
            creating clean, efficient, and useful applications for everyday users. Wordwiz is part of that mission.
          </p>
        </section>

        <section className="about-footer-text">
          <p>🚀 Thank you for visiting Wordwiz. Let your words flow — we'll handle the rest!</p>
        </section>
      </div>
    </div>
  );
}
