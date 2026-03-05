import Link from "next/link";
import { grants, getMaxTotalGrant } from "@/lib/grants";

export default function Home() {
  const maxTotal = getMaxTotalGrant();

  return (
    <>
      {/* Hero section */}
      <section className="bg-gc-hero">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="gc-alert gc-alert-info mb-6">
              <strong>Applications are now open</strong> for the 2025-2026
              fiscal year. Funding is available on a first-come, first-served
              basis.
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gc-blue mb-4 leading-tight">
              Canada Greener Homes Retrofit Grant
            </h1>
            <p className="text-lg md:text-xl text-gc-blue-light mb-8 leading-relaxed">
              Get up to <strong>${maxTotal.toLocaleString()}</strong> in federal
              grants to make your home more energy efficient. Reduce your carbon
              footprint and save on energy costs with upgrades like heat pumps,
              solar panels, insulation, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/eligibility" className="gc-btn gc-btn-primary">
                Check Your Eligibility
              </Link>
              <Link href="/apply" className="gc-btn gc-btn-outline">
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gc-blue mb-10 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Check Eligibility",
                desc: "Verify you qualify based on home ownership, property type, and location.",
              },
              {
                step: 2,
                title: "Apply Online",
                desc: "Submit your application with property details and your planned retrofit upgrades.",
              },
              {
                step: 3,
                title: "Complete Upgrades",
                desc: "Hire qualified professionals and have your retrofit work completed.",
              },
              {
                step: 4,
                title: "Submit Validation",
                desc: "Upload before/after photos and get professional sign-off to receive your grant.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="gc-step gc-step-active mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gc-blue mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available grants */}
      <section className="py-16 bg-gc-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gc-blue mb-2 text-center">
            Available Grants
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Multiple retrofit categories are available. You can apply for
            grants in more than one category.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grants.map((grant) => (
              <Link
                key={grant.id}
                href={`/grants#${grant.id}`}
                className="gc-card no-underline group"
              >
                <div className="text-3xl mb-3">{grant.icon}</div>
                <h3 className="font-bold text-gc-blue mb-1 group-hover:text-gc-accent">
                  {grant.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{grant.category}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {grant.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gc-green font-bold">
                    Up to ${grant.maxAmount.toLocaleString()}
                  </span>
                  <span className="text-gc-accent text-sm font-medium group-hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Validation section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gc-blue mb-4">
              Validation &amp; Verification
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              To ensure the integrity of the program, all retrofit work must be
              validated. Homeowners take before and after photos, and a qualified
              professional (builder, engineer, electrician, or plumber) provides
              a signed validation of the completed installation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="gc-card">
                <div className="text-2xl mb-2">📸</div>
                <h3 className="font-bold text-gc-blue mb-2">
                  Photo Documentation
                </h3>
                <p className="text-sm text-gray-600">
                  Take dated photos before work begins and after completion.
                  Shows the area, equipment, and installation quality.
                </p>
              </div>
              <div className="gc-card">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-bold text-gc-blue mb-2">
                  Professional Sign-Off
                </h3>
                <p className="text-sm text-gray-600">
                  A licensed builder, engineer, electrician, or plumber verifies
                  the work meets code and program standards.
                </p>
              </div>
              <div className="gc-card">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-bold text-gc-blue mb-2">
                  Receive Your Grant
                </h3>
                <p className="text-sm text-gray-600">
                  Once validated, your grant is deposited directly into your bank
                  account within 4-6 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gc-blue text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make Your Home Greener?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Check your eligibility in under 2 minutes, then start your
            application today. Funding is limited.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/eligibility" className="gc-btn gc-btn-success">
              Check Eligibility
            </Link>
            <Link
              href="/apply"
              className="gc-btn gc-btn-outline border-white text-white hover:bg-white hover:text-gc-blue"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
