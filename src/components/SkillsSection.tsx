import { useEffect, useRef, useState } from 'react';
import { 
  Monitor, Server, Shield, Cloud, Database, 
  Wrench, Network, HardDrive 
} from 'lucide-react';

const skills = [
  { name: 'Windows Administration', level: 85, icon: Monitor },
  { name: 'Active Directory', level: 80, icon: Server },
  { name: 'Networking (TCP/IP, DNS, DHCP)', level: 75, icon: Network },
  { name: 'Hardware Troubleshooting', level: 90, icon: HardDrive },
  { name: 'Cybersecurity Basics', level: 70, icon: Shield },
  { name: 'Virtualization (VMware/Hyper-V)', level: 65, icon: Cloud },
  { name: 'Scripting (PowerShell/Bash)', level: 60, icon: Database },
  { name: 'IT Support & Help Desk', level: 95, icon: Wrench },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            My core competencies and areas of expertise in IT
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <skill.icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1 + 0.3}s`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              Also familiar with:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Office 365', 'Microsoft Teams', 'Remote Desktop', 'Ticketing Systems',
                'Backup Solutions', 'Print Management', 'VPN', 'ITIL Basics',
                'Linux Basics', 'Documentation'
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
