import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* About Me Section */}
      <section className="about-section">
        <div className="container about-container">
          <div className="about-image-wrapper">
            <img src="/images/about_me.jpg" alt="About Me" className="about-image" />
          </div>
          <div className="about-content">
            <h1 className="section-title">About Me</h1>
            <p className="about-text">
              I'm a student in the final year of my Games Design and Programming degree studying at Staffordshire University with experience in Low-Level/Systems Game Development. I excel in group envrionments, activities and enjoy facing technical problems to conquer. I am very keen to learn and am excited by new skills and challenging environments.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="technical-skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {/* Unity Engine */}
            <div className="skill-card">
              <h3 className="skill-title">Unity Engine 2017 – 6000.1</h3>
              <ul className="skill-list">
                <li>7 years of comprehensive experience developing scalable systems, multiplayer architectures, and core mechanics using C# and advanced (OOP) principles.</li>
                <li>Engineered decoupled, adaptive Artificial Intelligence systems. Integrated Case-Based Reasoning (CBR) memory buffers with interface-driven Finite State Machines (State Design Pattern) to achieve dynamic, "one-shot learning" NPC behaviors without "spaghetti code."</li>
                <li>Highly adaptable in collaborative, version-controlled environments. Proven ability to enforce strict naming conventions, modular component design, and clean code practices across both solo research and group projects.</li>
              </ul>
            </div>

            {/* Unreal Engine */}
            <div className="skill-card">
              <h3 className="skill-title">Unreal Engine 5</h3>
              <ul className="skill-list">
                <li>3 years of experience spanning both C++ and advanced Blueprint visual scripting.</li>
                <li>Designed multiplayer-safe, event-driven architectures. Successfully decoupled server-side game states from client-side UI using Event Dispatchers and strict Dependency Injection to prevent variable shadowing and race conditions.</li>
                <li>Engineered AAA-standard, fully gamepad-navigable UMG interfaces. Highly focused on UI performance optimization: eliminated Event Tick bindings, prevented layout invalidation waves using structural "Math Walls" (Size Boxes), and utilized Render Transforms for layout-safe focus animations.</li>
                <li>Managed complex level transitions within World Partition environments, including dynamic Data Layer management and asynchronous streaming validation loops to mask hard travels.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
