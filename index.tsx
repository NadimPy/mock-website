/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import type { CSSProperties } from 'react';

// Component Imports
import { AbstractCurveGraphic } from './AbstractCurveGraphic'; // Corrected path
import { CelestialHarmoniesSVG } from './components/CelestialHarmoniesSVG';
import { WhisperingWoodsSVG } from './components/WhisperingWoodsSVG';
import { EphemeralGlyphsSVG } from './components/EphemeralGlyphsSVG';
import { DreamscapesUISVG } from './components/DreamscapesUISVG';
import { HeroAnimationSVG } from './components/HeroAnimationSVG';


type Page = 'home' | 'about' | 'projects' | 'skills' | 'contact';

export interface SVGComponentProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

interface FloatingShapeProps {
  size: number;
  color: string;
  shapeType?: 'sphere' | 'organic1' | 'organic2';
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  opacity?: number;
  animationDelay?: string;
  zIndex?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({
  size,
  color,
  shapeType = 'sphere',
  top,
  left,
  right,
  bottom,
  opacity = 0.15,
  animationDelay = '0s',
  zIndex = -1,
}) => {
  let borderRadius = '50%';
  if (shapeType === 'organic1') {
    borderRadius = '30% 70% 70% 30% / 30% 30% 70% 70%';
  } else if (shapeType === 'organic2') {
    borderRadius = '60% 40% 30% 70% / 50% 60% 40% 50%';
  }

  const shapeStyle: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius,
    position: 'absolute',
    top,
    left,
    right,
    bottom,
    opacity,
    boxShadow: `0 0 ${size / 6}px ${size / 12}px ${color.replace('rgb(', 'rgba(').replace(')', `, ${opacity / 2})`)}`,
    animation: `float ${6 + Math.random() * 4}s ease-in-out infinite ${animationDelay}`,
    zIndex,
    willChange: 'transform',
  };
  return <div style={shapeStyle} aria-hidden="true"></div>;
};

const globalShapesData: FloatingShapeProps[] = [
  { size: 200, color: 'rgba(184, 162, 217, 0.1)', top: '5%', left: '10%', animationDelay: '0s', shapeType: 'organic1' },
  { size: 280, color: 'rgba(160, 210, 235, 0.08)', top: '15%', right: '12%', animationDelay: '1s', shapeType: 'organic2' },
  { size: 120, color: 'rgba(247, 197, 216, 0.12)', top: '55%', left: '8%', animationDelay: '0.5s', shapeType: 'sphere' },
  { size: 300, color: 'rgba(170, 230, 200, 0.07)', bottom: '8%', right: '15%', animationDelay: '1.5s', shapeType: 'organic1' },
  { size: 150, color: 'rgba(255, 223, 186, 0.1)', top: '70%', left: '30%', animationDelay: '0.2s', shapeType: 'sphere' },
  { size: 220, color: 'rgba(176, 200, 230, 0.09)', top: '35%', left: '45%', animationDelay: '1.2s', shapeType: 'organic2' },
];

const aboutMeSnippet = "I'm Aya Saad, a product designer based in Beirut. My journey in design began with a fascination for how objects shape our daily lives. I strive to design products that feel as intuitive as they are beautiful, blending structured thinking with unexpected creative twists.";

interface Project {
  id: string;
  title: string;
  description: string;
  svgComponent: React.FC<SVGComponentProps>;
  link: string;
}

const projectsData: Project[] = [
  { id: "proj1", title: "Celestial Harmonies", description: "An interactive visualizer translating music into flowing nebulae.", svgComponent: CelestialHarmoniesSVG, link: "#project-alpha-details" },
  { id: "proj2", title: "Whispering Woods", description: "A concept art series for an unannounced fantasy game.", svgComponent: WhisperingWoodsSVG, link: "#project-beta-details" },
  { id: "proj3", title: "Ephemeral Glyphs", description: "A collection of animated symbols that react to user interaction.", svgComponent: EphemeralGlyphsSVG, link: "#project-gamma-details" },
  { id: "proj4", title: "Dreamscapes UI", description: "User interface concepts for a meditative application.", svgComponent: DreamscapesUISVG, link: "#project-delta-details" },
];

const skillsData: string[] = [
  "Digital Painting (Photoshop, Procreate, Clip Studio Paint)",
  "Ethereal & Fantasy Illustration",
  "Abstract Concept Art",
  "Gradient Artistry & Advanced Color Theory",
  "Character Design Fundamentals",
  "UI/UX for Dreamlike Interfaces",
  "Motion Graphics Basics (After Effects)",
  "3D Sculpting Basics (Blender)",
  "Vector Graphics & SVG Animation"
];


interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'projects', label: 'Creations' },
    { page: 'skills', label: 'Toolkit' },
    { page: 'contact', label: 'Connect' },
  ];

  return (
    <header className="portfolio-header" role="banner">
      <nav aria-label="Main navigation">
        <button onClick={() => onNavigate('home')} className="nav-logo" aria-label="Go to homepage">Aya Saad</button>
        <ul>
          {navItems.map(item => (
            <li key={item.page}>
              <button
                onClick={() => onNavigate(item.page)}
                className={currentPage === item.page ? 'active-nav-link' : ''}
                aria-current={currentPage === item.page ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const HomePage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
  <>
    {/* Hero Section */}
    <section id="hero" className="hero-section page-section" aria-labelledby="hero-heading">
      <HeroAnimationSVG className="hero-background-animation" />
      <div className="hero-content">
        <h1 id="hero-heading" className="slogan">ethereal concepts, jawdropping creations</h1>
        <p className="name-subtitle">Digital Portfolio for Aya Saad</p>
        <button onClick={() => onNavigate('projects')} className="cta-button">View My Work</button>
      </div>
    </section>

    {/* About Teaser */}
    <section id="home-about" className="home-teaser-section page-section" aria-labelledby="home-about-heading">
      <h2 id="home-about-heading">A Glimpse Into My World</h2>
      <div className="teaser-content">
        <p>{aboutMeSnippet}</p>
        <button onClick={() => onNavigate('about')} className="teaser-cta-button">More About Me</button>
      </div>
    </section>

    {/* Creations Teaser */}
    <section id="home-projects" className="home-teaser-section page-section" aria-labelledby="home-projects-heading">
      <h2 id="home-projects-heading">Recent Creations</h2>
      <div className="projects-grid-teaser">
        {projectsData.slice(0, 2).map((project, index) => (
          <article key={project.id} className="project-card" aria-labelledby={`teaser-project-title-${project.id}`}>
            <div className="project-svg-container">
              <project.svgComponent className="project-svg-graphic" />
            </div>
            <div className="project-info">
              <h3 id={`teaser-project-title-${project.id}`}>{project.title}</h3>
              <p>{project.description.substring(0, 80)}...</p>
              <button onClick={() => onNavigate('projects')} className="project-link" aria-label={`Learn more about ${project.title}`}>View Details</button>
              <FloatingShape size={20} color={`rgba(${Math.random()*50 + 150}, ${Math.random()*50 + 180}, ${Math.random()*50 + 200}, 0.15)`} bottom="5px" right="5px" zIndex={1} animationDelay={`${index * 0.15}s`} shapeType={index % 2 === 0 ? 'sphere' : 'organic1'} />
            </div>
          </article>
        ))}
      </div>
      <button onClick={() => onNavigate('projects')} className="teaser-cta-button">View All Creations</button>
    </section>

    {/* Toolkit Teaser */}
    <section id="home-skills" className="home-teaser-section page-section" aria-labelledby="home-skills-heading">
      <h2 id="home-skills-heading">My Creative Toolkit</h2>
      <div className="teaser-content">
        <ul className="skills-list-teaser">
          {skillsData.slice(0, 4).map(skill => <li key={skill}>{skill}</li>)} {/* Show 4 skills now */}
        </ul>
        <button onClick={() => onNavigate('skills')} className="teaser-cta-button">Explore My Toolkit</button>
      </div>
    </section>

    {/* Connect Teaser */}
    <section id="home-contact" className="home-teaser-section page-section" aria-labelledby="home-contact-heading">
      <h2 id="home-contact-heading">Let's Create Together</h2>
      <div className="teaser-content">
        <p>Interested in collaborating or have a project in mind? I'd love to connect.</p>
        <button onClick={() => onNavigate('contact')} className="teaser-cta-button">Get In Touch</button>
      </div>
    </section>
  </>
);

const AboutPage: React.FC = () => (
  <section id="about" className="page-section about-page-content" aria-labelledby="about-heading">
    <h2 id="about-heading">About Me</h2>
    <div className="section-content-wrapper">
      <FloatingShape size={70} color="rgba(221, 160, 221, 0.08)" top="-35px" left="-45px" zIndex={0} animationDelay="0.3s" shapeType="organic1" />
      
      <article className="about-section-item" aria-labelledby="about-who-i-am">
        <div className="about-text">
          <h3 id="about-who-i-am">1. Who I Am</h3>
          <p>
            I'm Aya Saad, a product designer based in Beirut and a proud graduate of ALBA — the Académie Libanaise des Beaux-Arts. My journey in design began with a fascination for how objects shape our daily lives. Through years of exploration and hands-on experience, I’ve developed a strong foundation in design thinking, aesthetics, and functionality.
          </p>
        </div>
        <div className="about-graphic">
          <AbstractCurveGraphic size={120} strokeColor="rgba(184, 162, 217, 0.6)" variation="one" />
        </div>
      </article>

      <article className="about-section-item" aria-labelledby="about-creative-perspective">
        <div className="about-text">
          <h3 id="about-creative-perspective">2. A Creative Perspective</h3>
          <p>
            I’m known for bringing a unique and artistic edge to every project I take on. With a deep appreciation for both form and emotion, I strive to design products that feel as intuitive as they are beautiful. My style often blends structured thinking with unexpected creative twists — something that reflects both my personality and my process.
          </p>
        </div>
        <div className="about-graphic">
          <AbstractCurveGraphic size={120} strokeColor="rgba(160, 210, 235, 0.6)" variation="two" />
        </div>
      </article>

      <article className="about-section-item" aria-labelledby="about-design-intention">
        <div className="about-text">
          <h3 id="about-design-intention">3. Design With Intention</h3>
          <p>
            For me, design is more than problem-solving; it’s about creating meaningful connections between people and the things they use. Whether I’m working on a concept, prototype, or finished product, I aim to craft experiences that are thoughtful, sustainable, and emotionally resonant.
          </p>
        </div>
        <div className="about-graphic">
          <AbstractCurveGraphic size={120} strokeColor="rgba(247, 197, 216, 0.7)" variation="three" />
        </div>
      </article>
      <FloatingShape size={90} color="rgba(170, 230, 200, 0.06)" bottom="-40px" right="-30px" zIndex={0} animationDelay="0.8s" shapeType="organic2" />
    </div>
  </section>
);

const ProjectsPage: React.FC = () => {
  return (
    <section id="projects" className="page-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading">My Creations</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <article key={project.id} className="project-card" aria-labelledby={`project-title-${project.id}`}>
            <div className="project-svg-container">
              <project.svgComponent className="project-svg-graphic" />
            </div>
            <div className="project-info">
              <h3 id={`project-title-${project.id}`}>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" aria-label={`Learn more about ${project.title}`}>Learn More</a>
              <FloatingShape size={25} color={`rgba(${Math.random()*50 + 150}, ${Math.random()*50 + 180}, ${Math.random()*50 + 200}, 0.15)`} bottom="8px" right="8px" zIndex={1} animationDelay={`${index * 0.15}s`} shapeType={index % 2 === 0 ? 'sphere' : 'organic1'} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const SkillsPage: React.FC = () => (
  <section id="skills" className="page-section" aria-labelledby="skills-heading">
    <h2 id="skills-heading">My Toolkit</h2>
    <div className="section-content-wrapper">
      <FloatingShape size={60} color="rgba(160, 210, 235, 0.07)" top="-15px" right="-30px" zIndex={1} animationDelay="0.6s" shapeType="organic2"/>
      <ul className="skills-list">
        {skillsData.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  </section>
);

const ContactPage: React.FC = () => (
  <section id="contact" className="page-section" aria-labelledby="contact-heading">
    <h2 id="contact-heading">Connect With Me</h2>
    <div className="section-content-wrapper">
      <p>
        I'd love to hear about your ideas, discuss potential collaborations, or just chat about art.
        Feel free to reach out!
      </p>
      <a href="mailto:aya.saad.art@example.com" className="cta-button">Send an Email</a>
      <div className="social-links" aria-label="Social media links">
        <a href="#" aria-label="Aya's ArtStation Profile" target="_blank" rel="noopener noreferrer">ArtStation</a>
        <a href="#" aria-label="Aya's Instagram Profile" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" aria-label="Aya's Behance Profile" target="_blank" rel="noopener noreferrer">Behance</a>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="portfolio-footer" role="contentinfo">
    <p>&copy; {new Date().getFullYear()} Aya Saad. All rights reserved.</p>
    <p>Crafted with ethereal concepts and artistic creations.</p>
  </footer>
);


function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Update document title based on current page for accessibility and SEO
    const pageTitles: Record<Page, string> = {
      home: 'Home | Aya Saad - Product Designer',
      about: 'About Me | Aya Saad',
      projects: 'Creations | Aya Saad',
      skills: 'Toolkit | Aya Saad',
      contact: 'Connect | Aya Saad',
    };
    document.title = pageTitles[currentPage] || 'Aya Saad - Product Designer';
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); 
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="portfolio-container">
      {globalShapesData.map((shape, index) => (
        <FloatingShape key={`global-${index}`} {...shape} />
      ))}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="main-content" role="main" aria-live="polite" aria-atomic="true">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <PortfolioApp />
      </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}