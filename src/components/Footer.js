import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <span>Made by Salman Khalid</span>
      <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
        aria-label="GitHub"
      >
        {/* GitHub SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="github-icon"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.625-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        
      </a>
    </div>
  );
}
