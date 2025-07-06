import React from 'react';

function Header() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-[#f5eded] shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 h-20">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/name.png"
            alt="Logo"
            className="h-15 w-100px object-cover"
          />
        </div>

        {/* Resume Button */}
        <div>
          <a
            href="/TejMahendra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-gray-800 text-2xl font-bold hover:text-black transition text-base sm:text-xl"
          >
            Resume
          </a>
        </div>
        
      </nav>
    </div>
  );
}

export default Header;
