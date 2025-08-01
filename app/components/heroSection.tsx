"use client";

import { Download, Github, Linkedin, MapPin } from "lucide-react";
import React from "react";
import { Button } from "./shared/ui/button";
import Image from "next/image";
import myAvatar from "../../public/photo_2023-04-27_14-16-11.jpg";


const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1K0hN6CwEseeFFu1LcBpd2e8DnZhcE3tf/view?usp=sharing";
    link.download = "Ahmed_Sameh_Resume.pdf";
    link.click();
  };
  return (
    <section id="home" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                Available for work
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-100">Ahmed Sameh</h1>
              <h2 className="text-xl lg:text-2xl text-slate-400 font-medium">Full-Stack Developer</h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                I'm a passionate front-end developer who builds modern, responsive web applications using React, Next.js, Tailwind CSS v4, and ShadCN UI. I focus on writing clean code, reusable
                components, and delivering smooth user experiences. I use Supabase for managing backend and authentication. Always learning, always building.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-slate-400">
              <MapPin className="h-4 w-4" />
              <span>Cairo, Egypt</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={downloadResume} className="bg-slate-700 hover:bg-slate-600 text-slate-100 px-6 py-2 rounded-lg font-medium transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100 px-6 py-2 rounded-lg font-medium bg-transparent" asChild>
                <a href="https://www.linkedin.com/in/ahmedsamehazouz/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100 px-6 py-2 rounded-lg font-medium bg-transparent" asChild>
                <a href="https://github.com/Ahmedsamehm" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl overflow-hidden bg-slate-800 shadow-xl">
                <Image src={myAvatar} alt="Ahmed Sameh" width={288} height={288} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-slate-700 rounded-xl flex items-center justify-center text-slate-300 shadow-lg">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
