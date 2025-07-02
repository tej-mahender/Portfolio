import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './Contact.css'; 

function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center overflow-hidden">
      
      <div className="w-full">
        <svg 
          viewBox="0 0 500 150" 
          preserveAspectRatio="none" 
          className="w-full h-24 transform rotate-180"
          role="presentation"
        >
          <path 
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,0 L0,0 Z" 
            style={{ fill: "#644834" }} 
          />
        </svg>
      </div>
      <div className="contact-card">
      <div className="w-full flex flex-col items-center relative">
        
        {/* Text Content */}
        <div className="max-w-xl text-center px-4 md:text-right md:ml-auto md:mr-20">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-white text-base mb-6">
            Whether you have an idea, a project, or just want to say hi — I'm always open to chat!
          </p>
          <footer className="text-white text-sm">
            Designed & hand-coded by <span className="font-semibold">Tej Mahendra</span> © {new Date().getFullYear()} — All rights reserved.
          </footer>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-10 md:absolute md:bottom-10 md:left-20">
          <a href="https://github.com/tej-mahender" target="_blank" rel="noreferrer">
            <FaGithub className="text-white text-3xl hover:text-gray-300 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/tej-mahendra" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-gray-300 transition-transform hover:scale-110" />
          </a>
          <a href="reddytej15@gmail.com" target="_blank" rel="noreferrer">
            <HiOutlineMail className="text-white text-3xl hover:text-gray-300 transition-transform hover:scale-110" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;
