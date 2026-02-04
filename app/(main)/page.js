import { SectionTitle } from "@/components/section-title";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { getCourseList } from "@/queries/courses";

import Categories from "@/components/categories-section";
import { FAQSection } from "@/components/faq-section";
import Hero from "@/components/hero-section/hero";
import { InfiniteMovingCardsPage } from "@/components/ui/testimonial-cards";
import { getOverallReviews } from "@/queries/testimonials";
import CourseCard from "./courses/_components/CourseCard";

const HomePage = async () => {
  const courses = await getCourseList();
  // const categories = await getCategories();
  const testimonials = await getOverallReviews();
  return (
    <>
      {/* --- Hero section code --- */}
      <Hero />
      {/* --- Category section --- */}
      <Categories />

      {/* Courses */}
      <section id="courses" className="container space-y-6 md:py-12">
        <div className="flex items-center justify-between">
          <SectionTitle className="text-3xl md:text-4xl font-bold">
            Courses
          </SectionTitle>
          <Link
            href="/courses"
            className=" text-sm font-medium hover:opacity-80 flex items-center gap-1"
          >
            Browse All <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {courses.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </section>

      <section id="testimonials" className="container space-y-6">
        <div className="flex items-center justify-between">
          <SectionTitle className="text-3xl md:text-4xl font-bold mt-10">
            Get a glimpse of what others are achieving through learning
          </SectionTitle>
        </div>

        <div className="grid">
          <InfiniteMovingCardsPage testimonials={testimonials} />
        </div>
      </section>

      {/* card section */}

      {/* card section */}
      <div className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-purple-600 dark:from-primary/80 dark:to-purple-900 shadow-2xl">
                {/* Decorative patterns */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8 text-center md:text-left">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Become an Instructor!
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed font-medium">
                            Join our community of expert instructors. Share your knowledge, inspire students, and earn while doing what you love.
                        </p>
                    </div>
                    
                    <button className="flex-shrink-0 bg-white text-primary hover:bg-white/90 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 transform">
                        Start Teaching
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Accordion section */}
      <FAQSection />
    </>
  );
};
export default HomePage;
