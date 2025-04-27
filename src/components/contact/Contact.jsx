import React from 'react'

function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center items-center overflow-hidden">
      
      <div className="w-full">
        <svg 
          viewBox="0 0 500 150" 
          preserveAspectRatio="none" 
          className="w-full h-24 transform rotate-180"
          role="presentation"
        >
          <path 
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,0 L0,0 Z" 
            style={{ fill: "#3b82f6" }} 
          />
        </svg>
      </div>

      <div className="relative flex flex-col justify-center items-center w-full bg-blue-500 pt-16 pb-20 text-center px-6">
        <h3 className="text-5xl font-bold text-white mb-6">Let's Connect</h3>
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://github.com/tejmahendra" target="_blank" rel="noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/tejmahendra" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:you@example.com">
            <img src="/icons/email.svg" alt="Email" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
        </div>
        <p className="text-white text-md max-w-md mx-auto">
          Whether you have an idea, a project, or just want to say hi — I'm always open to chat!
        </p>

        <footer className="mt-8 text-center text-white text-sm">
          Designed & hand-coded by <span className="font-semibold">Tej Mahendra</span> © {new Date().getFullYear()} — All rights reserved.
        </footer>
      </div>

    </section>
  )
}

export default Contact;
