import React from 'react'

function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      
      {/* Full Background Wave */}
      <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="blue" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,37.3C384,32,480,32,576,64C672,96,768,160,864,160C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</div>


      {/* Content */}
      <div className="text-center px-6">
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
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-white text-sm">
        Designed & hand-coded by <span className="font-semibold">Tej Mahendra</span> © {new Date().getFullYear()} — All rights reserved.
      </footer>
    </section>
  )
}

export default Contact
