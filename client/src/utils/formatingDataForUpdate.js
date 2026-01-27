export const dataFormating = (data) => {
   const projectsFormate = {
     featured: data.featuredProjects || [], 
     other: data.otherProjects || []
   }

    const formattedData = {
      name: data.name,
      email: data.email,
      github: data.github,
      linkedin: data.linkedin,
      address: data.address,
      title: data.title,
      summary: data.summary,
      resumeUrl: data.resumeUrl,
      technologiesWorkWith: data.technologiesWorkWith,
      description: data.description,
      skills: data.skills,
      experiences: data.experiences,
      projects: projectsFormate,
      
    };
  
    return formattedData;
  }
