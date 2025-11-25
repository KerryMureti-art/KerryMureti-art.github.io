const Skills = () => {
  const skillCategories = [
    {
      icon: "fas fa-code",
      title: "Programming & Development",
      skills: ["Python", "C/C++", "Arduino", "pandas", "NumPy", "Matplotlib", "pygame"]
    },
    {
      icon: "fas fa-drafting-compass",
      title: "CAD & Design Tools",
      skills: ["SolidWorks", "Fusion360", "3D Printing", "CAD Modeling", "Prototyping"]
    },
    {
      icon: "fas fa-industry",
      title: "Manufacturing & Fabrication",
      skills: ["CNC Mills", "Waterjet Cutting", "Laser Cutting", "Carbon Fiber", "Composite Materials"]
    },
    {
      icon: "fas fa-cogs",
      title: "Engineering Specialties",
      skills: ["Mechanical Design", "Automotive Engineering", "Aerodynamics", "Motor Control Systems", "Torque Analysis", "System Integration"]
    },
    {
      icon: "fas fa-flask",
      title: "Research & Analysis",
      skills: ["Photocatalytic Systems", "Environmental Engineering", "Data Analysis", "Research Methodologies", "Technical Writing"]
    },
    {
      icon: "fas fa-tools",
      title: "Developer & Productivity Tools",
      skills: ["VS Code", "Visual Studio", "Google Cloud Platform", "Microsoft Office", "Google Workspace", "Notion", "Slack", "Quartzy"]
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
          <p>Technical expertise and capabilities</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

