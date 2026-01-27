import { Github, Linkedin, Twitter } from 'lucide-react';
import { AuthContext } from '../context/Authcontext.jsx';
import { defaultHeroData } from '../utils/DefaultPortfolioData.js';
import { useContext } from 'react';


const Footer = () => {
  const { portfolioData } = useContext(AuthContext);
  const data = portfolioData || defaultHeroData;

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by Irfan Khan
          </p>

          <div className="flex items-center gap-6">
            <a
              href={data?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={data?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
