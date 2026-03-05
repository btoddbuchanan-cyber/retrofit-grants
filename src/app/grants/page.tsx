import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { grants } from "@/lib/grants";

export const metadata = {
  title: "Available Grants - GreenHome Canada",
  description:
    "Explore all available retrofit grant categories including heat pumps, solar power, insulation, windows, and more.",
};

export default function GrantsPage() {
  const categories = Array.from(new Set(grants.map((g) => g.category)));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Available Grants" }]} />

      <h1 className="text-3xl font-bold text-gc-blue mb-2">
        Available Retrofit Grants
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        The Canada Greener Homes Retrofit Grant program offers funding across
        multiple categories. You may apply for grants in more than one category.
        Review the details below to plan your retrofit project.
      </p>

      <div className="gc-alert gc-alert-info mb-8">
        <strong>Tip:</strong> Combining multiple upgrades (e.g., insulation +
        air sealing + heat pump) maximizes energy savings and total grant
        funding.
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-12">
          <h2 className="text-xl font-bold text-gc-blue-light mb-4 border-b border-gc-border pb-2">
            {cat}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {grants
              .filter((g) => g.category === cat)
              .map((grant) => (
                <div key={grant.id} id={grant.id} className="gc-card scroll-mt-24">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{grant.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gc-blue">
                        {grant.title}
                      </h3>
                      <span className="text-gc-green font-bold">
                        Up to ${grant.maxAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{grant.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gc-blue mb-2">
                      Key Benefits
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {grant.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gc-green mt-0.5">&#10003;</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gc-blue mb-2">
                      Eligible Work
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {grant.eligibleWork.map((w, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gc-accent">&#8226;</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/apply" className="gc-btn gc-btn-primary text-sm">
                    Apply for This Grant
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
