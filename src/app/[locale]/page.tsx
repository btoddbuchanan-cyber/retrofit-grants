import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getGrants, getMaxTotalGrant } from "@/lib/grants";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const grants = getGrants(locale as Locale);
  const maxTotal = getMaxTotalGrant();
  const fmt = new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  return (
    <>
      {/* Hero section */}
      <section className="bg-gc-hero">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="gc-alert gc-alert-info mb-6">
              <strong>{dict.home.alertOpen}</strong> {dict.home.alertFiscal}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gc-blue mb-4 leading-tight">
              {dict.home.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gc-blue-light mb-8 leading-relaxed">
              {dict.home.heroDesc.replace("{maxTotal}", fmt.format(maxTotal))}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/eligibility`}
                className="gc-btn gc-btn-primary"
              >
                {dict.home.checkEligibility}
              </Link>
              <Link
                href={`/${locale}/apply`}
                className="gc-btn gc-btn-outline"
              >
                {dict.home.startApplication}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gc-blue mb-10 text-center">
            {dict.home.howItWorks}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: dict.home.step1Title, desc: dict.home.step1Desc },
              { step: 2, title: dict.home.step2Title, desc: dict.home.step2Desc },
              { step: 3, title: dict.home.step3Title, desc: dict.home.step3Desc },
              { step: 4, title: dict.home.step4Title, desc: dict.home.step4Desc },
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
            {dict.home.availableGrants}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            {dict.home.availableGrantsDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grants.map((grant) => (
              <Link
                key={grant.id}
                href={`/${locale}/grants#${grant.id}`}
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
                    {dict.common.upTo} {fmt.format(grant.maxAmount)}
                  </span>
                  <span className="text-gc-accent text-sm font-medium group-hover:underline">
                    {dict.common.learnMore} &rarr;
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
              {dict.home.validationTitle}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {dict.home.validationDesc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="gc-card">
                <div className="text-2xl mb-2">&#128248;</div>
                <h3 className="font-bold text-gc-blue mb-2">
                  {dict.home.photoDoc}
                </h3>
                <p className="text-sm text-gray-600">
                  {dict.home.photoDocDesc}
                </p>
              </div>
              <div className="gc-card">
                <div className="text-2xl mb-2">&#9989;</div>
                <h3 className="font-bold text-gc-blue mb-2">
                  {dict.home.proSignOff}
                </h3>
                <p className="text-sm text-gray-600">
                  {dict.home.proSignOffDesc}
                </p>
              </div>
              <div className="gc-card">
                <div className="text-2xl mb-2">&#128176;</div>
                <h3 className="font-bold text-gc-blue mb-2">
                  {dict.home.receiveGrant}
                </h3>
                <p className="text-sm text-gray-600">
                  {dict.home.receiveGrantDesc}
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
            {dict.home.ctaTitle}
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            {dict.home.ctaDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/eligibility`}
              className="gc-btn gc-btn-success"
            >
              {dict.home.ctaEligibility}
            </Link>
            <Link
              href={`/${locale}/apply`}
              className="gc-btn gc-btn-outline border-white text-white hover:bg-white hover:text-gc-blue"
            >
              {dict.home.ctaApply}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
