"use client";

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  type ProjectKey = keyof typeof projectData;

  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);

  // Handle clicking outside to close project details
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        activeProject &&
        target &&
        !target.closest(".project-container") &&
        !target.closest(".project-trigger")
      ) {
        setActiveProject(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeProject]);

  const slideVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      originY: 0,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      originY: 0,
      transition: {
        duration: 0.4,
        ease: easeInOut,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      originY: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const projectData = {
    dartone: {
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
    standup: {
      sections: [
        {
          title: "🤖 Bot Architecture",
          content:
            "Engineered with discord.py, StandUP Bot streamlines team communication through intelligent automation. Some features include timezone-aware scheduling and role-based permissions. The bot&apos;s thread-based ticket system creates organized workspaces while ensuring data reliability across restarts.",
        },
        {
          title: "⚡ What I learned",
          content:
            "This project taught me how to design and complete a full project architecture from start to finish. I worked with discord.py, making use of the extensive documentation to implement and extend every feature I planned for the project. From the idea of a bot that automates standups to a fully functional product with considerable user-friendly features.",
        },
      ],
    },
    factorio: {
      sections: [
        {
          title: "🏭 Calculator Design",
          content:
            "A Next.js production calculator that brings clarity to Factorio&apos;s complex manufacturing chains. Built from passion for the game&apos;s engineering puzzles, it features intuitive ratio calculations, resource planning, and a clean interface that outshines existing tools in both aesthetics and functionality.",
        },
        {
          title: "🎯 Development Vision",
          content:
            "Currently in active development with a solid foundation ready for expansion. The project demonstrates problem-solving through user-centered design and focus on ease of use. Turning spreadsheet-heavy planning into an elegant web experience. Each feature is designed to help with the strategic depth of the game Factorio.",
        },
      ],
    },
    examsite: {
      sections: [
        {
          title: "🛒 E-commerce Foundation",
          content:
            "My first full-stack journey resulted in a comprehensive workout equipment marketplace. Built with Django and PostgreSQL, featuring CRUD operations, user authentication, product reviews, and shopping cart functionality. This project established my understanding of database relationships and user experience flow.",
        },
        {
          title: "📈 Learning Milestone",
          content:
            "As a course capstone project, this e-commerce platform marked my transition from theory to practical application. The experience of building user registration, payment processing, and inventory management taught me the importance of data validation, security considerations, and scalable architecture patterns.",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <h1 className="mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
        Rosen Markov&apos;s portfolio
      </h1>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <div className="h-[70vh] grid grid-cols-3 grid-rows-4 gap-2 grid-flow-col">
          {/* Profile Section */}
          <div className="col-span-1 row-span-4 rounded-2xl border border-white/15 p-4">
            <div className="w-full flex">
              <div
                style={{ boxShadow: "inset 0 0 10px 2px rgba(0,0,0,0.8)" }}
                className="rounded-full min-w-[150px] h-[150px] flex items-center justify-center"
              >
                <img
                  src="https://github.com/rosenmarkov35.png"
                  alt="Portfolio Image"
                  className="rounded-full w-[150px] h-[150px] -z-[1] object-cover"
                />
              </div>

              <div className="flex flex-col w-max ml-4">
                <h1 className="border-b border-white/20 text-md mb-4 h-max pb-2">
                  Hey 👋 I&apos;m Rosen
                </h1>
                <ul className="border-b border-white/10 text-[13px] h-max pb-2">
                  <li className="mb-2">
                    ✨ Keyboard shortcuts are my only superpower.
                  </li>
                  <li className="mb-2">
                    🎯 My aim is to build applications with no user friction
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex flex-col justify-evenly">
              <p className="text-md hover:text-white/90 transition-all duration-200 ease-in-out text-white/60">
                I design and build full-stack web applications that are both performant and user-friendly. My work combines responsive React/Next.js interfaces with Django/Python backends, RESTful APIs, and CRUD systems to deliver seamless experiences that put users first.
              </p>
              <div className="flex justify-evenly mt-8 flex-wrap gap-2">
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/js.svg"
                  alt="js icon"
                />
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/ts.svg"
                  alt="ts icon"
                />
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/react.svg"
                  alt="react icon"
                />
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/next.svg"
                  alt="next icon"
                />
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/css.svg"
                  alt="css icon"
                />
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/tailwindcss.svg"
                  alt="tailwindcss icon"
                />
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/python.svg"
                  alt="python icon"
                />
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/django.svg"
                  alt="django icon"
                />
                <img
                  className="w-[9%] min-w-[24px] cursor-pointer hover:scale-115 transition-all duration-200"
                  src="/images/html.svg"
                  alt="html icon"
                />
              </div>
            </div>
          </div>

          {/* Animated content sections */}
          <AnimatePresence mode="wait">
            {!activeProject ? (
              <>
                <motion.div
                  key="learning"
                  className="col-span-1 row-span-2 rounded-2xl border border-white/15 p-4"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h1 className="border-b border-white/20 pb-2">
                    📚 Learning since 2021/22
                  </h1>
                  <p className="text-sm text-white/60 mt-4">
                    I started learning programming out of pure interest and
                    passion for IT and computers early in 2020. Starting 2021, I
                    took several online software development courses at SoftUni,
                    focusing heavily on Python and gaining a solid foundation in
                    programming and backend development.
                  </p>
                </motion.div>
                <motion.div
                  key="next"
                  className="col-span-1 row-span-2 rounded-2xl border border-white/15 p-4"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                >
                  <h1 className="border-b border-white/20 pb-2">
                    🧑🏻‍💻 What Came Next
                  </h1>
                  <p className="text-sm text-white/60 mt-4">
                    After completing my courses, I applied my knowledge to
                    numerous projects, honing both frontend and backend skills.
                    I have a strong passion for frontend development and
                    crafting unique, purposeful solutions that focus on
                    user-centered design and real-world problem-solving.
                  </p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  key={`${activeProject}-section1`}
                  className="project-container col-span-1 row-span-2 rounded-2xl border border-white/15 p-4"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h1 className="border-b border-white/20 pb-2">
                    {projectData[activeProject]?.sections[0]?.title}
                  </h1>
                  <p className="text-sm text-white/60 mt-4">
                    {projectData[activeProject]?.sections[0]?.content}
                  </p>
                </motion.div>
                <motion.div
                  key={`${activeProject}-section2`}
                  className="project-container col-span-1 row-span-2 rounded-2xl border border-white/15 p-4"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                >
                  <h1 className="border-b border-white/20 pb-2">
                    {projectData[activeProject]?.sections[1]?.title}
                  </h1>
                  <p className="text-sm text-white/60 mt-4">
                    {projectData[activeProject]?.sections[1]?.content}
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Project Cards */}
          <motion.div
            className={`${
              activeProject === "dartone" && "border-white/50"
            } project-trigger p-4 col-span-1 row-span-1 rounded-2xl border border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
            onClick={() =>
              setActiveProject(activeProject === "dartone" ? null : "dartone")
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <h1 className="">🎯 DartOne</h1>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rosenmarkov35/DartOne" className="text-xs text-white/40 cursor-pointer hover:underline">View Repo</a>
              <motion.span
                className="text-white/50 text-sm"
                animate={{ rotate: activeProject === "dartone" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>
            <p className="text-sm text-white/60">
              A web application designed to track darts games and monitor player
              progress over time.
            </p>
          </motion.div>

          <motion.div
            className={`${
              activeProject === "standup" && "border-white/50"
            } project-trigger p-4 col-span-1 row-span-1 rounded-2xl border border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
            onClick={() =>
              setActiveProject(activeProject === "standup" ? null : "standup")
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <h1 className="">🤖 StandUP Bot</h1>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rosenmarkov35/Discord-StandUP-Bot" className="text-xs text-white/40 cursor-pointer hover:underline">View Repo</a>
              <motion.span
                className="text-white/50 text-sm"
                animate={{ rotate: activeProject === "standup" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>
            <p className="text-sm text-white/60">
              Python Discord bot with automated standups, ticket management, and
              timezone-aware scheduling.
            </p>
          </motion.div>

          <motion.div
            className={`${
              activeProject === "factorio" && "border-white/50"
            } project-trigger p-4 col-span-1 row-span-1 rounded-2xl border border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
            onClick={() =>
              setActiveProject(activeProject === "factorio" ? null : "factorio")
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <h1 className="">🏭 Factorio Calculator</h1>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rosenmarkov35/Factorio-Calculator" className="text-xs text-white/40 cursor-pointer hover:underline">View Repo</a>
              <motion.span
                className="text-white/50 text-sm"
                animate={{ rotate: activeProject === "factorio" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>
            <p className="text-sm text-white/60">
              Next.js production calculator with sleek design, built from
              passion for the game&apos;s complexity.
            </p>
          </motion.div>

          <motion.div
            className={`${
              activeProject === "examsite" && "border-white/50"
            } project-trigger p-4 col-span-1 row-span-1 rounded-2xl border border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
            onClick={() =>
              setActiveProject(activeProject === "examsite" ? null : "examsite")
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <h1 className="">🛒 Exam Site</h1>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rosenmarkov35/exam_site" className="text-xs text-white/40 cursor-pointer hover:underline">View Repo</a>

              <motion.span
                className="text-white/50 text-sm"
                animate={{ rotate: activeProject === "examsite" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>
            <p className="text-sm text-white/60">
              First full-stack experience: Django e-commerce site with CRUD
              operations and PostgreSQL.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden space-y-6">
        {/* Profile Section - Mobile */}
        <div className="rounded-2xl border border-white/15 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div
              style={{ boxShadow: "inset 0 0 10px 2px rgba(0,0,0,0.8)" }}
              className="rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex items-center justify-center flex-shrink-0"
            >
              <img
                src="https://github.com/rosenmarkov35.png"
                alt="Portfolio Image"
                className="rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] -z-[1] object-cover"
              />
            </div>

            <div className="flex flex-col text-center sm:text-left">
              <h1 className="border-b border-white/20 text-lg mb-4 pb-2">
                Hey 👋 I&apos;m Rosen
              </h1>
              <ul className="border-b border-white/10 text-sm pb-2 space-y-1">
                <li>✨ Still trying to center divs since 2022</li>
                <li>
                  🎯 My aim is to build applications with no user friction
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm md:text-base text-white/60 hover:text-white/90 transition-all duration-200 ease-in-out mb-6">
              I&apos;m a software engineer passionate about building responsive
              web apps. I work with React and Next.js for dynamic UIs and have
              built full-stack projects using Django and Python, implementing
              REST APIs, CRUD features, and clean backend logic.
            </p>

            <div className="grid grid-cols-5 sm:grid-cols-9 gap-3 justify-items-center">
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/js.svg"
                alt="js icon"
              />
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/ts.svg"
                alt="ts icon"
              />
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/react.svg"
                alt="react icon"
              />
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/next.svg"
                alt="next icon"
              />
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/css.svg"
                alt="css icon"
              />
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/tailwindcss.svg"
                alt="tailwindcss icon"
              />
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/python.svg"
                alt="python icon"
              />
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/django.svg"
                alt="django icon"
              />
              <img
                className="w-8 h-8 cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/html.svg"
                alt="html icon"
              />
            </div>
          </div>
        </div>

        {/* About Sections - Mobile */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/15 p-4 md:p-6">
            <h1 className="border-b border-white/20 pb-2 mb-4">
              📚 Learning since 2021/22
            </h1>
            <p className="text-sm md:text-base text-white/60">
              I started learning programming out of pure interest and passion
              for IT and computers early in 2020. Starting 2021, I took several
              online software development courses at SoftUni, focusing heavily
              on Python and gaining a solid foundation in programming and
              backend development.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 p-4 md:p-6">
            <h1 className="border-b border-white/20 pb-2 mb-4">
              🧑🏻‍💻 What Came Next
            </h1>
            <p className="text-sm md:text-base text-white/60">
              After completing my courses, I applied my knowledge to numerous
              projects, honing both frontend and backend skills. I have a strong
              passion for frontend development and crafting unique, purposeful
              solutions that focus on user-centered design and real-world
              problem-solving.
            </p>
          </div>
        </div>

        {/* Project Details - Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={activeProject ? "visible" : "hidden"}
          className="overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {activeProject && (
              <div className="space-y-4 pb-4">
                <motion.div
                  key={`${activeProject}-section1-mobile`}
                  className="project-container rounded-2xl border border-white/15 p-4 md:p-6"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h1 className="border-b border-white/20 pb-2 mb-4">
                    {projectData[activeProject]?.sections[0]?.title}
                  </h1>
                  <p className="text-sm md:text-base text-white/60">
                    {projectData[activeProject]?.sections[0]?.content}
                  </p>
                </motion.div>
                <motion.div
                  key={`${activeProject}-section2-mobile`}
                  className="project-container rounded-2xl border border-white/15 p-4 md:p-6"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                >
                  <h1 className="border-b border-white/20 pb-2 mb-4">
                    {projectData[activeProject]?.sections[1]?.title}
                  </h1>
                  <p className="text-sm md:text-base text-white/60">
                    {projectData[activeProject]?.sections[1]?.content}
                  </p>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid - Mobile */}
        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div
            className={`${
              activeProject === "dartone" && "border-white/50"
            } project-trigger p-4 md:p-6 rounded-2xl border border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
            onClick={() =>
              setActiveProject(activeProject === "dartone" ? null : "dartone")
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base md:text-lg">🎯 DartOne</h1>
              <motion.span
                className="text-white/50 text-sm"
                animate={{ rotate: activeProject === "dartone" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>
            <p className="text-sm md:text-base text-white/60">
              A web application designed to track darts games and monitor player
              progress over time.
            </p>
          </motion.div>

          <motion.div
            className={`${
              activeProject === "standup" && "border-white/50"
            } project-trigger p-4 md:p-6 rounded-2xl border border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
            onClick={() =>
              setActiveProject(activeProject === "standup" ? null : "standup")
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base md:text-lg">🤖 StandUP Bot</h1>
              <motion.span
                className="text-white/50 text-sm"
                animate={{ rotate: activeProject === "standup" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>
            <p className="text-sm md:text-base text-white/60">
              Python Discord bot with automated standups, ticket management, and
              timezone-aware scheduling.
            </p>
          </motion.div>

          <motion.div
            className={`${
              activeProject === "factorio" && "border-white/50"
            } project-trigger p-4 md:p-6 rounded-2xl border border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
            onClick={() =>
              setActiveProject(activeProject === "factorio" ? null : "factorio")
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base md:text-lg">🏭 Factorio Calculator</h1>
              <motion.span
                className="text-white/50 text-sm"
                animate={{ rotate: activeProject === "factorio" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>
            <p className="text-sm md:text-base text-white/60">
              Next.js production calculator with sleek design, built from
              passion for the game&apos;s complexity.
            </p>
          </motion.div>

          <motion.div
            className={`${
              activeProject === "examsite" && "border-white/50"
            } project-trigger p-4 md:p-6 rounded-2xl border border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
            onClick={() =>
              setActiveProject(activeProject === "examsite" ? null : "examsite")
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base md:text-lg">🛒 Exam Site</h1>
              <motion.span
                className="text-white/50 text-sm"
                animate={{ rotate: activeProject === "examsite" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>
            <p className="text-sm md:text-base text-white/60">
              First full-stack experience: Django e-commerce site with CRUD
              operations and PostgreSQL.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
