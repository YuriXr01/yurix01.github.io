import { Github, Linkedin, Twitter, Instagram, Facebook, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/joery-v-44a2181a2/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/YuriXr01', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/XrYuri88449', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/yurixr01/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/joery.vandamme.3', label: 'Facebook' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold gradient-text">
            JVD
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span>© {currentYear} Joery Van Damme. Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>in Belgium</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
