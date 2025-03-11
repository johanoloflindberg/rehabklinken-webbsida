
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Hem
            </Link>
            <Link to="/behandlingar" className="text-gray-700 hover:text-red-600 transition-colors">
              Behandlingar
            </Link>
            <Link to="/om-oss" className="text-gray-700 hover:text-red-600 transition-colors">
              Om oss
            </Link>
            <Link to="/kontakt" className="text-gray-700 hover:text-red-600 transition-colors">
              Kontakt
            </Link>
          </div>

          <a 
            href="https://www.bokadirekt.se" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="hidden md:block bg-red-600 hover:bg-red-700">
              Boka tid
            </Button>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-red-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Hem
              </Link>
              <Link
                to="/behandlingar"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Behandlingar
              </Link>
              <Link
                to="/om-oss"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Om oss
              </Link>
              <Link
                to="/kontakt"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Kontakt
              </Link>
              <a 
                href="https://www.bokadirekt.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full"
              >
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Boka tid
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
