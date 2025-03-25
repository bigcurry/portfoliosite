import React, { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Suraj Pabba</h1>
          <div className="hidden md:flex space-x-4">
            <NavLink active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink active={activeSection === 'experience'} onClick={() => scrollToSection('experience')}>Experience</NavLink>
            <NavLink active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink active={activeSection === 'education'} onClick={() => scrollToSection('education')}>Education</NavLink>
            <NavLink active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>
          <MobileMenu onNavigate={scrollToSection} activeSection={activeSection} />
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
          <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Suraj Pabba</h2>
            <h3 className="text-2xl md:text-3xl mb-6">Technical Product Leader</h3>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Passionate about building delightful products and growing revenue. Experienced in building integrations between software systems, working with complex datasets to drive AI workflows, and working with customers to launch new products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('experience')} 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeader>Professional Experience</SectionHeader>
            
            <JobExperience 
              company="Treehouse"
              location="Chicago, IL"
              title="Director of Technical Operations"
              period="2024 - Present"
              accomplishments={[
                "Developed and implemented operating SOPs for both offshore and internal teams, optimized Treehouse software systems, and created bespoke field applications using AI and LLMs",
                "Designed and deployed AI-driven process automation, streamlining business operations to reduce manual effort and increase home electrification installation accuracy",
                "Engineered revenue growth through building custom Hubspot and Zapier automations (increased 2024 Q4 revenue by record 110% of quota)",
                "Led the transformation of field operations, integrating advanced field service management APIs, CRM, and performance metrics tools to enhance efficiency"
              ]}
            />
            
            <JobExperience 
              company="Multiple Startups"
              location="Chicago, IL"
              title="Independent Consultant"
              period="2022 - 2024"
              accomplishments={[
                "Selected for Antler VC's NYC EIR program (6% acceptance rate); created InField AI to help field technicians use LLMs to install equipment",
                "Developed sales playbooks and led outreach for ModelShare.AI as a growth engineer",
                "Established sales processes for a renewable tax credit startup, aiding in securing an $800K raise",
                "Provided solutions engineering support for Antler portfolio companies in data translation, architecture, AI, and growth strategy"
              ]}
            />
            
            <JobExperience 
              company="Salesforce / MuleSoft"
              location="Chicago, IL"
              title="Senior Client Solutions Engineer"
              period="2021 - 2022"
              accomplishments={[
                "Led presales for enterprise/strategic (10,000+ employees) customers in Salesforce's HLS OU",
                "Created value-driven demos/POCs for Anypoint Platform (API development, governance, security)",
                "Launched usage-based pricing enablement for HLS sales teams, redefining the platform sales approach",
                "Developed technical POVs integrating with partner products for strategic healthcare enterprise clients",
                "Managed a $2M book of business, achieving 80% of the quota"
              ]}
            />
            
            <JobExperience 
              company="iManage"
              location="Chicago, IL"
              title="Senior Solutions Engineer"
              period="2018 - 2021"
              accomplishments={[
                "Delivered pre-sales services for legal and financial clients using iManage Work, Share, Govern, Cloud, and Ravn AI",
                "Developed technical demos, proof of concepts, and RFQ responses, achieving 100%+ of the sales quota",
                "Conducted strategy meetings with operations and product teams to align product initiatives with sales",
                "Awarded SE of the Year (2019)"
              ]}
            />
            
            <JobExperience 
              company="Uptake Technologies"
              location="Chicago, IL"
              title="Corporate Strategy, Solutions Consultant"
              period="2016 - 2018"
              accomplishments={[
                "Led corporate development initiatives, collaborating with engineering, product, and sales teams (pre-unicorn)",
                "Built predictive analytics solutions using Uptake's platform for Fortune 200 clients in Energy, Transportation, and Construction",
                "Managed a data science team to create a labeling program for a renewable energy initiative",
                "Developed the GTM process for sales engineering and revenue teams"
              ]}
            />
            
            <JobExperience 
              company="KPMG LLP"
              location="Dallas, TX"
              title="Associate, Advisory, Technology Enablement"
              period="2013 - 2016"
              accomplishments={[]}
              isLast={true}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <SectionHeader>Technical Skills</SectionHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCategory 
                title="Programming Languages" 
                skills={["JavaScript", "VBScript", "Python", "R", "Java", "MySQL", "HTML5", "C#", "CSS", "API Development"]} 
              />
              <SkillCategory 
                title="Platforms" 
                skills={["Google Cloud", "Salesforce", "Heroku", "Microsoft Azure", "iManage", "MuleSoft", "AWS Foundational"]} 
              />
              <SkillCategory 
                title="Tools" 
                skills={["GitHub", "SQL Reporting Service", "Visual Studio", "Visio", "Jira", "Tableau", "Alteryx"]} 
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeader>Education & Certifications</SectionHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <EducationCard 
                title="University of Houston, Honors College"
                degree="BBA in Management Information Systems"
                year="May 2012"
              />
              <EducationCard 
                title="MuleSoft Certified Developer Level 1"
                year="May 2022"
              />
              <EducationCard 
                title="General Assembly"
                degree="Data Science Bootcamp"
                year="Fall 2020"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-6">
            <SectionHeader light={true}>Contact Me</SectionHeader>
            
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
              <ContactCard icon="📧" title="Email" content="suraj.pabba89@gmail.com" />
              <ContactCard icon="📱" title="Phone" content="832-236-3345" />
              <ContactCard icon="💻" title="Website" content="surajpabba.com" />
              <ContactCard icon="🔗" title="LinkedIn" content="spabba" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Suraj Pabba. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Component for navigation links
const NavLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 transition duration-300 ${
      active 
        ? 'text-blue-600 font-semibold' 
        : 'text-gray-600 hover:text-blue-600'
    }`}
  >
    {children}
  </button>
);

// Mobile menu component with hamburger
const MobileMenu = ({ onNavigate, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavigation = (section) => {
    onNavigate(section);
    setIsOpen(false);
  };
  
  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
      >
        <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-900"></div>
      </button>
      
      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg py-2 px-3">
          <div className="flex flex-col space-y-2">
            <MobileNavLink active={activeSection === 'home'} onClick={() => handleNavigation('home')}>Home</MobileNavLink>
            <MobileNavLink active={activeSection === 'experience'} onClick={() => handleNavigation('experience')}>Experience</MobileNavLink>
            <MobileNavLink active={activeSection === 'skills'} onClick={() => handleNavigation('skills')}>Skills</MobileNavLink>
            <MobileNavLink active={activeSection === 'education'} onClick={() => handleNavigation('education')}>Education</MobileNavLink>
            <MobileNavLink active={activeSection === 'contact'} onClick={() => handleNavigation('contact')}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`p-2 w-full text-left rounded transition duration-300 ${
      active 
        ? 'bg-blue-100 text-blue-600 font-semibold' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

// Section header component
const SectionHeader = ({ children, light = false }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>{children}</h2>
    <div className={`w-24 h-1 mx-auto ${light ? 'bg-white' : 'bg-blue-600'}`}></div>
  </div>
);

// Job experience component
const JobExperience = ({ company, location, title, period, accomplishments, isLast = false }) => (
  <div className={`mb-12 ${isLast ? '' : 'border-b border-gray-200 pb-12'}`}>
    <div className="flex flex-col md:flex-row md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-semibold">{company}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
      <div className="mt-2 md:mt-0 md:text-right">
        <h4 className="text-xl font-medium text-blue-700">{title}</h4>
        <p className="text-gray-600">{period}</p>
      </div>
    </div>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {accomplishments.map((item, index) => (
        <li key={index} className="ml-4">{item}</li>
      ))}
    </ul>
  </div>
);

// Skill category component
const SkillCategory = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-blue-700">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Education card component
const EducationCard = ({ title, degree, year }) => (
  <div className="bg-gray-100 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
    {degree && <p className="text-gray-700">{degree}</p>}
    <p className="text-gray-600">{year}</p>
  </div>
);

// Contact card component
const ContactCard = ({ icon, title, content }) => (
  <div className="bg-blue-800 p-6 rounded-lg text-center w-full md:w-64">
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{content}</p>
  </div>
);

export default App;
