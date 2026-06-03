import Link from "next/link";
import {
  PageHero,
  PrimaryButton,
  GhostButton,
  ArrowRight,
  ArrowUpRight,
  SectionHeader,
} from "./_lib/ui";

export default function Home() {
  return (
    <>
      <PageHero
        title={
          <>
           Wisconsin Rises to Enable STEM Growth (WI.R.E.S.)
          </>
        }
        desc={
          <>
            FTC W.I.R.E.S. is a community resource hub led by{" "}
            <span className="text-foreground">Team 13201 Hazmat</span>, with
            contributions from teams, mentors, and alumni across Wisconsin.
            We have created some guides, examples, and templates
            for common FTC tools so a newer team can grow
            faster and even an exisiting team can learn!.
          </>
        }
        cta={
          <>
            <PrimaryButton href="/resources" className="w-full sm:w-auto">
              Browse resources
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <GhostButton
              href="s-lending-ne/parttwork"
              className="w-full sm:w-auto"
            >
              See what we&rsquo;re building
            </GhostButton>
          </>
        }
      />

      <Stats />
      <Mission />
      <HomeCTA />
    </>
  );
}

/* =====================================================
 * Stats — editorial typography, no card grid
 * ===================================================== */
function Stats() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Achievement — the bigger, primary line */}
        <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          <span className="text-foreground">260+ teams</span>
          <span className="text-fade">
            {" "}
            are using FTC Wires resources, worldwide, today.
          </span>
        </p>

        {/* Hand-drawn divider — short rule, not a chip */}
        <div className="mt-10 flex items-center gap-3 sm:mt-14">
          <span
            className="h-px w-10 flex-none"
            style={{ background: "var(--border-strong)" }}
          />
          <span className="text-[11px] uppercase tracking-widest text-subtle">
            Our Target
          </span>
        </div>

        {/* Aspiration — smaller, secondary line */}
        <p className="mt-5 text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          <span className="text-fade">120 te</span>
          <span className="text-fade">ams registered for FTC in Wisconsin.</span>
        </p>
      </div>
    </section>
  );
}

/* =====================================================
 * Supported tools — honesty about what we cover
 * ===================================================== */
function SupportedTools() {
  const tools = [
    {
      name: "Roadrunner",
      blurb:
        "A motion-planning library for FTC — complex paths with precise velocity and acceleration control.",
    },
    {
      name: "Pedro Pathing",
      blurb:
        "Path following with Bézier curves, built for FTC — fast, consistent, and disturbance-tolerant.",
    },
    {
      name: "Blocks",
      blurb:
        "Drag-and-drop programming built into the Driver Station — write your first autonomous with no Java required.",
    },
    {
      name: "FTC SDK",
      blurb: "The official Java SDK — examples and patterns.",
    },
    {
      name: "Android Studio",
      blurb:
        "A step-by-step walkthrough of the official IDE — install, clone the FtcRobotController, and deploy to your Control Hub.",
    },
    {
      name: "Command-Based",
      blurb: "An architecture pattern for scalable codebases.",
    },
  ];
  
}

/* =====================================================
 * Mission — short, accurate
 * ===================================================== */
function Mission() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden rounded-[2rem] border p-10 sm:p-16 lg:p-20"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
        >
          <div
            aria-hidden
            className="bg-grid pointer-events-none absolute inset-0 opacity-50"
          />
          <div className="relative">

            {}
            <p className="mt-6 text-3xl font-medium leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-fade">Why we created WIRES</span>{" "}
            </p>

            {}
            <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                  At our first World Championship, we were partnered with a team from Nigeria that didn’t have an autonomous program. Because they had no idea where to start and how to program one.             </p>
              <p>
                During our downtime, we helped them build one, not just to improve their performance, but to help our entire alliance compete at a higher level.

                When we came home, we realized they probably weren’t the only team facing that problem.
                 Many teams hit the same wall without having someone there to guide them through it.{" "} We contiue to help team
                 across our competions by helping load WIRES whenever possible!
              </p>
            </div>

            {/* Attribution — small, hand-signed feel */}
            <p
              className="mt-8 text-[12.5px] uppercase tracking-widest text-subtle"
            >
              — Team 13201 Hazmat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
 * Home CTA
 * ===================================================== */
function HomeCTA() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          title={
            <>
              Made for every team in
              <span className="block text-fade">
               Wisconsin and the Globe.
              </span>
            </>
          }
          desc="FTC Wires is an open community project led by Team 13201 Hazmat with contributions from teams, mentors, and alumni across the state."
        />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/contact">
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
          <GhostButton href="/resources">Browse resources</GhostButton>
        </div>
      </div>
    </section>
  );
}
