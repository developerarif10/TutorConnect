"use client";

import { motion } from "framer-motion";
import {
    BadgeDollarSign,
    Camera,
    Code,
    Megaphone,
    Music,
    Palette,
    Settings,
    Users,
    Video
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    title: "Design",
    description: "Unleash your creativity",
    color: "bg-pink-500/10",
    href: "/categories/design",
  },
  {
    icon: <Code className="w-8 h-8 text-violet-500" />,
    title: "Development",
    description: "Build innovative solutions",
    color: "bg-violet-500/10",
    href: "/categories/development",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
    title: "Marketing",
    description: "Craft winning strategies",
    color: "bg-orange-500/10",
    href: "/categories/marketing",
  },
  {
    icon: <Settings className="w-8 h-8 text-cyan-500" />,
    title: "IT & Software",
    description: "Empower through technology",
    color: "bg-cyan-500/10",
    href: "/categories/it-software",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "Personal Development",
    description: "Achieve your true potential",
    color: "bg-green-500/10",
    href: "/categories/personal-development",
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-amber-500" />,
    title: "Business",
    description: "Grow your entrepreneurial skills",
    color: "bg-amber-500/10",
    href: "/categories/business",
  },
  {
    icon: <Camera className="w-8 h-8 text-indigo-500" />,
    title: "Photography",
    description: "Capture life's moments",
    color: "bg-indigo-500/10",
    href: "/categories/photography",
  },
  {
    icon: <Video className="w-8 h-8 text-blue-500" />,
    title: "Live Classes",
    description: "Conduct live sessions directly",
    color: "bg-blue-500/10",
    href: "/categories/live-classes",
  },
  {
    icon: <Music className="w-8 h-8 text-rose-500" />,
    title: "Music",
    description: "Master the art of sound",
    color: "bg-rose-500/10",
    href: "/categories/music",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Categories() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Explore Categories
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
                Discover your next passion from our diverse collection
            </p>
          </div>
          <Link
            href="/categories"
            className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-2"
          >
            Browse All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group h-full"
            >
              <Link href={category.href} className="block h-full">
                {/* Card Container */}
                <div className="relative h-full bg-white dark:bg-slate-900 rounded-[2rem] p-8 text-center transition-all duration-300 hover:shadow-lg border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:-translate-y-1">
                    
                   {/* Icon Container */}
                   <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                        <div className={`absolute inset-0 rounded-full ${category.color} blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="relative z-10 bg-white dark:bg-slate-800 rounded-full p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
                            {category.icon}
                        </div>
                   </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {category.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
