import { ArrowDown, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/joery-v-44a2181a2/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/YuriXr01', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/XrYuri88449', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/yurixr01/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/joery.vandamme.3', label: 'Facebook' },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative mb-8 opacity-0 animate-fade-up">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 animate-glow">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold gradient-text">JVD</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up delay-100">
            Joery Van Damme
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 opacity-0 animate-fade-up delay-200">
            IT Support Engineer & Junior System Administrator
          </p>
          <p className="text-primary font-medium mb-8 opacity-0 animate-fade-up delay-300">
            📍 Dendermonde, Belgium
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-10 opacity-0 animate-fade-up delay-400">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-500">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#about" className="btn-outline">
              Learn More
            </a>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
