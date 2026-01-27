import { useState, useContext, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Check, Plus, Trash2 } from 'lucide-react';
import { AuthContext } from '../context/Authcontext.jsx';
import { dataFormating } from '../utils/formatingDataForUpdate.js'

const CustomFormModal = ({ isOpen, onClose }) => {
  const { portfolioData, updatePortfolio } = useContext(AuthContext);
  console.log(portfolioData)
  const [currentStep, setCurrentStep] = useState(0);
  const [contactData, setContactData] = useState({
    name: portfolioData?.name || 'John Doe',
    email: portfolioData?.contactEmail || 'john.doe@example.com',
    github: portfolioData?.githubUrl || 'https://github.com/johndoe',
    linkedin: portfolioData?.linkedinUrl || 'https://linkedin.com/in/johndoe',
    address: portfolioData?.address || 'New York, NY',
    summary: portfolioData?.sortSummary || 'Passionate full-stack developer with 3+ years of experience building modern web applications.',
    resumeUrl: portfolioData?.resumeUrl || ''
  });
  const [aboutData, setAboutData] = useState({});
  const [skillsData, setSkillsData] = useState(portfolioData?.skills || [{
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'Angular.js', 'Tailwind CSS', 'HTML/CSS', 'Redux Toolkit', 'Bootstrap', 'MUI']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs', 'JWT Authentication']
  },
  {
    title: 'Programming Languages',
    skills: ['Java (Core)', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'Tools & Others',
    skills: ['Git/GitHub', 'Docker', 'Postman', 'Figma', 'VS Code', 'Agile/Scrum']
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership']
  }]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);

  // Update form data when portfolioData changes
  useEffect(() => {
    if (portfolioData) {
      setContactData({
        name: portfolioData.name,
        email: portfolioData.email,
        github: portfolioData.github,
        linkedin: portfolioData.linkedin,
        address: portfolioData.address,
        summary: portfolioData.summary,
        resumeUrl: portfolioData.resumeUrl || ''
      });
      setAboutData({
        title: portfolioData.title,
        description: portfolioData.description,
        technologiesWorkWith: portfolioData.technologiesWorkWith
      });
      if (portfolioData.skills?.length > 0) {
        setSkillsData(portfolioData.skills);
      }

      if (portfolioData.projects) {
        setFeaturedProjects(portfolioData.projects.featured || []);
        setOtherProjects(portfolioData.projects.other || []);
      }
      if (portfolioData.experiences?.length > 0) {
        setExperiences(portfolioData.experiences);
      }
    }
  }, [portfolioData]);

  const addFeaturedProject = () => {
    const newProject = {
      id: Date.now(),
      title: '',
      description: '',
      tech: [],
      github: '',
      live: '',
      image: ''
    };
    setFeaturedProjects([...featuredProjects, newProject]);
  };

  const addOtherProject = () => {
    const newProject = {
      id: Date.now(),
      title: '',
      description: '',
      tech: [],
      image: ''
    };
    setOtherProjects([...otherProjects, newProject]);
  };

  const removeFeaturedProject = (id) => {
    setFeaturedProjects(featuredProjects.filter(project => project.id !== id));
  };

  const removeOtherProject = (id) => {
    setOtherProjects(otherProjects.filter(project => project.id !== id));
  };

  const updateFeaturedProject = (id, field, value) => {
    setFeaturedProjects(featuredProjects.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const updateOtherProject = (id, field, value) => {
    setOtherProjects(otherProjects.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      title: '',
      company: '',
      location: '',
      period: '',
      description: '',
      achievements: ['', '', '']
    };
    setExperiences([...experiences, newExperience]);
  };

  const removeExperience = (id) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter(experience => experience.id !== id));
    }
  };

  const updateExperience = (id, field, value) => {
    setExperiences(experiences.map(experience =>
      experience.id === id ? { ...experience, [field]: value } : experience
    ));
  };

  const steps = [
    { id: 'contact', title: 'Contact Info' },
    { id: 'about', title: 'About Me' },
    { id: 'skills', title: 'Expertise' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' }
  ];

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    // Logic to save all data at once
    console.log("Final Data:", dataFormating({ ...contactData, ...aboutData, skills: skillsData, featuredProjects, otherProjects, experiences }));
    updatePortfolio(dataFormating({ ...contactData, ...aboutData, skills: skillsData, featuredProjects, otherProjects, experiences }))
    // toast.success('Portfolio updated successfully!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-xl mx-4 overflow-hidden border border-gray-200 dark:border-gray-700">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Edit Portfolio</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
              Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 flex">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-full transition-all duration-300 ${idx <= currentStep ? 'bg-blue-600 dark:bg-blue-500' : 'bg-transparent'
                }`}
              style={{ width: `${100 / steps.length}%` }}
            />
          ))}
        </div>

        {/* Form Body - Fixed height to prevent jumping */}
        <div className="p-6 min-h-[400px] max-h-[70vh] overflow-y-auto">
          {currentStep === 0 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">GitHub</label>
                  <input
                    type="text"
                    value={contactData.github}
                    onChange={(e) => setContactData({ ...contactData, github: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">LinkedIn</label>
                  <input
                    type="text"
                    value={contactData.linkedin}
                    onChange={(e) => setContactData({ ...contactData, linkedin: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Resume URL</label>
                <input
                  type="url"
                  value={contactData.resumeUrl}
                  onChange={(e) => setContactData({ ...contactData, resumeUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="https://example.com/resume.pdf"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Summary</label>
                <textarea
                  value={contactData.summary}
                  onChange={(e) => setContactData({ ...contactData, summary: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all h-24"
                />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Professional Title</label>
                <input
                  type="text"
                  value={aboutData.title}
                  onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="e.g. Full Stack Developer"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Technologies I Work With</label>
                <input
                  type="text"
                  value={aboutData.technologiesWorkWith}
                  onChange={(e) => {
                    setAboutData({ ...aboutData, technologiesWorkWith: e.target.value.split(',')})
                  }}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  placeholder="e.g. Full Stack Developer"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Description</label>
                <textarea
                  value={aboutData.description}
                  onChange={(e) => setAboutData({ ...aboutData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all h-40"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className='text-blue-600 text-center'>Technical Skills</h3>
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">{skill.title}</label>
                  <input
                    type="text"
                    value={skill.skills}
                    onChange={(e) => {
                      const updatedSkills = [...skillsData];
                      updatedSkills[index].skills = e.target.value.split(',');
                      setSkillsData(updatedSkills);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    placeholder="Enter skills separated by commas"
                  />
                </div>
              ))}

            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              {/* Featured Projects */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Featured Projects</h3>
                  <button
                    onClick={addFeaturedProject}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" /> Add Featured
                  </button>
                </div>

                {featuredProjects.map((project, index) => (
                  <div key={project.id} className="border border-blue-200 dark:border-blue-600 rounded-lg p-4 space-y-4 mb-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-blue-900 dark:text-blue-300">Featured Project {index + 1}</h4>
                      <button
                        onClick={() => removeFeaturedProject(project.id)}
                        className="p-1 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Project Title</label>
                      <input
                        type="text"
                        value={project.title || ''}
                        onChange={(e) => updateFeaturedProject(project.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Live Link</label>
                        <input
                          type="url"
                          value={project.live || ''}
                          onChange={(e) => updateFeaturedProject(project.id, 'live', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">GitHub Link</label>
                        <input
                          type="url"
                          value={project.github || ''}
                          onChange={(e) => updateFeaturedProject(project.id, 'github', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Image URL</label>
                      <input
                        type="url"
                        value={project.image || ''}
                        onChange={(e) => updateFeaturedProject(project.id, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Technologies</label>
                      <input
                        type="text"
                        value={project.tech}
                        onChange={(e) => updateFeaturedProject(project.id, 'tech', e.target.value.split(','))}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="React, Node.js, MongoDB..."
                      />
                    </div>
                   
                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Project Description</label>
                      <textarea
                        value={project.description || ''}
                        onChange={(e) => updateFeaturedProject(project.id, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all h-20"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Other Projects */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Other Projects</h3>
                  <button
                    onClick={addOtherProject}
                    className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" /> Add Other
                  </button>
                </div>

                {otherProjects.map((project, index) => (
                  <div key={project.id} className="border border-green-200 dark:border-green-600 rounded-lg p-4 space-y-4 mb-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-green-900 dark:text-green-300">Other Project {index + 1}</h4>
                      <button
                        onClick={() => removeOtherProject(project.id)}
                        className="p-1 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Project Title</label>
                      <input
                        type="text"
                        value={project.title || ''}
                        onChange={(e) => updateOtherProject(project.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Image URL</label>
                      <input
                        type="url"
                        value={project.image || ''}
                        onChange={(e) => updateOtherProject(project.id, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Technologies</label>
                      <input
                        type="text"
                        value={project.tech}
                        onChange={(e) => updateOtherProject(project.id, 'tech', e.target.value.split(','))}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="React, Node.js, MongoDB..."
                      />
                    </div>
                   
                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Project Description</label>
                      <textarea
                        value={project.description || ''}
                        onChange={(e) => updateOtherProject(project.id, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all h-20"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h3>
              </div>

              {experiences.map((experience, index) => (
                <div key={experience.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-900 dark:text-white">Experience {index + 1}</h4>
                    {experiences.length > 1 && (
                      <button
                        onClick={() => removeExperience(experience.id)}
                        className="p-1 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Job Title</label>
                      <input
                        type="text"
                        value={experience.title || ''}
                        onChange={(e) => updateExperience(experience.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Company</label>
                      <input
                        type="text"
                        value={experience.company || ''}
                        onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Location</label>
                      <input
                        type="text"
                        value={experience.location || ''}
                        onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Period</label>
                      <input
                        type="text"
                        value={experience.period || ''}
                        onChange={(e) => updateExperience(experience.id, 'period', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="e.g. Jan 2022 - Present"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Description</label>
                    <textarea
                      value={experience.description || ''}
                      onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all h-20"
                      placeholder="Describe your role and responsibilities..."
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block text-gray-700 dark:text-gray-300">Achievements</label>
                    {(experience.achievements || ['', '', '']).map((achievement, achIndex) => (
                      <input
                        key={achIndex}
                        type="text"
                        value={achievement}
                        onChange={(e) => {
                          const newAchievements = [...(experience.achievements || ['', '', ''])];
                          newAchievements[achIndex] = e.target.value;
                          updateExperience(experience.id, 'achievements', newAchievements);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all mb-2"
                        placeholder={`Achievement ${achIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={addExperience}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" /> Add New Experience
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${currentStep === 0
              ? 'opacity-0 pointer-events-none'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              onClick={handleFinalSubmit}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Finish <Check className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomFormModal;