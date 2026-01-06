import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Graduate Degree in System Administration and Programming',
    institution: 'Odisee Aalst',
    period: '02/2024 - 06/2024',
    description: 'Learned C# programming and system administration concepts.',
    type: 'training',
  },
  {
    degree: 'System Administration Certificate',
    institution: 'Cevora IT1',
    period: '2019 - 2020',
    description: 'Comprehensive training in system engineering and administration.',
    type: 'certificate',
  },
  {
    degree: 'Consumer Electronics Audio and TV',
    institution: 'CVO Adult Education',
    period: '2016 - 2018',
    description: 'Certified training in consumer electronics.',
    type: 'certificate',
  },
  {
    degree: 'Electrical Installations',
    institution: 'Koninklijk Technisch Atheneum',
    period: '2012 - 2016',
    description: 'Technical education in electrical installations.',
    type: 'education',
  },
];

const certifications = [
  'KWS / MyNexusHealth Admin Certification (Cegeka)',
  'ITIL Environment Experience (3 years)',
  'Consumer Electronics Certificate',
  'System Administration Certificate (Cevora)',
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            My academic background and professional certifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education & Training</h3>
              </div>

              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="glass-card-hover p-5">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${item.type === 'certificate' ? 'bg-green-500/10' : 'bg-primary/10'}`}>
                        {item.type === 'certificate' ? (
                          <Award className={`w-4 h-4 ${item.type === 'certificate' ? 'text-green-500' : 'text-primary'}`} />
                        ) : (
                          <BookOpen className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {item.period}
                        </span>
                        <h4 className="font-semibold mt-2 text-sm">{item.degree}</h4>
                        <p className="text-sm text-primary">{item.institution}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Certifications & Achievements</h3>
              </div>

              <div className="glass-card-hover p-6">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* School Project Highlight */}
              <div className="glass-card-hover p-6 mt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-primary">📦</span> School Project
                </h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Elevator System:</strong> Built an elevator control system using buttons and level displays, 
                  powered by an electric motor connected in star-triangle configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
