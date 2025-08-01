import React from "react";
import aiResume from "../../public/resume.png";
import e_commerce from "../../public/e-commerce.png";
import dashBoard from "../../public/dashBoard.png";
import gameReviews from "../../public/gaming.png";
import { Button } from "./shared/ui/button";

import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./shared/ui/card";
import { Badge } from "./shared/ui/badge";

const projects = [
  {
    id: 1,
    title: "AI Resume Builder",
    shortDesc: "Smart resume creation with AI assistance",
    description: "An intelligent platform that helps users create professional resumes with AI-powered content suggestions and smart formatting.",
    technologies: ["Next.js", "React", "AI/ML", "TypeScript"],
    githubUrl: "https://github.com/Ahmedsamehm/AiResumeBuilder",
    liveUrl: "https://ai-resume-builder-tau-sandy.vercel.app/",
    image: aiResume,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    shortDesc: "Complete online shopping solution",
    description: "A full-featured e-commerce platform with product management, shopping cart, and secure payment processing.",
    technologies: ["Next.js", "React", "Supabase", "Stripe"],
    githubUrl: "https://github.com/Ahmedsamehm/E-CommerceWebSite",
    liveUrl: "https://e-commerce-eight-tau-10.vercel.app/",
    image: e_commerce,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    shortDesc: "Real-time data visualization",
    description: "A comprehensive dashboard with real-time data visualization, interactive charts, and business intelligence tools.",
    technologies: ["Next.js", "React", "Chart.js", "Supabase"],
    githubUrl: "https://github.com/Ahmedsamehm/Hottest-Dashboard",
    liveUrl: "https://hottest-dashboard.vercel.app/dashBoard",
    image: dashBoard,
  },
  {
    id: 4,
    title: "Game Reviews Hub",
    shortDesc: "Gaming community platform",
    description: "A platform where users can discover, review, and rate games with detailed reviews and social interactions.",
    technologies: ["Next.js", "React", "Supabase", "TypeScript"],
    githubUrl: "https://github.com/Ahmedsamehm/GAME-REVIEWS",
    liveUrl: "#",
    image: gameReviews,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">Featured Projects</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">Here are some of my recent projects that showcase my skills in web development and problem-solving.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="icon" className="bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded-lg" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button variant="secondary" size="icon" className="bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded-lg" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-slate-100 group-hover:text-slate-50 transition-colors">{project.title}</h4>
                  <p className="text-slate-400 text-sm font-medium">{project.shortDesc}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="bg-slate-700 text-slate-300 hover:bg-slate-600 text-xs px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                  <span>View Project</span>
                  <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
