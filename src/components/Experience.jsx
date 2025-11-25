const Experience = () => {
  const experiences = [
    {
      title: "Undergraduate Research Assistant - Project Lead",
      company: "Creative Mechanics Lab, Columbia Engineering",
      location: "New York, NY",
      period: "January 2025 – Present",
      details: [
        "Engineered assistive mobility airport wheelchair technology for disabled through a motorized stroller attachment",
        "Programmed a Kelly motor controller configuring system parameters—such as battery voltage range, throttle mapping and tuning, emergency lock, and regenerative braking— for ideal integration with the battery pack, motor, and throttle",
        "Designed pressure-sensitive regenerative foot pedal system for seamless acceleration, braking, and reverse control",
        "Incorporated a 5:1 planetary gear reduction system by analytically determining torque requirements for ramp elevation through Python scripts; traded motor RPM for required torque, ensuring adequate performance under load",
        "Partnered with lab member in CAD modeling and system design, electric drivetrain fabrication, battery integration, chassis assembly, and weight distribution"
      ]
    },
    {
      title: "Frame, Body and Aerodynamics Team Member",
      company: "Columbia University Formula Racing",
      location: "New York, NY",
      period: "December 2024 – Present",
      details: [
        "Developed manufacturing procedures for carbon fiber aerodynamic components, optimizing performance achieving a 15% weight-to-strength ratios improvement",
        "Liaised with cross-functional teams (suspension, powertrain) to integrate aerodynamic components into chassis design using CAD",
        "Prototyped and manufactured composite parts by operating CNC mills, waterjet cutters, and laser cutters; resolved design-for-manufacturing issues that decreased component production time by 30%"
      ]
    },
    {
      title: "Finance Intern",
      company: "Aviation Tax Solutions Limited",
      location: "Nairobi, Kenya",
      period: "June 2024 – Present",
      details: [
        "Spearheaded development of company's official website and led the design of a client engaging corporate logo",
        "Analyzed tax exempt aviation equipment, machinery and fuel commodities across 10+ countries and presented a detailed report to executives on local laws to allow for exemptions",
        "Provided post-consulting advice on clearing and forwarding to clients. Assessed factors like safety, cost, transport, and machinery maintenance to minimize harmful environmental emissions and ensure customer retention"
      ]
    },
    {
      title: "Research Fellow",
      company: "University of Nairobi",
      location: "Nairobi, Kenya",
      period: "January 2024 – August 2024",
      details: [
        "Researched on photocatalytic reactor systems for removal of endocrine disrupting compounds (EDCs) in wastewaters",
        "Set up Titanium dioxide (TiO2) oxidants for domestic effluent treatment in Soweto River. Improved downstream water quality by reducing industrial contaminants and dyes by about 70%, protected the public from potential health risks by EDC exposure",
        "Established a workshop development program to train locals on how to use and maintain photocatalytic systems"
      ]
    },
    {
      title: "Lead Volunteer",
      company: "Pacemaker International NGO",
      location: "Nairobi, Kenya",
      period: "January 2023 – May 2023",
      details: [
        "Mentored 1000+ underprivileged students, providing educational support in STEM subjects",
        "Pioneered a self-sustaining school eco-garden sponsoring 34 low-income children through selling of produce",
        "Drafted project proposals to enhance learning environments and sanitation at Edelvale Primary in Kayole slum",
        "Championed community fundraising to secure and install a high-capacity water tank alleviating water shortages"
      ]
    },
    {
      title: "Member",
      company: "National Society of Black Engineers(NSBE)",
      location: "New York, NY",
      period: "June 2025 – Present",
      details: [
        "Participate in technical workshops and industry networking events with Fortune 500 companies empowering Black engineers.",
        "Collaborate with NSBE project teams to solve real-world engineering challenges, applying skills in data analysis and project management."
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-title">
          <h2>My Experience</h2>
          <p>Professional journey and accomplishments</p>
        </div>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-left">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-location">{exp.location}</div>
                </div>
                <div className="experience-right">
                  {exp.period}
                </div>
              </div>
              <div className="experience-details">
                <ul>
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

