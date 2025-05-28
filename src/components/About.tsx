import React from "react";
import { Code, Layout, Database, Sparkles, Palette } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      id: 1,
      icon: <Code size={24} />,
      title: "Frontend Development",
      description:
        "Building responsive websites React, and modern CSS frameworks.",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
      ],
    },
    {
      id: 2,
      icon: <Database size={24} />,
      title: "Backend Development",
      description: "Creating robust APIs and server-side applications.",
      technologies: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
    },
    {
      id: 3,
      icon: <Layout size={24} />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences.",
      technologies: ["Figma", "Design Systems"],
    },
    {
      id: 4,
      icon: <Sparkles size={24} />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications.",
      technologies: ["React Native", "TypeScript", "Redux", "Jest/Detox"],
    },
    {
      id: 5,
      icon: <Palette size={24} />,
      title: "DevOps",
      description: "Automating deployment and infrastructure management.",
      technologies: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    },
    // {
    //   id: 6,
    //   icon: <Laptop size={24} />,
    //   title: 'Testing',
    //   description: 'Ensuring application quality and reliability.',
    //   technologies: ['Jest', 'Cypress', 'Testing Library', 'Selenium']
    // }
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Who I am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a dedicated software developer with a B.Tech degree (2024) and
              one year of professional experience at a data analytics company.
              Specializing in JavaScript, React.js, and responsive design, I’ve
              collaborated with teams to build scalable, user-friendly web
              applications that solve complex challenges and deliver impactful
              digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My passion for clean, efficient code drives me to embrace agile
              methodologies and create solutions that prioritize user needs.
              Beyond coding, I find inspiration in strategizing over a
              chessboard and playing the piano, blending creativity and
              precision to approach both my work and life with a fresh
              perspective.
            </p>
          </div>
          <div className="order-first lg:order-last flex justify-center items-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg">
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="p-6 rounded-lg transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-xl dark:hover:shadow-gray-800/50 group"
              >
                <div className="p-4 rounded-full bg-teal-500/10 text-teal-500 w-fit mb-4 transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{skill.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
