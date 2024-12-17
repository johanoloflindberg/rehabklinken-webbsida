import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-rehab-red">
            Rehabkliniken
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-rehab-gray-700 hover:text-rehab-red transition-colors">
              Hem
            </Link>
            <Link to="/tjanster" className="text-rehab-gray-700 hover:text-rehab-red transition-colors">
              Tjänster
            </Link>
            <Link to="/om-oss" className="text-rehab-gray-700 hover:text-rehab-red transition-colors">
              Om oss
            </Link>
            <Link to="/kontakt" className="text-rehab-gray-700 hover:text-rehab-red transition-colors">
              Kontakt
            </Link>
          </div>

          <Button className="hidden md:block bg-rehab-red hover:bg-rehab-red/90">
            Boka tid
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-rehab-gray-700 hover:text-rehab-red"
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
                className="text-rehab-gray-700 hover:text-rehab-red transition-colors"
                onClick={toggleMenu}
              >
                Hem
              </Link>
              <Link
                to="/tjanster"
                className="text-rehab-gray-700 hover:text-rehab-red transition-colors"
                onClick={toggleMenu}
              >
                Tjänster
              </Link>
              <Link
                to="/om-oss"
                className="text-rehab-gray-700 hover:text-rehab-red transition-colors"
                onClick={toggleMenu}
              >
                Om oss
              </Link>
              <Link
                to="/kontakt"
                className="text-rehab-gray-700 hover:text-rehab-red transition-colors"
                onClick={toggleMenu}
              >
                Kontakt
              </Link>
              <Button className="w-full bg-rehab-red hover:bg-rehab-red/90">
                Boka tid
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;