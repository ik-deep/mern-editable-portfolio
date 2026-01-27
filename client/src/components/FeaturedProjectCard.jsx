import { ExternalLink, Github } from 'lucide-react';

const FeaturedProjectCard = ({ project, index }) => {
  const isReversed = index % 2 === 1;

  return (
    <div className={`grid lg:grid-cols-12 gap-8 items-center group ${isReversed ? 'lg:text-right' : ''}`}>
      {/* Project Image */}
      <div className={`lg:col-span-7 ${isReversed ? 'lg:col-start-6' : ''}`}>
        <div className="relative aspect-video rounded-xl overflow-hidden bg-muted group-hover:shadow-2xl transition-all duration-500">
          {project.image && (
            <>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
            </>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-4`}>
        <p className="text-primary font-mono text-sm">Featured Project</p>
        
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <div className="bg-card p-6 rounded-lg shadow-lg border border-border group-hover:border-primary/30 transition-all duration-300">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className={`flex flex-wrap gap-3 ${isReversed ? 'lg:justify-start' : 'lg:justify-end'}`}>
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={`flex gap-4 ${isReversed ? 'lg:justify-start' : 'lg:justify-end'}`}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;