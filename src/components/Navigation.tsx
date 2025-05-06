
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center" 
            onClick={handleLogoClick}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive("/") 
                  ? "text-rehab-red" 
                  : "text-gray-700 hover:text-rehab-red"
              }`}
            >
              Hem
            </Link>
            <Link 
              to="/behandlingar" 
              className={`font-medium transition-colors ${
                isActive("/behandlingar") 
                  ? "text-rehab-red" 
                  : "text-gray-700 hover:text-rehab-red"
              }`}
            >
              Behandlingar
            </Link>
            <Link 
              to="/om-oss" 
              className={`font-medium transition-colors ${
                isActive("/om-oss") 
                  ? "text-rehab-red" 
                  : "text-gray-700 hover:text-rehab-red"
              }`}
            >
              Om oss
            </Link>
            <Link 
              to="/kontakt" 
              className={`font-medium transition-colors ${
                isActive("/kontakt") 
                  ? "text-rehab-red" 
                  : "text-gray-700 hover:text-rehab-red"
              }`}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-rehab-red transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-gray-100">
            <div className="flex flex-col space-y-6">
              <Link
                to="/"
                className={`text-lg font-medium transition-colors ${
                  isActive("/") 
                    ? "text-rehab-red" 
                    : "text-gray-700 hover:text-rehab-red"
                }`}
                onClick={toggleMenu}
              >
                Hem
              </Link>
              <Link
                to="/behandlingar"
                className={`text-lg font-medium transition-colors ${
                  isActive("/behandlingar") 
                    ? "text-rehab-red" 
                    : "text-gray-700 hover:text-rehab-red"
                }`}
                onClick={toggleMenu}
              >
                Behandlingar
              </Link>
              <Link
                to="/om-oss"
                className={`text-lg font-medium transition-colors ${
                  isActive("/om-oss") 
                    ? "text-rehab-red" 
                    : "text-gray-700 hover:text-rehab-red"
                }`}
                onClick={toggleMenu}
              >
                Om oss
              </Link>
              <Link
                to="/kontakt"
                className={`text-lg font-medium transition-colors ${
                  isActive("/kontakt") 
                    ? "text-rehab-red" 
                    : "text-gray-700 hover:text-rehab-red"
                }`}
                onClick={toggleMenu}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
