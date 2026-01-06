import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'All-around IT Support',
    company: 'AZ Sint-Blasius',
    location: 'Dendermonde, Belgium',
    period: '01/2021 - 06/2024',
    description: [
      'IT Support, User and Access Administrator',
      'System and Network Administrator',
      'Application support, hardware installs/configs',
      'Worked with Active Directory, M365, Azure, SCCM, SCOM',
      'Managed Lansweeper, Veeam, Barracuda, Aruba, KWS, SAP',
    ],
    tools: ['Active Directory', 'M365', 'Azure', 'SCCM', 'Barracuda', 'KWS', 'SAP'],
  },
  {
    title: 'System Engineer / Administrator (Training)',
    company: 'CEVORA',
    location: 'Belgium',
    period: '2019 - 2020',
    description: [
      'Set up domain infrastructure with IP and netmask',
      'Created and managed servers: Domain controllers, firewall, routers, backup, AD',
      'Managed Print server, SCCM server, WPS',
      'Created secure GPOs and user rights management',
      'Built scalable and future-proof infrastructure',
    ],
    tools: ['PowerShell', 'MS Server', 'AGDLP', 'GPO', 'VPN', 'Oracle', 'Wireshark'],
  },
  {
    title: 'Technician Fiber Optics',
    company: 'The Last Mile',
    location: 'Belgium',
    period: '2018 - 2019',
    description: [
      'Groundwork and fiber optic cable provision',
      'Install fiber optics to home for clients',
      'Install facade cupboards and connect fiber optics',
      'Weld fiber optics and connectors',
    ],
    tools: ['Fiber welding toolbox', 'Aerial work platform', 'Small excavators'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey in IT and technical roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 top-2`}
                  />

                  <div className="glass-card-hover p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tools.slice(0, 5).map((tool, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
