import { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { AuthContext } from '../context/Authcontext.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import CustomFormModal from './CustomFormModal.jsx';
import LoginModal from './auth/LoginModal.jsx';
import RegisterModal from './auth/RegisterModal.jsx';


const Navbar = ({ initialData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { isLoggedIn, logout, portfolioData } = useContext(AuthContext);
  
  const resumeUrl = portfolioData?.resumeUrl || 'https://drive.google.com/file/d/1k6jxKA46fVrRNUfK5QCkATe_MKcjhCom/view?usp=drivesdk';
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              <span className="text-primary">&lt;</span>
              DevFolio
              <span className="text-primary">/&gt;</span>
            </a>
 {isLoggedIn && (
              <button
                onClick={() => setIsFormOpen(true)}
                className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Edit Content
              </button>)}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              {isLoggedIn ? (
                <button
                  onClick={logout}
                  className="hidden sm:inline-flex px-4 py-2 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <div className="relative group">
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Login
                  </button>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
                    Login here to add your content
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                  </div>
                </div>
              )}
              <a
                href="#contact"
                className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Hire Me
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Download Resume
              </a>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <div >

                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-primary-900 duration-300  transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                  </div>
                ))}
                {isLoggedIn ? (
                  <button
                    onClick={logout}
                   className="inline-flex px-4 py-2 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-opacity w-fit"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="relative group">
                    <button
                      onClick={() => {
                        setIsLoginOpen(true);
                        setIsOpen(false);
                      }}
                      className="inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-fit"
                    >
                      Login
                    </button>
                  </div>
                )}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-fit"
                >
                  Hire Me
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-fit"
                >
                  Download Resume
                </a>
                  {isLoggedIn && (
                <button
                  onClick={() => {
                    setIsFormOpen(true);
                    setIsOpen(false);
                  }}
                  className="inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-fit"
                >
                  Edit Content
                </button>)}
              </div>
            </div>
          )}
        </div>
        {!isLoggedIn && (
          <div className="overflow-hidden bg-primary/10 border-t border-primary/20">
            <div className="animate-slide-left-right whitespace-nowrap py-2 text-sm text-primary font-medium ">
              Please Login to add your content!
            </div>
          </div>
        )}
      </nav>

      <CustomFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialData={initialData}/>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
};

export default Navbar;
