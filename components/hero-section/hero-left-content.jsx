"use client";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroLeftContent() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      {session ? (
        <Link href="/courses" className="w-full sm:w-auto">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 w-full sm:w-auto">
            Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <>
          <Link href="/register/student" className="w-full sm:w-auto">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 w-full sm:w-auto">
              Start Learning
            </Button>
          </Link>
          <Link href="/register/instructor" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="rounded-full h-12 px-8 text-base font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-foreground transition-all w-full sm:w-auto"
            >
              Become Instructor
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
