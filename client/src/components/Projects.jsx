import { ExternalLink, Github, Folder } from 'lucide-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/Authcontext.jsx';
import { defaultProjectsData } from '../utils/DefaultPortfolioData.js';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const { portfolioData } = useContext(AuthContext);
  const projectsData = portfolioData?.projects || defaultProjectsData;
  const featuredProjects = projectsData.featured || defaultProjectsData.featured;
  const otherProjects = projectsData.other || defaultProjectsData.other;
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showFeaturedProjects, setShowFeaturedProjects] = useState(false);
  const displayedOtherProjects = showAllProjects ? otherProjects : otherProjects.slice(0, 3);
  const displayedFeaturedProjects = showFeaturedProjects ? featuredProjects : featuredProjects.slice(0, 2);
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary font-mono text-lg mr-2">03.</span>
            Things I've Built
          </h2>

          <div className="w-20 h-1 bg-primary rounded-full mb-12" />

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {displayedFeaturedProjects.map((project, index) => (
              <div
                key={project.title}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'
                  }`}
              >
                <div className={`md:col-span-7 ${index % 2 === 1 ?  '' : 'md:col-start-6'}`}>
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
                    {project.image && (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                      </>
                    )}
                  </div>
                </div>
                <div
                  className={`md:col-span-6 md:absolute ${index % 2 === 1 ? 'md:right-0' : 'md:left-0'
                    } z-10 w-full`}
                >
                  <div className={`${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                    <div className="bg-card p-6 rounded-lg shadow-card mb-4 border border-border">
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                   </div>
                  <div className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${index % 2 === 1 ? 'md:justify-end':'md:justify-start' }`}>
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                 
                  <div className={`flex gap-4 ${index % 2 === 1 ?  'md:justify-end' : 'md:justify-start'}`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {featuredProjects.length > 2 && (
              <div className="text-center">
                <button
                  onClick={() => setShowFeaturedProjects(!showFeaturedProjects)}
                  className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg font-medium"
                >
                  {showFeaturedProjects ? 'Show Less' : `See More (${featuredProjects.length - 2} more)`}
                </button>
              </div>
            )}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedOtherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {otherProjects.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg font-medium"
              >
                {showAllProjects ? 'Show Less' : `See More (${otherProjects.length - 3} more)`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
