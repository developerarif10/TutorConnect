import { Navbar } from "@/app/dashboard/_components/navbar";
import { Award, Users } from "lucide-react";

import PopularCourses from "../popular-courses";
import HeroLeftContent from "./hero-left-content";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 top-0 -z-10 h-screen w-1/2 bg-gradient-to-b from-primary/5 to-transparent opacity-30 blur-3xl"></div>

      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-24 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                #1 Trusted Learning Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Master New Skills <br />
              <span className="text-primary relative inline-block">
                Effectively
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7667 3.23592 50.7836 2.05445 74.5492 1.6385C118.91 0.862086 163.35 3.01633 207.697 6.45667" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Unlock your potential with expert-led courses. Join a community of ambitious learners and start building your future today.
            </p>

            <HeroLeftContent />

            <div className="pt-8 border-t border-border/50">
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">500+</h3>
                  <p className="text-sm text-muted-foreground font-medium">Active Courses</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">50k+</h3>
                  <p className="text-sm text-muted-foreground font-medium">Students</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">4.8/5</h3>
                  <p className="text-sm text-muted-foreground font-medium">Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
             {/* Decorative blob behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full opacity-40 blur-3xl animate-pulse"></div>

            <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden p-6 ring-1 ring-black/5 dark:ring-white/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="absolute top-0 right-0 p-4 opacity-50">
                    <Award className="w-24 h-24 text-primary/10" />
               </div>
              <PopularCourses />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -left-8 top-20 bg-card p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 hidden md:block animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Users size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">New Students</p>
                        <p className="text-sm font-bold">+2.4k this week</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
