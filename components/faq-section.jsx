import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="Faq" className="container">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* First Column */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-muted/50 rounded-lg border-none px-2"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline text-foreground">
                  <span className="text-left font-semibold">
                    What types of courses do you offer?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">
                  We offer a wide range of courses including programming,
                  design, business, marketing, and personal development. Our
                  courses are designed for beginners to advanced learners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-muted/50 rounded-lg border-none px-2"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline text-foreground">
                  <span className="text-left font-semibold">
                    How do I enroll in a course?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">
                  Enrolling is easy! Simply browse our course catalog, select
                  the course you're interested in, and click the "Enroll Now"
                  button. You'll be guided through the payment process and gain
                  immediate access to your course materials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-muted/50 rounded-lg border-none px-2"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline text-foreground">
                  <span className="text-left font-semibold">
                    Are the courses self-paced or instructor-led?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">
                  We offer both self-paced and instructor-led courses.
                  Self-paced courses allow you to learn at your own convenience,
                  while instructor-led courses provide structured learning with
                  direct guidance and feedback from experts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Second Column */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-4"
                className="bg-muted/50 rounded-lg border-none px-2"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline text-foreground">
                  <span className="text-left font-semibold">
                    Do you offer certificates upon completion?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">
                  Yes, most of our courses offer a certificate of completion
                  that you can share on your LinkedIn profile or resume to
                  showcase your new skills.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-muted/50 rounded-lg border-none px-2"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline text-foreground">
                  <span className="text-left font-semibold">
                    Can I access the courses on mobile?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">
                   Absolutely! our platform is fully responsive, allowing you
                   to learn anytime, anywhere, on any device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-muted/50 rounded-lg border-none px-2"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline text-foreground">
                  <span className="text-left font-semibold">
                    What is your refund policy?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">
                  We offer a 30-day money-back guarantee. If you're not
                  satisfied with a course, simply contact our support team
                  within 30 days of purchase for a full refund.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
