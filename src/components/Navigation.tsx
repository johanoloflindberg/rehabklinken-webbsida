
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
            
            {/* Behandlingar dropdown */}
            <div className="relative group">
              <Link 
                to="/behandlingar" 
                className={`font-medium transition-colors inline-flex items-center ${
                  isActive("/behandlingar") || isActive("/fysioterapi") || isActive("/kostnad") || isActive("/vanliga-fragor")
                    ? "text-rehab-red" 
                    : "text-gray-700 hover:text-rehab-red"
                }`}
              >
                Behandlingar
                <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link
                    to="/behandlingar"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-rehab-red"
                  >
                    Våra behandlingar
                  </Link>
                  <Link
                    to="/fysioterapi"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-rehab-red"
                  >
                    Fysioterapi
                  </Link>
                  <Link
                    to="/kostnad"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-rehab-red"
                  >
                    Kostnad
                  </Link>
                  <Link
                    to="/vanliga-fragor"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-rehab-red"
                  >
                    Vanliga frågor
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Om oss dropdown */}
            <div className="relative group">
              <Link 
                to="/om-oss" 
                className={`font-medium transition-colors inline-flex items-center ${
                  isActive("/om-oss") || isActive("/eva-helde") || isActive("/petra-nasselqvist") || isActive("/linda-engh-eriksson")
                    ? "text-rehab-red" 
                    : "text-gray-700 hover:text-rehab-red"
                }`}
              >
                Om oss
                <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link
                    to="/om-oss"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-rehab-red"
                  >
                    Om kliniken
                  </Link>
                  <Link
                    to="/eva-helde"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-rehab-red"
                  >
                    Läkare Eva Helde
                  </Link>
                  <Link
                    to="/petra-nasselqvist"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-rehab-red"
                  >
                    Petra Nässelqvist
                  </Link>
                  <Link
                    to="/linda-engh-eriksson"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-rehab-red"
                  >
                    Linda Engh Eriksson
                  </Link>
                </div>
              </div>
            </div>
            
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
              
              {/* Mobile: Behandlingar section */}
              <div>
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
                <div className="mt-3 ml-4 border-l-2 border-gray-200 pl-4">
                  <Link
                    to="/fysioterapi"
                    className={`block text-base font-medium transition-colors ${
                      isActive("/fysioterapi") 
                        ? "text-rehab-red" 
                        : "text-gray-600 hover:text-rehab-red"
                    }`}
                    onClick={toggleMenu}
                  >
                    Fysioterapi
                  </Link>
                  <Link
                    to="/kostnad"
                    className={`block text-base font-medium transition-colors ${
                      isActive("/kostnad") 
                        ? "text-rehab-red" 
                        : "text-gray-600 hover:text-rehab-red"
                    }`}
                    onClick={toggleMenu}
                  >
                    Kostnad
                  </Link>
                  <Link
                    to="/vanliga-fragor"
                    className={`block text-base font-medium transition-colors ${
                      isActive("/vanliga-fragor") 
                        ? "text-rehab-red" 
                        : "text-gray-600 hover:text-rehab-red"
                    }`}
                    onClick={toggleMenu}
                  >
                    Vanliga frågor
                  </Link>
                </div>
              </div>
              
              {/* Mobile: Om Oss section */}
              <div>
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
                <div className="mt-3 ml-4 border-l-2 border-gray-200 pl-4">
                  <Link
                    to="/eva-helde"
                    className={`block text-base font-medium transition-colors ${
                      isActive("/eva-helde") 
                        ? "text-rehab-red" 
                        : "text-gray-600 hover:text-rehab-red"
                    }`}
                    onClick={toggleMenu}
                  >
                    Läkare Eva Helde
                  </Link>
                  <Link
                    to="/petra-nasselqvist"
                    className={`block text-base font-medium transition-colors ${
                      isActive("/petra-nasselqvist") 
                        ? "text-rehab-red" 
                        : "text-gray-600 hover:text-rehab-red"
                    }`}
                    onClick={toggleMenu}
                  >
                    Petra Nässelqvist
                  </Link>
                  <Link
                    to="/linda-engh-eriksson"
                    className={`block text-base font-medium transition-colors ${
                      isActive("/linda-engh-eriksson") 
                        ? "text-rehab-red" 
                        : "text-gray-600 hover:text-rehab-red"
                    }`}
                    onClick={toggleMenu}
                  >
                    Linda Engh Eriksson
                  </Link>
                </div>
              </div>
              
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
