"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  // Handle clicking outside to close project details
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeProject &&
        !event.target.closest(".project-container") &&
        !event.target.closest(".project-trigger")
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

  const projectData = {
    dartone: {
      sections: [
        {
          title: "🛠️ Tech Stack & Features",
          content:
            "Built with React and Django REST Framework, DartOne features game tracking, statistical analysis, and responsive design. The backend handles scoring algorithms while the frontend provides an intuitive user experience with live updates and interactive charts for performance visualization.",
        },
        {
          title: "📊 Project Impact",
          content:
            "DartOne revolutionizes how players track their progress with automated scoring, historical performance analysis, and competitive leaderboards. Players can identify improvement areas, set goals, and compete with friends through detailed statistics and achievement systems.",
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
          title: "⚡ Workflow Enhancement",
          content:
            "Transforms chaotic team updates into structured, actionable insights. Automated reminders eliminate missed standups, while the ticket system converts discussions into trackable tasks. The bot maintains channel hygiene, making team communication more efficient and less cluttered.",
        },
      ],
    },
    factorio: {
      sections: [
        {
          title: "🏭 Calculator Design",
          content:
            "A Next.js-powered production calculator that brings clarity to Factorio&apos;s complex manufacturing chains. Built from passion for the game&apos;s engineering puzzles, it features intuitive ratio calculations, resource planning, and a clean interface that outshines existing tools in both aesthetics and functionality.",
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
    <>
      <h1 className="mb-12">Rosen Markov&apos;s portfolio</h1>
      <div className="w-[80vw] h-3/5 grid grid-cols-3 grid-rows-4 gap-2 grid-flow-col">
        <div className="col-span-1 row-span-4 rounded-2xl border-[1] border-white/15 p-4">
          {/* PFP AND TITLE SECTION */}
          <div className="w-full flex">
            <div
              style={{ boxShadow: "inset 0 0 10px 2px rgba(0,0,0,0.8)" }}
              className="rounded-full min-w-[150px] h-[150px] flex items-center justify-center"
            >
              <img
                src="/images/pfp.png"
                alt="Portfolio Image"
                className="rounded-full w-[150px] h-[150px] -z-[1] object-cover"
              />
            </div>

            {/* TITLE SEC */}
            <div className="flex flex-col w-max ml-4">
              <h1 className="border-b border-white/20 text-md mb-4 h-max pb-2">
                Hey 👋 I&apos;m Rosen
              </h1>
              <ul className="border-b border-white/10  text-[13px] h-max pb-2">
                <li className="mb-2">
                  ✨ Still trying to center divs since 2022
                </li>
                <li className="mb-2">
                  🎯 My aim is to build applications with no user friction
                </li>
              </ul>
            </div>
          </div>

          {/* PFP AND TITLE SECTION */}
          <div className="mt-4 flex flex-col justify-evenly ">
            <p className="text-md hover:text-white/90 transition-all duration-200 ease-in-out text-white/60">
              I&apos;m a software engineer passionate about building responsive web
              apps. I work with React and Next.js for dynamic UIs and have built
              full-stack projects using Django and Python, implementing REST
              APIs, CRUD features, and clean backend logic.
            </p>
            <div className="flex justify-evenly mt-8">
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/js.svg"
                alt="js icon"
              />
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/ts.svg"
                alt="ts icon"
              />
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/react.svg"
                alt="react icon"
              />
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/next.svg"
                alt="next icon"
              />
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/css.svg"
                alt="css icon"
              />
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/tailwindcss.svg"
                alt="tailwindcss icon"
              />
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/python.svg"
                alt="python icon"
              />
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
                src="/images/django.svg"
                alt="django icon"
              />
              <img
                className="w-[9%] cursor-pointer hover:scale-115 transition-all duration-200"
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
                className="col-span-1 row-span-2 rounded-2xl border-[1] border-white/15 p-4"
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
                className="col-span-1 row-span-2 rounded-2xl border-[1] border-white/15 p-4"
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
                  numerous projects, honing both frontend and backend skills. I
                  have a strong passion for frontend development and crafting
                  unique, purposeful solutions that focus on user-centered
                  design and real-world problem-solving.
                </p>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                key={`${activeProject}-section1`}
                className="project-container col-span-1 row-span-2 rounded-2xl border-[1] border-white/15 p-4"
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
                className="project-container col-span-1 row-span-2 rounded-2xl border-[1] border-white/15 p-4"
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

        <motion.div
          className={`${
            activeProject === "dartone" && "border-white/50"
          } project-trigger p-4 col-span-1 row-span-1 rounded-2xl border-[1] border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
          onClick={() =>
            setActiveProject(activeProject === "dartone" ? null : "dartone")
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <h1 className="">🎯 DartOne</h1>
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
          } project-trigger p-4 col-span-1 row-span-1 rounded-2xl border-[1] border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
          onClick={() =>
            setActiveProject(activeProject === "standup" ? null : "standup")
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <h1 className="">🤖 StandUP Bot</h1>
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
          } project-trigger p-4 col-span-1 row-span-1 rounded-2xl border-[1] border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
          onClick={() =>
            setActiveProject(activeProject === "factorio" ? null : "factorio")
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <h1 className="">🏭 Factorio Calculator</h1>
            <motion.span
              className="text-white/50 text-sm"
              animate={{ rotate: activeProject === "factorio" ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </div>
          <p className="text-sm text-white/60">
            Next.js production calculator with sleek design, built from passion
            for the game&apos;s complexity.
          </p>
        </motion.div>

        <motion.div
          className={`${
            activeProject === "examsite" && "border-white/50"
          } project-trigger p-4 col-span-1 row-span-1 rounded-2xl border-[1] border-white/15 cursor-pointer hover:border-white/50 transition-colors duration-200`}
          onClick={() =>
            setActiveProject(activeProject === "examsite" ? null : "examsite")
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <h1 className="">🛒 Exam Site</h1>
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
    </>
  );
}