const Projects = () => {
  const projects = [
    {
      title: "Assistive Mobility Airport Wheelchair",
      image: "https://placehold.co/400x300/1a73e8/ffffff?text=Assistive+Mobility",
      description: "Currently leading the development of a motorized stroller attachment for airport wheelchairs. Features include Kelly motor controller programming, pressure-sensitive regenerative foot pedal system, and 5:1 planetary gear reduction for optimal torque delivery.",
      tags: ["Python", "Motor Control", "CAD Design", "Battery Integration", "Torque Analysis"]
    },
    {
      title: "Plants vs. Zombies Interactive Multiplayer Game",
      image: "https://placehold.co/400x300/1a73e8/ffffff?text=PvZ+Game",
      description: "Fabricated a physical interactive game with rack and pinion actuators, 3D printed responsive zombie targets with laser sensors, and wireless pea shooter. Real-time Arduino programming for score tracking and servo motor control.",
      tags: ["Arduino", "C++", "3D Printing", "Servo Motors", "Laser Sensors", "Mechanical Actuators"]
    },
    {
      title: "Non-Invasive Hyperhidrosis Treatment Device",
      image: "https://placehold.co/400x300/1a73e8/ffffff?text=Hyperhidrosis+Device",
      description: "Developing a wearable prototype that delivers localized ultrasound or electromagnetic stimuli to modulate cutaneous thermoreceptors and regulate sweat gland activity. Includes medical data modeling and ergonomic design validation.",
      tags: ["SolidWorks", "Medical Device Design", "3D Prototyping", "Biomedical Engineering", "User Testing"]
    },
    {
      title: "Photocatalytic Water Treatment System",
      image: "https://placehold.co/400x300/1a73e8/ffffff?text=Photocatalytic+System",
      description: "Researched and implemented TiO2 oxidant systems for domestic effluent treatment in Nairobi River. Achieved 70% reduction in industrial contaminants and developed training programs for local communities on system maintenance.",
      tags: ["Environmental Engineering", "Water Treatment", "Chemical Processes", "Community Training", "Research"]
    },
    {
      title: "Formula Racing Aerodynamic Components",
      image: "https://placehold.co/400x300/1a73e8/ffffff?text=Formula+Racing",
      description: "Developed manufacturing procedures for carbon fiber aerodynamic components achieving 15% weight-to-strength improvement. Integrated aerodynamic design with chassis systems and optimized manufacturing processes to reduce production time by 30%.",
      tags: ["Carbon Fiber", "Aerodynamics", "CNC Machining", "Composite Materials", "Racing Engineering"]
    },
    {
      title: "Community Development & STEM Education",
      image: "https://placehold.co/400x300/1a73e8/ffffff?text=Community+Impact",
      description: "Mentored 1000+ underprivileged students in STEM subjects and pioneered a self-sustaining school eco-garden that sponsors 34 low-income children. Led fundraising efforts for water infrastructure improvements.",
      tags: ["STEM Education", "Community Development", "Project Management", "Sustainable Agriculture", "Fundraising"]
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Engineering solutions and innovations</p>
        </div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

