import { formatPrice } from "@/lib/formatPrice";
import { getCourseList } from "@/queries/courses";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function PopularCourses() {
  const courses = await getCourseList();

  // Get first 3 courses
  const topCourses = courses?.slice(0, 3);

  return (
    <div className="p-4 md:p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Popular Courses
        </h3>
        <Link href="/courses">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary/80 hover:bg-primary/5 -mr-2"
          >
            View All
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {topCourses?.map((course) => (
          <Link
            href={`/courses/${course.id}`}
            key={course.id}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/60 dark:hover:bg-slate-800/60 hover:shadow-sm border border-transparent hover:border-border/50 transition-all group"
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
              <Image
                src={`/assets/images/courses/${course?.thumbnail}`} // Adjust the path according to your image storage
                alt={course?.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                {course?.title}
              </h4>
              <p className="text-xs text-muted-foreground truncate mt-1">
                {course?.description}
              </p>
              <div className="flex items-center mt-1.5 gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${
                        i < 4
                          ? "fill-current"
                          : "text-slate-200 dark:text-slate-700 fill-current"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                   4.8
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-sm font-bold text-primary">
                {formatPrice(course.price)}
              </span>
            </div>
          </Link>
        ))}

        {!topCourses?.length && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            No courses available.
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border/50">
        <Link href="/register/student" className="block w-full">
            <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 shadow-none justify-between group">
               <span>Start Learning Now</span>
               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
        </Link>
      </div>
    </div>
  );
}
