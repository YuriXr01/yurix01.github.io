import { User, Briefcase, GraduationCap, FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate IT professional with hands-on experience in support and system administration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Summary Card */}
          <div className="glass-card-hover p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <User className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Professional Summary</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated IT Support Engineer and Junior System Administrator with 3 years of professional experience. 
              I thrive on solving complex technical challenges and ensuring seamless IT operations. 
              My background encompasses troubleshooting, user support, and system maintenance, 
              with a passion for continuous learning and staying current with emerging technologies.
            </p>
          </div>

          {/* Experience Card */}
          <div className="glass-card-hover p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold gradient-text">3+</span>
                <div>
                  <p className="font-medium">Years Professional</p>
                  <p className="text-sm text-muted-foreground">IT Support & Administration</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Hands-on experience in enterprise environments, handling everything from 
                helpdesk tickets to server maintenance.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-card-hover p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Self-taught professional with a strong foundation in IT fundamentals. 
              I believe in practical, hands-on learning and have continuously expanded my 
              knowledge through certifications, online courses, and real-world experience. 
              The best classroom has always been the field.
            </p>
          </div>

          {/* Resume Card */}
          <div className="glass-card-hover p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Full Resume</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For a complete overview of my skills, projects, and professional achievements, 
              check out my detailed resume. It includes my full work history, technical certifications, 
              and notable projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <FileText size={18} />
              Request Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
