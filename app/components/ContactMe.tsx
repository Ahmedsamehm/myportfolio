"use client";

import { Download, Mail } from "lucide-react";
import React from "react";
import { Button } from "./shared/ui/button";

const ContactMe = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1K0hN6CwEseeFFu1LcBpd2e8DnZhcE3tf/view?usp=sharing";
    link.download = "Ahmed_Sameh_Resume.pdf";
    link.click();
  };
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Work Together</h3>
        <p className="text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just want to say hello.
        </p>
        <div className="flex justify-center gap-6">
          <Button size="lg" className="bg-slate-700 hover:bg-slate-600 text-slate-100 px-8 py-3 rounded-lg font-medium" asChild>
            <a href="mailto:ahmedsamehazouz@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100 px-8 py-3 rounded-lg font-medium bg-transparent"
            onClick={downloadResume}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
