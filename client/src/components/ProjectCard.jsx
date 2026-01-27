import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, className = "" }) => {
  const { title, description, tech, github: githubUrl, live: liveUrl, image } = project;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 ease-out hover:shadow-card-hover hover:-translate-y-2 hover:border-accent/50 ${className}`}
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Action buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tech?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-accent/50 text-accent-foreground border border-accent/30 transition-colors duration-300 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 -z-10" />
    </div>
  );
};

export default ProjectCard;