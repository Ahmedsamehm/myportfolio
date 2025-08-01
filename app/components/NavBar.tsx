import * as React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 backdrop-blur-md bg-slate-900/80 dark:bg-slate-900/80 border-b border-slate-700/50 w-full ">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-8">
            <a href="#home" className="text-slate-300 hover:text-slate-100 transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#projects" className="text-slate-300 hover:text-slate-100 transition-colors text-sm font-medium">
              Projects
            </a>
            <a href="#about" className="text-slate-300 hover:text-slate-100 transition-colors text-sm font-medium">
              About
            </a>
            <a href="#contact" className="text-slate-300 hover:text-slate-100 transition-colors text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
