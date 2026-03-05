import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { getDictionary } from "@/lib/getDictionary";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getGrants } from "@/lib/grants";
import { notFound } from "next/navigation";

export default async function GrantsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const grants = getGrants(locale as Locale);
  const categories = Array.from(new Set(grants.map((g) => g.category)));
  const fmt = new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: dict.grants.breadcrumb }]}
        locale={locale}
        homeLabel={dict.common.home}
      />

      <h1 className="text-3xl font-bold text-gc-blue mb-2">
        {dict.grants.pageTitle}
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">{dict.grants.pageDesc}</p>

      <div className="gc-alert gc-alert-info mb-8">
        <strong>{dict.grants.tip}</strong> {dict.grants.tipText}
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
                <div
                  key={grant.id}
                  id={grant.id}
                  className="gc-card scroll-mt-24"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{grant.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gc-blue">
                        {grant.title}
                      </h3>
                      <span className="text-gc-green font-bold">
                        {dict.common.upTo} {fmt.format(grant.maxAmount)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{grant.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gc-blue mb-2">
                      {dict.grants.keyBenefits}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {grant.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gc-green mt-0.5">
                            &#10003;
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gc-blue mb-2">
                      {dict.grants.eligibleWork}
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

                  <Link
                    href={`/${locale}/apply`}
                    className="gc-btn gc-btn-primary text-sm"
                  >
                    {dict.grants.applyForThis}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
