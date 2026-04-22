"use client";

import { motion } from "framer-motion";

const projectData = [
  {
    id: "recallr",
    title: "🧠 Recallr Flashcards",
    repo: "https://github.com/rosenmarkov35/recallr",
    shortDesc:
      "My most advanced project to date — a high-performance spaced-repetition system (SRS) focused on maximizing long-term retention through active recall. Currently in active development with several advanced features in progress.",
    sections: [
      {
        title: "🛠️ Tech Stack & Features",
        content:
          "Built with Next.js, Framer Motion, and Tailwind CSS, Recallr implements a custom SuperMemo-based scheduling engine. It already includes fluid card animations, keyboard-driven workflows, and optimized local state management for near-instant transitions. Ongoing development is focused on expanding the scheduling model, improving scalability, and introducing more advanced study analytics.",
      },
      {
        title: "📊 Key Takeaways",
        content:
          "This project pushed my understanding of state persistence, performance optimization, and algorithmic scheduling. It represents a shift toward building more complex, system-driven applications, with a strong emphasis on responsiveness, accessibility (a11y), and high-efficiency user interaction.",
      },
    ],
  },
  {
    id: "dartone",
    title: "🎯 DartOne",
    repo: "https://github.com/rosenmarkov35/DartOne",
    shortDesc:
      "A web application designed to track darts games and monitor player progress over time.",
    sections: [
      {
        title: "🛠️ Tech Stack & Features",
        content:
          "Built with React and Django REST Framework, DartOne features game tracking, statistical analysis, and responsive design. The backend handles scoring algorithms while the frontend provides an intuitive user experience with live updates and interactive charts for performance visualization.",
      },
      {
        title: "📊 Key Takeaways",
        content:
          "Developing DartOne taught me how to design and implement a complete application with a focus on user interaction and data analysis. I gained experience in handling automated scoring, storing and visualizing historical performance, and frontend design concepts or trends while aiming to minimize friction and create a smooth UX.",
      },
    ],
  },
  {
    id: "standup",
    title: "🤖 StandUP Bot",
    repo: "https://github.com/rosenmarkov35/Discord-StandUP-Bot",
    shortDesc:
      "Python Discord bot with automated standups, ticket management, and timezone-aware scheduling.",
    sections: [
      {
        title: "🤖 Bot Architecture",
        content:
          "Engineered with discord.py, StandUP Bot streamlines team communication through intelligent automation. Some features include timezone-aware scheduling and role-based permissions. The bot thread-based ticket system creates organized workspaces while ensuring data reliability across restarts.",
      },
      {
        title: "⚡ What I learned",
        content:
          "This project taught me how to design and complete a full project architecture from start to finish. I worked with discord.py, making use of the extensive documentation to implement and extend every feature I planned for the project. From the idea of a bot that automates standups to a fully functional product with considerable user-friendly features.",
      },
    ],
  },
  {
    id: "examsite",
    title: "🛒 Exam Site",
    repo: "https://github.com/rosenmarkov35/exam_site",
    shortDesc:
      "First full-stack experience: Django e-commerce site with CRUD operations and PostgreSQL.",
    sections: [
      {
        title: "🛒 E-commerce Foundation",
        content:
          "My first full-stack journey resulted in a comprehensive workout equipment marketplace. Built with Django and PostgreSQL, featuring CRUD operations, user authentication, product reviews, and shopping cart functionality. This project established my understanding of database relationships and user experience flow.",
      },
      {
        title: "💡 Project Insights",
        content:
          "This project taught me how to design and complete a full web application from start to finish. I worked with Django, using its documentation to implement and extend features like the User model, CRUD operations, authentication, and reusable UI components. From the idea of a sports equipment store to a fully functional and user-friendly platform.",
      },
    ],
  },
];

const techIcons = [
  "js.svg",
  "ts.svg",
  "react.svg",
  "next.svg",
  "css.svg",
  "tailwindcss.svg",
  "python.svg",
  "django.svg",
  "html.svg",
];

export default function Home() {
  return (
    <div className="bg-slate-950 w-full text-slate-300 font-sans selection:bg-teal-300/30 selection:text-teal-200 scroll-smooth overflow-x-hidden">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          {/* ================= LEFT COLUMN: STICKY PROFILE ================= */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24 z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <img
                    src="https://github.com/rosenmarkov35.png"
                    alt="Rosen Markov"
                    className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-slate-800"
                  />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-200">
                    Rosen Markov
                  </h1>
                  <h2 className="text-lg font-medium tracking-tight text-teal-400 mt-2">
                    Full-Stack Developer
                  </h2>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <p className="text-slate-400 leading-relaxed">
                  I design and build full-stack web applications that are both
                  performant and user-friendly. My work combines responsive
                  React/Next.js interfaces with Django/Python backends, RESTful
                  APIs, and CRUD systems to deliver seamless experiences that
                  put users first.
                </p>

                <ul className="text-sm text-slate-500 space-y-2 mt-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400">✨</span>
                    Keyboard shortcuts are my only superpower.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400">🎯</span>
                    My aim is to build applications with zero user friction.
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 lg:mt-0"
            >
              <h3 className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techIcons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300"
                  >
                    <img
                      className="w-6 h-6 object-contain"
                      src={`/images/${icon}`}
                      alt={icon.split(".")[0]}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </header>

          {/* ================= RIGHT COLUMN: SCROLLABLE CONTENT ================= */}
          <main className="pt-24 lg:w-7/12 lg:py-24 space-y-32">
            {/* About / Timeline Section */}
            <section id="about">
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-full bg-slate-950/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:backdrop-blur-none">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  About Journey
                </h2>
              </div>

              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-teal-500 text-slate-500 group-hover:text-teal-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
                    📚
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                    <h3 className="font-bold text-slate-200 mb-2">
                      Learning since 2021/22
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      I started learning programming out of pure interest and
                      passion for IT and computers early in 2020. Starting 2021,
                      I took several online software development courses at
                      SoftUni, focusing heavily on Python and gaining a solid
                      foundation in programming and backend development.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-teal-500 text-slate-500 group-hover:text-teal-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
                    🧑🏻‍💻
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                    <h3 className="font-bold text-slate-200 mb-2">
                      What Came Next
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      After completing my courses, I applied my knowledge to
                      numerous projects, honing both frontend and backend
                      skills. I have a strong passion for frontend development
                      and crafting unique, purposeful solutions that focus on
                      user-centered design and real-world problem-solving.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-slate-950/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:backdrop-blur-none">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Featured Projects
                </h2>
              </div>

              <div className="flex flex-col gap-12">
                {projectData.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 will-change-transform hover:bg-slate-900/80 hover:border-teal-500/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors flex items-center gap-2">
                          {project.title}

                          {project.id === "recallr" && (
                            <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                              WIP
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                          {project.shortDesc}
                        </p>
                      </div>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-teal-400 bg-teal-400/10 hover:bg-teal-400/20 px-4 py-2 rounded-full transition-colors shrink-0 whitespace-nowrap"
                      >
                        View Repo
                        <span className="text-lg leading-none">↗</span>
                      </a>
                    </div>

                    <div className="space-y-6">
                      {project.sections.map((sec, idx) => (
                        <div key={idx} className="relative">
                          <h4 className="text-slate-300 font-medium mb-3 flex items-center gap-2 text-sm">
                            {sec.title}
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                            {sec.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
