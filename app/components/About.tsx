import React from "react";

const About = () => {

    
  const skills = ["React", "Next.js", "Tailwind CSS", "ShadCN UI", "Supabase", "TypeScript", "JavaScript", "HTML", "CSS"];
  return (
    <section id="about" className="py-16 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">About Me</h3>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. I enjoy creating efficient, scalable solutions and learning new technologies to solve complex problems.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-slate-800 rounded-lg p-4 text-center hover:bg-slate-700 transition-colors">
              <span className="text-slate-200 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
