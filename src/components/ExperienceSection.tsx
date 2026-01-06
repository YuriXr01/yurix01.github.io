import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'IT Support Engineer',
    company: 'Current Position',
    location: 'Belgium',
    period: '2021 - Present',
    description: [
      'Provide first and second-line technical support to end users',
      'Troubleshoot hardware, software, and network issues',
      'Manage Active Directory user accounts and group policies',
      'Deploy and configure workstations and peripherals',
      'Document technical procedures and solutions',
    ],
  },
  {
    title: 'Junior System Administrator',
    company: 'Growing Role',
    location: 'Belgium',
    period: 'Ongoing',
    description: [
      'Assist with server maintenance and monitoring',
      'Support virtualization environments (VMware/Hyper-V)',
      'Help manage backup and disaster recovery systems',
      'Participate in infrastructure upgrade projects',
      'Learning cloud technologies (Azure/AWS basics)',
    ],
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
            My professional journey in IT support and system administration
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
                        <Calendar size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
